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
 * Arguments used to create {@link NftTicket}
 * @category Accounts
 * @category generated
 */
export declare type NftTicketArgs = {
    mint: web3.PublicKey;
    stakeTime: beet.bignum;
    claimedTime: beet.bignum;
    policy: web3.PublicKey;
};
export declare const nftTicketDiscriminator: number[];
/**
 * Holds the data for the {@link NftTicket} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class NftTicket implements NftTicketArgs {
    readonly mint: web3.PublicKey;
    readonly stakeTime: beet.bignum;
    readonly claimedTime: beet.bignum;
    readonly policy: web3.PublicKey;
    private constructor();
    /**
     * Creates a {@link NftTicket} instance from the provided args.
     */
    static fromArgs(args: NftTicketArgs): NftTicket;
    /**
     * Deserializes the {@link NftTicket} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [NftTicket, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link NftTicket} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<NftTicket>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        mint: any;
        accountDiscriminator: any;
        stakeTime: any;
        claimedTime: any;
        policy: any;
    }>;
    /**
     * Deserializes the {@link NftTicket} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [NftTicket, number];
    /**
     * Serializes the {@link NftTicket} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link NftTicket}
     */
    static get byteSize(): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link NftTicket} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link NftTicket} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    /**
     * Returns a readable version of {@link NftTicket} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        mint: string;
        stakeTime: number | {
            toNumber: () => number;
        };
        claimedTime: number | {
            toNumber: () => number;
        };
        policy: string;
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const nftTicketBeet: beet.BeetStruct<NftTicket, NftTicketArgs & {
    accountDiscriminator: number[];
}>;
