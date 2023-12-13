/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
/**
 * Arguments used to create {@link CommunityPool}
 * @category Accounts
 * @category generated
 */
export declare type CommunityPoolArgs = {
    feeReduction: number;
    communityAdmin: web3.PublicKey;
    locked: boolean;
    coinMint: web3.PublicKey;
    coinDecimals: number;
    totalStakedCount: beet.bignum;
    totalRewardDistributed: beet.bignum;
    collectionsIdx: number;
    totalUsers: number;
    lockedBalance: beet.bignum;
};
export declare const communityPoolDiscriminator: number[];
/**
 * Holds the data for the {@link CommunityPool} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class CommunityPool implements CommunityPoolArgs {
    readonly feeReduction: number;
    readonly communityAdmin: web3.PublicKey;
    readonly locked: boolean;
    readonly coinMint: web3.PublicKey;
    readonly coinDecimals: number;
    readonly totalStakedCount: beet.bignum;
    readonly totalRewardDistributed: beet.bignum;
    readonly collectionsIdx: number;
    readonly totalUsers: number;
    readonly lockedBalance: beet.bignum;
    private constructor();
    /**
     * Creates a {@link CommunityPool} instance from the provided args.
     */
    static fromArgs(args: CommunityPoolArgs): CommunityPool;
    /**
     * Deserializes the {@link CommunityPool} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [CommunityPool, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link CommunityPool} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<CommunityPool>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        accountDiscriminator: any;
        feeReduction: any;
        communityAdmin: any;
        locked: any;
        coinMint: any;
        coinDecimals: any;
        totalStakedCount: any;
        totalRewardDistributed: any;
        collectionsIdx: any;
        totalUsers: any;
        lockedBalance: any;
    }>;
    /**
     * Deserializes the {@link CommunityPool} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [CommunityPool, number];
    /**
     * Serializes the {@link CommunityPool} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link CommunityPool}
     */
    static get byteSize(): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link CommunityPool} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link CommunityPool} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    /**
     * Returns a readable version of {@link CommunityPool} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        feeReduction: number;
        communityAdmin: string;
        locked: boolean;
        coinMint: string;
        coinDecimals: number;
        totalStakedCount: number | {
            toNumber: () => number;
        };
        totalRewardDistributed: number | {
            toNumber: () => number;
        };
        collectionsIdx: number;
        totalUsers: number;
        lockedBalance: number | {
            toNumber: () => number;
        };
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const communityPoolBeet: beet.BeetStruct<CommunityPool, CommunityPoolArgs & {
    accountDiscriminator: number[];
}>;