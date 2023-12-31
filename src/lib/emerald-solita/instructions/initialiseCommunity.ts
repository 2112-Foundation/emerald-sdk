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
 * @category InitialiseCommunity
 * @category generated
 */
export type InitialiseCommunityInstructionArgs = {
  feeReduction: number
}
/**
 * @category Instructions
 * @category InitialiseCommunity
 * @category generated
 */
export const initialiseCommunityStruct = new beet.BeetArgsStruct<
  InitialiseCommunityInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['feeReduction', beet.u8],
  ],
  'InitialiseCommunityInstructionArgs'
)
/**
 * Accounts required by the _initialiseCommunity_ instruction
 *
 * @property [_writable_, **signer**] admin
 * @property [_writable_] communityPool
 * @property [_writable_] rewardVault
 * @property [] coinMint
 * @property [_writable_] mainPool
 * @category Instructions
 * @category InitialiseCommunity
 * @category generated
 */
export type InitialiseCommunityInstructionAccounts = {
  admin: web3.PublicKey
  communityPool: web3.PublicKey
  rewardVault: web3.PublicKey
  coinMint: web3.PublicKey
  mainPool: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initialiseCommunityInstructionDiscriminator = [
  160, 87, 224, 7, 251, 126, 171, 226,
]

/**
 * Creates a _InitialiseCommunity_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitialiseCommunity
 * @category generated
 */
export function createInitialiseCommunityInstruction(
  accounts: InitialiseCommunityInstructionAccounts,
  args: InitialiseCommunityInstructionArgs,
  programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd')
) {
  const [data] = initialiseCommunityStruct.serialize({
    instructionDiscriminator: initialiseCommunityInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.admin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.communityPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.coinMint,
      isWritable: false,
      isSigner: false,
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
