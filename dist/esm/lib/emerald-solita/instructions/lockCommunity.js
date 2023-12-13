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
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
/**
 * @category Instructions
 * @category LockCommunity
 * @category generated
 */
export var lockCommunityStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityIdx', beet.u32],
], 'LockCommunityInstructionArgs');
export var lockCommunityInstructionDiscriminator = [
    83, 86, 8, 247, 13, 177, 207, 96,
];
/**
 * Creates a _LockCommunity_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category LockCommunity
 * @category generated
 */
export function createLockCommunityInstruction(accounts, args, programId) {
    if (programId === void 0) { programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'); }
    var data = lockCommunityStruct.serialize(__assign({ instructionDiscriminator: lockCommunityInstructionDiscriminator }, args))[0];
    var keys = [
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
            pubkey: accounts.mainPool,
            isWritable: true,
            isSigner: false,
        },
    ];
    if (accounts.anchorRemainingAccounts != null) {
        for (var _i = 0, _a = accounts.anchorRemainingAccounts; _i < _a.length; _i++) {
            var acc = _a[_i];
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