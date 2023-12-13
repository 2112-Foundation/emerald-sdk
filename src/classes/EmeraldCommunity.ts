import {Connection, PublicKey} from "@solana/web3.js";
import {COMMUNITY_SEED, MAIN_POOL, NFT_TICKET, USER_ACCOUNT_SEED, USER_COMMUNITY_ACCOUNT_SEED} from "../constants";
import {BN} from "@coral-xyz/anchor";
import {CommunityPool, NftTicket, PROGRAM_ID, UserAccount, UserCommunityAccount} from "../lib/emerald-solita";
import Emerald from "./Emerald";
import {createAssociatedTokenAccountIdempotentInstruction, getAssociatedTokenAddressSync} from "@solana/spl-token";

class EmeraldCommunity {
    public communityId: number;
    public communityPubkey: PublicKey;
    public emeraldClient: Emerald;
    public admin: PublicKey | undefined;
    public user: PublicKey;

    constructor(
        connection: Connection,
        communityId: number,
        user: PublicKey,
        admin?: PublicKey,
    ) {
        this.communityId = communityId;
        this.emeraldClient = new Emerald(connection);
        this.admin = admin;
        this.user = user;

        const [communityPool] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(COMMUNITY_SEED),
                MAIN_POOL.toBuffer(),
                (new BN(communityId)).toArrayLike(Buffer, "be", 4)
            ],
            PROGRAM_ID
        );

        this.communityPubkey = communityPool;
    }

    async initializeUserGlobalAccount() {
        return this.emeraldClient.initializeUserGlobalAccount(this.user);
    }

    async initializeUserCommunityAccount() {
        return this.emeraldClient.initializeUserCommunityAccount(this.user, this.communityId);
    }

    async getUserGlobalAccount() {
        const [pda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_ACCOUNT_SEED),
                this.user.toBuffer(),
                MAIN_POOL.toBuffer()
            ],
            PROGRAM_ID
        );

        let data: UserAccount | null = null;
        try {
            data = await UserAccount.fromAccountAddress(this.emeraldClient.connection, pda);
        } catch (err) {
            data = null;
        }

        return data;
    }

    async getUserCommunityAccount() {
        const [userGlobalAccountPda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_ACCOUNT_SEED),
                this.user.toBuffer(),
                MAIN_POOL.toBuffer()
            ],
            PROGRAM_ID
        );


        let userCommunityAccountIndex: number | null = null;
        try {
            userCommunityAccountIndex = await this.emeraldClient.fetchUserCommunityAccountIndex(
                this.user,
                userGlobalAccountPda,
                this.communityPubkey
            );
        } catch (err) {
            userCommunityAccountIndex = null;
        }

        if (userCommunityAccountIndex === null) {
            return null;
        }

        const [userCommunityAccountPda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                this.user.toBuffer(),
                userGlobalAccountPda.toBuffer(),
                (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
            ],
            PROGRAM_ID
        );

        let communityAccountData: UserCommunityAccount | null = null;
        try {
            communityAccountData = await UserCommunityAccount.fromAccountAddress(
                this.emeraldClient.connection,
                userCommunityAccountPda
            );
        } catch (err) {
            communityAccountData = null;
        }

        return communityAccountData;
    }

    async initializeUserRewardVault() {
        const communityPoolData = await this.getCommunity();
        const { coinMint } = communityPoolData;

        const ata = getAssociatedTokenAddressSync(
            coinMint,
            this.user,
            false
        );

        return createAssociatedTokenAccountIdempotentInstruction(
            this.user,
            ata,
            this.user,
            coinMint
        );
    }

    async getCommunity() {
        return await CommunityPool.fromAccountAddress(this.emeraldClient.connection, this.communityPubkey);
    }

    async addCollection(verifiedCollectionAddress: PublicKey, verifiedCreator?: PublicKey) {
        return this.emeraldClient.addCollectionToCommunity(
            this.communityId,
            // @ts-ignore
            this.admin,
            verifiedCollectionAddress,
            verifiedCreator
        );
    }

    async getCollections() {
        return await this.emeraldClient.getWhitelistedCollections(this.communityId);
    }

    async getWalletNfts() {
        const allWalletNfts = await this.emeraldClient.metaplex.nfts().findAllByOwner({ owner: this.user });
        return allWalletNfts;
    }

    async matchNftToCollection(nft: PublicKey) {
        const collections = await this.getCollections();
        const metadata = await this.emeraldClient.metaplex.nfts().findByMint({ mintAddress: nft });

        const verifiedCollection = metadata.collection?.verified ? metadata.collection.address : null;
        if (!verifiedCollection) throw "This NFT does not have a verified collection. Therefore, it cannnot be staked in this pool.";

        const verifiedCollectionIndex = collections
            .map(collection => {
                return collection.masterCollectionKey.toString();
            })
            .indexOf(verifiedCollection.toString());

        const verifiedCollectionData = collections[verifiedCollectionIndex];
        return {
            data: verifiedCollectionData,
            index: verifiedCollectionIndex
        }
    }

    async stakeNft(nft: PublicKey, policy?: number) {
        const {
            index: verifiedCollectionIndex,
            data: verifiedCollectionData
        } = await this.matchNftToCollection(nft);

        let policyIndex: number | undefined;

        if (verifiedCollectionData.totalPolicies > 1) {
            policyIndex = policy;
        } else {
            policyIndex = 0;
        }

        if (typeof policyIndex === "undefined") {
            throw "There's more than 1 policy that can be used with this instruction. Specify ID of the policy you want to use with this instruction by passing it as the second function argument. You can leave this field empty when there's only 1 existing policy."
        }

        return this.emeraldClient.stakeNft(
            this.user,
            nft,
            this.communityId,
            verifiedCollectionIndex,
            policyIndex
        );
    }

    async unstakeNft(nft: PublicKey, policy?: number) {
        const {
            index: verifiedCollectionIndex,
            data: verifiedCollectionData
        } = await this.matchNftToCollection(nft);

        let policyIndex: number | undefined;

        if (verifiedCollectionData.totalPolicies > 1) {
            policyIndex = policy;
        } else {
            policyIndex = 0;
        }

        if (typeof policyIndex === "undefined") {
            throw "There's more than 1 policy that can be used with this instruction. Specify ID of the policy you want to use with this instruction by passing it as the second function argument. You can leave this field empty when there's only 1 existing policy."
        }

        return await this.emeraldClient.unstakeNft(
            this.user,
            nft,
            this.communityId,
            verifiedCollectionIndex,
            policyIndex
        );
    }

    async claimRewardPerNft(nft: PublicKey, policy?: number) {
        const { index, data } = await this.matchNftToCollection(nft);

        let policyIndex: number | undefined;

        if (data.totalPolicies > 1) {
            policyIndex = policy;
        } else {
            policyIndex = 0;
        }

        if (typeof policyIndex === "undefined") {
            throw "There's more than 1 policy that can be used with this instruction. Specify ID of the policy you want to use with this instruction by passing it as the second function argument. You can leave this field empty when there's only 1 existing policy."
        }

        return this.emeraldClient.claimRewards(
            this.user,
            nft,
            this.communityId,
            index,
            policyIndex
        );
    }

    async getNftTicket(nft: PublicKey) {
        const [userGlobalAccountPda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_ACCOUNT_SEED),
                this.user.toBuffer(),
                this.emeraldClient.mainPool.toBuffer()
            ],
            PROGRAM_ID
        );

        const userCommunityAccountIndex = await this.emeraldClient.fetchUserCommunityAccountIndex(this.user, userGlobalAccountPda, this.communityPubkey);
        const [userCommunityAccountPda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                this.user.toBuffer(),
                userGlobalAccountPda.toBuffer(),
                (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
            ],
            PROGRAM_ID
        );

        const [nftTicketPda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(NFT_TICKET),
                userGlobalAccountPda.toBuffer(),
                userCommunityAccountPda.toBuffer(),
                nft.toBuffer()
            ],
            PROGRAM_ID
        );

        let ticketData: NftTicket | null = null;
        try {
            const data = await NftTicket.fromAccountAddress(this.emeraldClient.connection, nftTicketPda);
            if (data) ticketData = data;
        } catch (err) {
            ticketData = null;
        }

        return ticketData;
    }

    async getUserStakedNfts() {
        console.log("getUserStakedNfts");

        const whitelisted = await this.getCollections();
        const whitelistedMapped = whitelisted.map(w => w.masterCollectionKey.toString());
        const allHeldNfts = await this.emeraldClient.metaplex.nfts().findAllByOwner({ owner: this.user });

        const filteredByWhitelist = allHeldNfts.filter(nft => {
            return nft.collection && nft.collection.verified && whitelistedMapped.includes(nft.collection.address.toString())
        });

        const filteredByState = await Promise.all(filteredByWhitelist.map(async (nft) => {
            const address: PublicKey = ('mintAddress' in nft) ? nft.mintAddress : nft.address;
            const ticketData: NftTicket | null = await this.getNftTicket(address);

            if (ticketData) {
                return {
                    data: ticketData,
                    mint: address
                }
            } else {
                return null;
            }
        }));

        const stakedFiltered = filteredByState.filter(f => !!f);
        return stakedFiltered as { data: NftTicket, mint: PublicKey }[];
    }

    async claimAllRewards() {
        const allStakedNfts = await this.getUserStakedNfts();

        return await Promise.all(allStakedNfts.map(async ({ mint }) => {
            return await this.claimRewardPerNft(mint, 0);
        }));
    }


}

export default EmeraldCommunity;