import { Connection, PublicKey } from "@solana/web3.js";
declare class EmeraldPdaClient {
    programId: PublicKey;
    connection: Connection;
    constructor(connection: Connection, programId?: PublicKey);
    communityPool(communityId: number): PublicKey;
    snapshotPeg(communityId: number): Promise<PublicKey>;
    collection(communityId: number, collectionId: number): PublicKey;
    collectionPolicy(communityId: number, collectionId: number, policyId: number): PublicKey;
    userAccount(user: PublicKey): PublicKey;
    userCommunityAccount(user: PublicKey, communityId: number): PublicKey;
    taken(user: PublicKey, communityId: number): PublicKey;
    nftTicket(nft: PublicKey, user: PublicKey, communityId: number): PublicKey;
}
export default EmeraldPdaClient;
