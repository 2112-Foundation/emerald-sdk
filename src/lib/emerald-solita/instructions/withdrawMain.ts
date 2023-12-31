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
 * @category WithdrawMain
 * @category generated
 */
export const withdrawMainStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'WithdrawMainInstructionArgs'
)
/**
 * Accounts required by the _withdrawMain_ instruction
 *
 * @property [_writable_, **signer**] superAdmin
 * @property [_writable_] mainPool
 * @category Instructions
 * @category WithdrawMain
 * @category generated
 */
export type WithdrawMainInstructionAccounts = {
  superAdmin: web3.PublicKey
  mainPool: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const withdrawMainInstructionDiscriminator = [
  81, 242, 179, 106, 4, 89, 37, 154,
]

/**
 * Creates a _WithdrawMain_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category WithdrawMain
 * @category generated
 */
export function createWithdrawMainInstruction(
  accounts: WithdrawMainInstructionAccounts,
  programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd')
) {
  const [data] = withdrawMainStruct.serialize({
    instructionDiscriminator: withdrawMainInstructionDiscriminator,
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
