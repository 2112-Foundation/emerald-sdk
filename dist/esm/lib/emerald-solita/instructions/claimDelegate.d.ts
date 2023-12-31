/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
/**
 * @category Instructions
 * @category ClaimDelegate
 * @category generated
 */
export declare type ClaimDelegateInstructionArgs = {
    communityIdx: number;
    collectionIdx: number;
    collectionPolicyIdx: number;
    userCommunityAccountIdx: number;
    nftMint: web3.PublicKey;
    owner: web3.PublicKey;
};
/**
 * @category Instructions
 * @category ClaimDelegate
 * @category generated
 */
export declare const claimDelegateStruct: beet.BeetArgsStruct<ClaimDelegateInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _claimDelegate_ instruction
 *
 * @property [_writable_, **signer**] delegate
 * @property [_writable_] mainPool
 * @property [_writable_] userAccount
 * @property [_writable_] userCommunityAccount
 * @property [] delegatePda
 * @property [_writable_] communityPool
 * @property [] collection
 * @property [_writable_] nftTicket
 * @property [] collectionPolicy
 * @property [_writable_] rewardVault
 * @property [_writable_] userRewardAccount
 * @category Instructions
 * @category ClaimDelegate
 * @category generated
 */
export declare type ClaimDelegateInstructionAccounts = {
    delegate: web3.PublicKey;
    mainPool: web3.PublicKey;
    userAccount: web3.PublicKey;
    userCommunityAccount: web3.PublicKey;
    delegatePda: web3.PublicKey;
    communityPool: web3.PublicKey;
    collection: web3.PublicKey;
    nftTicket: web3.PublicKey;
    collectionPolicy: web3.PublicKey;
    rewardVault: web3.PublicKey;
    userRewardAccount: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const claimDelegateInstructionDiscriminator: number[];
/**
 * Creates a _ClaimDelegate_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ClaimDelegate
 * @category generated
 */
export declare function createClaimDelegateInstruction(accounts: ClaimDelegateInstructionAccounts, args: ClaimDelegateInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
