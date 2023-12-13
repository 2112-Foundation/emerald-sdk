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
 * Arguments used to create {@link UserCommunityAccount}
 * @category Accounts
 * @category generated
 */
export declare type UserCommunityAccountArgs = {
    communityAddress: web3.PublicKey;
    accumulatedReward: beet.bignum;
    stakeCounter: number;
    loanCounter: number;
};
export declare const userCommunityAccountDiscriminator: number[];
/**
 * Holds the data for the {@link UserCommunityAccount} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class UserCommunityAccount implements UserCommunityAccountArgs {
    readonly communityAddress: web3.PublicKey;
    readonly accumulatedReward: beet.bignum;
    readonly stakeCounter: number;
    readonly loanCounter: number;
    private constructor();
    /**
     * Creates a {@link UserCommunityAccount} instance from the provided args.
     */
    static fromArgs(args: UserCommunityAccountArgs): UserCommunityAccount;
    /**
     * Deserializes the {@link UserCommunityAccount} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [UserCommunityAccount, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link UserCommunityAccount} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<UserCommunityAccount>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        accountDiscriminator: any;
        communityAddress: any;
        accumulatedReward: any;
        stakeCounter: any;
        loanCounter: any;
    }>;
    /**
     * Deserializes the {@link UserCommunityAccount} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [UserCommunityAccount, number];
    /**
     * Serializes the {@link UserCommunityAccount} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link UserCommunityAccount}
     */
    static get byteSize(): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link UserCommunityAccount} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link UserCommunityAccount} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    /**
     * Returns a readable version of {@link UserCommunityAccount} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        communityAddress: string;
        accumulatedReward: number | {
            toNumber: () => number;
        };
        stakeCounter: number;
        loanCounter: number;
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const userCommunityAccountBeet: beet.BeetStruct<UserCommunityAccount, UserCommunityAccountArgs & {
    accountDiscriminator: number[];
}>;
