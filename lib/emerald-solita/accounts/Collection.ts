/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Collection}
 * @category Accounts
 * @category generated
 */
export type CollectionArgs = {
  masterCollectionKey: web3.PublicKey
  creatorsKey: web3.PublicKey
  masterEditionKey: web3.PublicKey
  verifiedCreator: boolean
  totalStaked: beet.bignum
  totalLoaned: beet.bignum
  totalPolicies: number
}

export const collectionDiscriminator = [48, 160, 232, 205, 191, 207, 26, 141]
/**
 * Holds the data for the {@link Collection} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Collection implements CollectionArgs {
  private constructor(
    readonly masterCollectionKey: web3.PublicKey,
    readonly creatorsKey: web3.PublicKey,
    readonly masterEditionKey: web3.PublicKey,
    readonly verifiedCreator: boolean,
    readonly totalStaked: beet.bignum,
    readonly totalLoaned: beet.bignum,
    readonly totalPolicies: number
  ) {}

  /**
   * Creates a {@link Collection} instance from the provided args.
   */
  static fromArgs(args: CollectionArgs) {
    return new Collection(
      args.masterCollectionKey,
      args.creatorsKey,
      args.masterEditionKey,
      args.verifiedCreator,
      args.totalStaked,
      args.totalLoaned,
      args.totalPolicies
    )
  }

  /**
   * Deserializes the {@link Collection} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Collection, number] {
    return Collection.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Collection} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Collection> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Collection account at ${address}`)
    }
    return Collection.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, collectionBeet)
  }

  /**
   * Deserializes the {@link Collection} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Collection, number] {
    return collectionBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Collection} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return collectionBeet.serialize({
      accountDiscriminator: collectionDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Collection}
   */
  static get byteSize() {
    return collectionBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Collection} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Collection.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Collection} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Collection.byteSize
  }

  /**
   * Returns a readable version of {@link Collection} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      masterCollectionKey: this.masterCollectionKey.toBase58(),
      creatorsKey: this.creatorsKey.toBase58(),
      masterEditionKey: this.masterEditionKey.toBase58(),
      verifiedCreator: this.verifiedCreator,
      totalStaked: (() => {
        const x = <{ toNumber: () => number }>this.totalStaked
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      totalLoaned: (() => {
        const x = <{ toNumber: () => number }>this.totalLoaned
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      totalPolicies: this.totalPolicies,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const collectionBeet = new beet.BeetStruct<
  Collection,
  CollectionArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['masterCollectionKey', beetSolana.publicKey],
    ['creatorsKey', beetSolana.publicKey],
    ['masterEditionKey', beetSolana.publicKey],
    ['verifiedCreator', beet.bool],
    ['totalStaked', beet.u64],
    ['totalLoaned', beet.u64],
    ['totalPolicies', beet.u32],
  ],
  Collection.fromArgs,
  'Collection'
)
