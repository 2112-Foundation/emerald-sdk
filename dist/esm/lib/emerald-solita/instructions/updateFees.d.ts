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
 * @category UpdateFees
 * @category generated
 */
export declare type UpdateFeesInstructionArgs = {
    userCommunityAccountCreationFee: beet.bignum;
    communityCreationFee: beet.bignum;
    collectionAdditionFee: beet.bignum;
    collectionPolicyAdditionFee: beet.bignum;
    unstakeFee: beet.bignum;
};
/**
 * @category Instructions
 * @category UpdateFees
 * @category generated
 */
export declare const updateFeesStruct: beet.BeetArgsStruct<UpdateFeesInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _updateFees_ instruction
 *
 * @property [_writable_, **signer**] superAdmin
 * @property [_writable_] mainPool
 * @category Instructions
 * @category UpdateFees
 * @category generated
 */
export declare type UpdateFeesInstructionAccounts = {
    superAdmin: web3.PublicKey;
    mainPool: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    rent?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const updateFeesInstructionDiscriminator: number[];
/**
 * Creates a _UpdateFees_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateFees
 * @category generated
 */
export declare function createUpdateFeesInstruction(accounts: UpdateFeesInstructionAccounts, args: UpdateFeesInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
