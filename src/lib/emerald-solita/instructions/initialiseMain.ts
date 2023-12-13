/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category InitialiseMain
 * @category generated
 */
export type InitialiseMainInstructionArgs = {
  userCommunityAccountCreationFee: beet.bignum
  communityCreationFee: beet.bignum
  collectionAdditionFee: beet.bignum
  collectionPolicyAdditionFee: beet.bignum
  unstakeFee: beet.bignum
}
/**
 * @category Instructions
 * @category InitialiseMain
 * @category generated
 */
export const initialiseMainStruct = new beet.BeetArgsStruct<
  InitialiseMainInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['userCommunityAccountCreationFee', beet.u64],
    ['communityCreationFee', beet.u64],
    ['collectionAdditionFee', beet.u64],
    ['collectionPolicyAdditionFee', beet.u64],
    ['unstakeFee', beet.u64],
  ],
  'InitialiseMainInstructionArgs'
)
/**
 * Accounts required by the _initialiseMain_ instruction
 *
 * @property [_writable_, **signer**] superAdmin
 * @property [_writable_] mainPool
 * @category Instructions
 * @category InitialiseMain
 * @category generated
 */
export type InitialiseMainInstructionAccounts = {
  superAdmin: web3.PublicKey
  mainPool: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initialiseMainInstructionDiscriminator = [
  53, 214, 80, 251, 12, 57, 242, 44,
]

/**
 * Creates a _InitialiseMain_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitialiseMain
 * @category generated
 */
export function createInitialiseMainInstruction(
  accounts: InitialiseMainInstructionAccounts,
  args: InitialiseMainInstructionArgs,
  programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd')
) {
  const [data] = initialiseMainStruct.serialize({
    instructionDiscriminator: initialiseMainInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.superAdmin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.mainPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}