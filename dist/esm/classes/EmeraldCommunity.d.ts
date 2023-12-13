import { Connection, PublicKey } from "@solana/web3.js";
import { CommunityPool, NftTicket, UserAccount, UserCommunityAccount } from "../lib/emerald-solita";
import Emerald from "./Emerald";
declare class EmeraldCommunity {
    communityId: number;
    communityPubkey: PublicKey;
    emeraldClient: Emerald;
    admin: PublicKey | undefined;
    user: PublicKey;
    constructor(connection: Connection, communityId: number, user: PublicKey, admin?: PublicKey);
    initializeUserGlobalAccount(): Promise<import("@solana/web3.js").TransactionInstruction>;
    initializeUserCommunityAccount(): Promise<import("@solana/web3.js").TransactionInstruction>;
    getUserGlobalAccount(): Promise<UserAccount | null>;
    getUserCommunityAccount(): Promise<UserCommunityAccount | null>;
    initializeUserRewardVault(): Promise<import("@solana/web3.js").TransactionInstruction>;
    getCommunity(): Promise<CommunityPool>;
    addCollection(verifiedCollectionAddress: PublicKey, verifiedCreator?: PublicKey): Promise<import("@solana/web3.js").TransactionInstruction>;
    getCollections(): Promise<import("../lib/emerald-solita").Collection[]>;
    getWalletNfts(): Promise<import("@metaplex-foundation/js").FindNftsByOwnerOutput>;
    matchNftToCollection(nft: PublicKey): Promise<{
        data: import("../lib/emerald-solita").Collection;
        index: number;
    }>;
    stakeNft(nft: PublicKey, policy?: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    unstakeNft(nft: PublicKey, policy?: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    claimRewardPerNft(nft: PublicKey, policy?: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    getNftTicket(nft: PublicKey): Promise<NftTicket | null>;
    getUserStakedNfts(): Promise<{
        data: NftTicket;
        mint: PublicKey;
    }[]>;
    claimAllRewards(): Promise<import("@solana/web3.js").TransactionInstruction[]>;
}
export default EmeraldCommunity;
