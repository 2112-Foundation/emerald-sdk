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
 * @category LockCommunity
 * @category generated
 */
export declare type LockCommunityInstructionArgs = {
    communityIdx: number;
};
/**
 * @category Instructions
 * @category LockCommunity
 * @category generated
 */
export declare const lockCommunityStruct: beet.BeetArgsStruct<LockCommunityInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _lockCommunity_ instruction
 *
 * @property [_writable_, **signer**] admin
 * @property [_writable_] communityPool
 * @property [_writable_] rewardVault
 * @property [_writable_] mainPool
 * @category Instructions
 * @category LockCommunity
 * @category generated
 */
export declare type LockCommunityInstructionAccounts = {
    admin: web3.PublicKey;
    communityPool: web3.PublicKey;
    rewardVault: web3.PublicKey;
    mainPool: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const lockCommunityInstructionDiscriminator: number[];
/**
 * Creates a _LockCommunity_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category LockCommunity
 * @category generated
 */
export declare function createLockCommunityInstruction(accounts: LockCommunityInstructionAccounts, args: LockCommunityInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
