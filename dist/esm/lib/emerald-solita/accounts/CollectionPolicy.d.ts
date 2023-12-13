/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
/// <reference types="node" />
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
/**
 * Arguments used to create {@link CollectionPolicy}
 * @category Accounts
 * @category generated
 */
export declare type CollectionPolicyArgs = {
    rate: beet.bignum;
    epoch: beet.bignum;
    minimumStakeTime: beet.bignum;
    interactionFrequency: beet.bignum;
    attenuation: number;
    permanentPolicy: boolean;
    timeCapped: beet.bignum;
};
export declare const collectionPolicyDiscriminator: number[];
/**
 * Holds the data for the {@link CollectionPolicy} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class CollectionPolicy implements CollectionPolicyArgs {
    readonly rate: beet.bignum;
    readonly epoch: beet.bignum;
    readonly minimumStakeTime: beet.bignum;
    readonly interactionFrequency: beet.bignum;
    readonly attenuation: number;
    readonly permanentPolicy: boolean;
    readonly timeCapped: beet.bignum;
    private constructor();
    /**
     * Creates a {@link CollectionPolicy} instance from the provided args.
     */
    static fromArgs(args: CollectionPolicyArgs): CollectionPolicy;
    /**
     * Deserializes the {@link CollectionPolicy} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [CollectionPolicy, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link CollectionPolicy} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<CollectionPolicy>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        accountDiscriminator: any;
        rate: any;
        epoch: any;
        minimumStakeTime: any;
        interactionFrequency: any;
        attenuation: any;
        permanentPolicy: any;
        timeCapped: any;
    }>;
    /**
     * Deserializes the {@link CollectionPolicy} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [CollectionPolicy, number];
    /**
     * Serializes the {@link CollectionPolicy} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link CollectionPolicy}
     */
    static get byteSize(): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link CollectionPolicy} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link CollectionPolicy} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    /**
     * Returns a readable version of {@link CollectionPolicy} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        rate: number | {
            toNumber: () => number;
        };
        epoch: number | {
            toNumber: () => number;
        };
        minimumStakeTime: number | {
            toNumber: () => number;
        };
        interactionFrequency: number | {
            toNumber: () => number;
        };
        attenuation: number;
        permanentPolicy: boolean;
        timeCapped: number | {
            toNumber: () => number;
        };
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const collectionPolicyBeet: beet.BeetStruct<CollectionPolicy, CollectionPolicyArgs & {
    accountDiscriminator: number[];
}>;