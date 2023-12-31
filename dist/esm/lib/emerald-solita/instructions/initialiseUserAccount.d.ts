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
 * @category InitialiseUserAccount
 * @category generated
 */
export declare const initialiseUserAccountStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _initialiseUserAccount_ instruction
 *
 * @property [_writable_, **signer**] user
 * @property [_writable_] mainPool
 * @property [_writable_] userAccount
 * @category Instructions
 * @category InitialiseUserAccount
 * @category generated
 */
export declare type InitialiseUserAccountInstructionAccounts = {
    user: web3.PublicKey;
    mainPool: web3.PublicKey;
    userAccount: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const initialiseUserAccountInstructionDiscriminator: number[];
/**
 * Creates a _InitialiseUserAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitialiseUserAccount
 * @category generated
 */
export declare function createInitialiseUserAccountInstruction(accounts: InitialiseUserAccountInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
