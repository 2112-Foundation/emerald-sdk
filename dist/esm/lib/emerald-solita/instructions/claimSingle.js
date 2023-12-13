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
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
/**
 * @category Instructions
 * @category ClaimSingle
 * @category generated
 */
export var claimSingleStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityIdx', beet.u32],
    ['collectionIdx', beet.u32],
    ['collectionPolicyIdx', beet.u32],
    ['userCommunityAccountIdx', beet.u32],
    ['nftMint', beetSolana.publicKey],
], 'ClaimSingleInstructionArgs');
export var claimSingleInstructionDiscriminator = [
    233, 35, 238, 119, 177, 204, 237, 108,
];
/**
 * Creates a _ClaimSingle_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ClaimSingle
 * @category generated
 */
export function createClaimSingleInstruction(accounts, args, programId) {
    var _a, _b;
    if (programId === void 0) { programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'); }
    var data = claimSingleStruct.serialize(__assign({ instructionDiscriminator: claimSingleInstructionDiscriminator }, args))[0];
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
            pubkey: accounts.userAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.userCommunityAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.communityPool,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.collection,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.nftTicket,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionPolicy,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.rewardVault,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.userRewardAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.systemProgram) !== null && _b !== void 0 ? _b : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
    ];
    if (accounts.anchorRemainingAccounts != null) {
        for (var _i = 0, _c = accounts.anchorRemainingAccounts; _i < _c.length; _i++) {
            var acc = _c[_i];
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
