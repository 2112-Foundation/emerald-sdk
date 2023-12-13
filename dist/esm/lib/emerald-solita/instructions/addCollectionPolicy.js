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
 * @category AddCollectionPolicy
 * @category generated
 */
export var addCollectionPolicyStruct = new beet.BeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityIdx', beet.u32],
    ['collectionIdx', beet.u32],
    ['rate', beet.u64],
    ['epoch', beet.i64],
    ['minimumStakeTime', beet.i64],
    ['interactionFrequency', beet.i64],
    ['attenuation', beet.u32],
    ['permanentPolicy', beet.bool],
    ['timeCapped', beet.i64],
], 'AddCollectionPolicyInstructionArgs');
export var addCollectionPolicyInstructionDiscriminator = [
    153, 152, 254, 57, 225, 179, 214, 215,
];
/**
 * Creates a _AddCollectionPolicy_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddCollectionPolicy
 * @category generated
 */
export function createAddCollectionPolicyInstruction(accounts, args, programId) {
    var _a, _b;
    if (programId === void 0) { programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'); }
    var data = addCollectionPolicyStruct.serialize(__assign({ instructionDiscriminator: addCollectionPolicyInstructionDiscriminator }, args))[0];
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
            pubkey: accounts.collection,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.collectionPolicy,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.mainPool,
            isWritable: true,
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