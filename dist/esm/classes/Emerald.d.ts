import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { Collection, CollectionPolicyArgs, MainPool } from "../lib/emerald-solita";
import EmeraldPdaClient from "./EmeraldPdaClient";
declare class Emerald {
    connection: Connection;
    metaplex: Metaplex;
    mainPool: PublicKey;
    programId: PublicKey;
    PdaClient: EmeraldPdaClient;
    constructor(connection: Connection, programId?: PublicKey);
    getProtocolData(): Promise<MainPool>;
    getWhitelistedCollections(communityId: number): Promise<Collection[]>;
    createNewCommunity(rewardMint: PublicKey, admin: PublicKey): Promise<import("@solana/web3.js").TransactionInstruction[]>;
    addCollectionToCommunity(communityId: number, admin: PublicKey, verifiedCollectionAddress: PublicKey, verifiedCreator?: PublicKey): Promise<import("@solana/web3.js").TransactionInstruction>;
    addCollectionPolicy(communityId: number, collectionId: number, policy: CollectionPolicyArgs): Promise<import("@solana/web3.js").TransactionInstruction>;
    lockCommunity(communityId: number, admin: PublicKey): Promise<import("@solana/web3.js").TransactionInstruction>;
    initializeUserGlobalAccount(user: PublicKey): Promise<import("@solana/web3.js").TransactionInstruction>;
    fetchUserCommunityAccountIndex(user: PublicKey, userGlobalAccountPda: PublicKey, communityPool: PublicKey): Promise<number>;
    initializeUserCommunityAccount(user: PublicKey, communityId: number, userCommunityCounter?: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    stakeNft(user: PublicKey, nft: PublicKey, communityId: number, collectionId: number, policyId: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    unstakeNft(user: PublicKey, nft: PublicKey, communityId: number, collectionId: number, policyId: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    claimRewards(user: PublicKey, nft: PublicKey, communityId: number, collectionId: number, policyId: number): Promise<import("@solana/web3.js").TransactionInstruction>;
    initializeRewardVault(communityId: number, admin: PublicKey): Promise<import("@solana/web3.js").TransactionInstruction>;
    fundRewards(communityId: number, admin: PublicKey, amount: number): Promise<import("@solana/web3.js").TransactionInstruction[]>;
}
export default Emerald;
