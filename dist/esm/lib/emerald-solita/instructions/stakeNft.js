/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
/**
 * @category Instructions
 * @category StakeNft
 * @category generated
 */
export var stakeNftStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityIdx', beet.u32],
    ['collectionIdx', beet.u32],
    ['communityAccount', beet.u32],
    ['policyIdx', beet.u32],
], 'StakeNftInstructionArgs');
export var stakeNftInstructionDiscriminator = [
    38, 27, 66, 46, 69, 65, 151, 219,
];
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
export function createStakeNftInstruction(accounts, args, programId) {
    var _a, _b, _c;
    if (programId === void 0) { programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'); }
    var data = stakeNftStruct.serialize(__assign({ instructionDiscriminator: stakeNftInstructionDiscriminator }, args))[0];
    var keys = [
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
            pubkey: (_a = accounts.systemProgram) !== null && _a !== void 0 ? _a : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.rent) !== null && _b !== void 0 ? _b : web3.SYSVAR_RENT_PUBKEY,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_c = accounts.tokenProgram) !== null && _c !== void 0 ? _c : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
    ];
    if (accounts.anchorRemainingAccounts != null) {
        for (var _i = 0, _d = accounts.anchorRemainingAccounts; _i < _d.length; _i++) {
            var acc = _d[_i];
            keys.push(acc);
        }
    }
    var ix = new web3.TransactionInstruction({
        programId: programId,
        keys: keys,
        data: data,
    });
    return ix;
}
