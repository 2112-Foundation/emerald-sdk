/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export type StakeNftInstructionArgs = {
  communityIdx: number
  collectionIdx: number
  communityAccount: number
  policyIdx: number
}
/**
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export const stakeNftStruct = new beet.BeetArgsStruct<
  StakeNftInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityIdx', beet.u32],
    ['collectionIdx', beet.u32],
    ['communityAccount', beet.u32],
    ['policyIdx', beet.u32],
  ],
  'StakeNftInstructionArgs'
)
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
export type StakeNftInstructionAccounts = {
  user: web3.PublicKey
  mainPool: web3.PublicKey
  collection: web3.PublicKey
  collectionPolicy: web3.PublicKey
  communityPool: web3.PublicKey
  userAccount: web3.PublicKey
  nftTicket: web3.PublicKey
  userCommunityAccount: web3.PublicKey
  mintMetadata: web3.PublicKey
  masterMintMetadata: web3.PublicKey
  userNftTokenAccount: web3.PublicKey
  nftMint: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  editionId: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const stakeNftInstructionDiscriminator = [
  38, 27, 66, 46, 69, 65, 151, 219,
]

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
export function createStakeNftInstruction(
  accounts: StakeNftInstructionAccounts,
  args: StakeNftInstructionArgs,
  programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd')
) {
  const [data] = stakeNftStruct.serialize({
    instructionDiscriminator: stakeNftInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.user,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.mainPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collection,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionPolicy,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.communityPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.nftTicket,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userCommunityAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterMintMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userNftTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.nftMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.editionId,
      isWritable: false,
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
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
