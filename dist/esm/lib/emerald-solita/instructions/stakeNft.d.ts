/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
/**
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export declare type StakeNftInstructionArgs = {
    communityIdx: number;
    collectionIdx: number;
    communityAccount: number;
    policyIdx: number;
};
/**
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export declare const stakeNftStruct: beet.BeetArgsStruct<StakeNftInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _stakeNft_ instruction
 *
 * @property [_writable_, **signer**] user
 * @property [_writable_] mainPool
 * @property [_writable_] collection
 * @property [] collectionPolicy
 * @property [_writable_] communityPool
 * @property [_writable_] userAccount
 * @property [_writable_] nftTicket
 * @property [_writable_] userCommunityAccount
 * @property [_writable_] mintMetadata
 * @property [_writable_] masterMintMetadata
 * @property [_writable_] userNftTokenAccount
 * @property [] nftMint
 * @property [] tokenMetadataProgram
 * @property [] editionId
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export declare type StakeNftInstructionAccounts = {
    user: web3.PublicKey;
    mainPool: web3.PublicKey;
    collection: web3.PublicKey;
    collectionPolicy: web3.PublicKey;
    communityPool: web3.PublicKey;
    userAccount: web3.PublicKey;
    nftTicket: web3.PublicKey;
    userCommunityAccount: web3.PublicKey;
    mintMetadata: web3.PublicKey;
    masterMintMetadata: web3.PublicKey;
    userNftTokenAccount: web3.PublicKey;
    nftMint: web3.PublicKey;
    tokenMetadataProgram: web3.PublicKey;
    editionId: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const stakeNftInstructionDiscriminator: number[];
/**
 * Creates a _StakeNft_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export declare function createStakeNftInstruction(accounts: StakeNftInstructionAccounts, args: StakeNftInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
