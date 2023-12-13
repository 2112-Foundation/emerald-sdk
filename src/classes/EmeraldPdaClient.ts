import {Connection, PublicKey} from "@solana/web3.js";
import {
    COLLECTION_POLICY_SEED,
    COLLECTION_SEED,
    COMMUNITY_SEED,
    MAIN_POOL, MAIN_SEED, NFT_TICKET,
    SNAPSHOT_PEG_SEED,
    USER_ACCOUNT_SEED, USER_COMMUNITY_ACCOUNT_SEED
} from "../constants";
import {BN} from "@coral-xyz/anchor";
import {CommunityPool, PROGRAM_ID} from "../lib/emerald-solita";

class EmeraldPdaClient {
    programId: PublicKey;
    connection: Connection;
    constructor(
        connection: Connection,
        programId?: PublicKey,
    ) {
        this.programId = programId || PROGRAM_ID;
        this.connection = connection;
    }

    public communityPool(communityId: number) {
        const [communityPool] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(COMMUNITY_SEED),
                MAIN_POOL.toBuffer(),
                (new BN(communityId)).toArrayLike(Buffer, "be", 4)
            ],
            this.programId
        );

        return communityPool;
    }

    public async snapshotPeg(communityId: number) {
        const communityPool = this.communityPool(communityId);
        const communityData = await CommunityPool.fromAccountAddress(
            this.connection,
            communityPool
        );

        const [snapshotPeg] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(SNAPSHOT_PEG_SEED),
                communityPool.toBuffer(),
                new BN(communityData.totalUsers).toArrayLike(Buffer, "be", 4),
            ],
            this.programId
        );

        return snapshotPeg;
    }

    public collection(communityId: number, collectionId: number) {
        const communityPool = this.communityPool(communityId);

        const [collection] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(COLLECTION_SEED),
                communityPool.toBuffer(),
                new BN(collectionId).toArrayLike(Buffer, "be", 4),
            ],
            this.programId
        );

        return collection;
    }

    public collectionPolicy(communityId: number, collectionId: number, policyId: number) {
        const communityPool = this.communityPool(communityId);
        const collectionPda = this.collection(communityId, collectionId);

        const [collectionPolicyPda] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(COLLECTION_POLICY_SEED),
                collectionPda.toBuffer(),
                communityPool.toBuffer(),
                (new BN(policyId)).toArrayLike(Buffer, "be", 4),
            ],
            this.programId
        );

        return collectionPolicyPda;
    }

    public userAccount(user: PublicKey) {
        const [userAccount] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_ACCOUNT_SEED),
                user.toBuffer(),
                MAIN_POOL.toBuffer()
            ],
            this.programId
        );

        return userAccount;
    }

    public userCommunityAccount(user: PublicKey, communityId: number) {
        const userGlobalAccountPda = this.userAccount(user);

        const [userCommunityAccount] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                user.toBuffer(),
                userGlobalAccountPda.toBuffer(),
                (new BN(communityId)).toArrayLike(Buffer, "be", 4),
            ],
            this.programId
        );

        return userCommunityAccount;
    }

    public taken(user: PublicKey, communityId: number) {
        const communityPool = this.communityPool(communityId);

        const [taken] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(MAIN_SEED),
                user.toBuffer(),
                communityPool.toBuffer(),
            ],
            this.programId
        );

        return taken;
    }

    public nftTicket(nft: PublicKey, user: PublicKey, communityId: number) {
        const userGlobalAccount = this.userAccount(user);
        const userCommunityAccount = this.userCommunityAccount(user, communityId);

        const [nftTicket] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(NFT_TICKET),
                userGlobalAccount.toBuffer(),
                userCommunityAccount.toBuffer(),
                nft.toBuffer()
            ],
            this.programId
        );

        return nftTicket;
    }
}

export default EmeraldPdaClient;