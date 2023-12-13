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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
export var communityPoolDiscriminator = [56, 185, 253, 148, 127, 79, 154, 126];
/**
 * Holds the data for the {@link CommunityPool} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
var CommunityPool = /** @class */ (function () {
    function CommunityPool(feeReduction, communityAdmin, locked, coinMint, coinDecimals, totalStakedCount, totalRewardDistributed, collectionsIdx, totalUsers, lockedBalance) {
        this.feeReduction = feeReduction;
        this.communityAdmin = communityAdmin;
        this.locked = locked;
        this.coinMint = coinMint;
        this.coinDecimals = coinDecimals;
        this.totalStakedCount = totalStakedCount;
        this.totalRewardDistributed = totalRewardDistributed;
        this.collectionsIdx = collectionsIdx;
        this.totalUsers = totalUsers;
        this.lockedBalance = lockedBalance;
    }
    /**
     * Creates a {@link CommunityPool} instance from the provided args.
     */
    CommunityPool.fromArgs = function (args) {
        return new CommunityPool(args.feeReduction, args.communityAdmin, args.locked, args.coinMint, args.coinDecimals, args.totalStakedCount, args.totalRewardDistributed, args.collectionsIdx, args.totalUsers, args.lockedBalance);
    };
    /**
     * Deserializes the {@link CommunityPool} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    CommunityPool.fromAccountInfo = function (accountInfo, offset) {
        if (offset === void 0) { offset = 0; }
        return CommunityPool.deserialize(accountInfo.data, offset);
    };
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link CommunityPool} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    CommunityPool.fromAccountAddress = function (connection, address, commitmentOrConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var accountInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection.getAccountInfo(address, commitmentOrConfig)];
                    case 1:
                        accountInfo = _a.sent();
                        if (accountInfo == null) {
                            throw new Error("Unable to find CommunityPool account at ".concat(address));
                        }
                        return [2 /*return*/, CommunityPool.fromAccountInfo(accountInfo, 0)[0]];
                }
            });
        });
    };
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    CommunityPool.gpaBuilder = function (programId) {
        if (programId === void 0) { programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'); }
        return beetSolana.GpaBuilder.fromStruct(programId, communityPoolBeet);
    };
    /**
     * Deserializes the {@link CommunityPool} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    CommunityPool.deserialize = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return communityPoolBeet.deserialize(buf, offset);
    };
    /**
     * Serializes the {@link CommunityPool} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    CommunityPool.prototype.serialize = function () {
        return communityPoolBeet.serialize(__assign({ accountDiscriminator: communityPoolDiscriminator }, this));
    };
    Object.defineProperty(CommunityPool, "byteSize", {
        /**
         * Returns the byteSize of a {@link Buffer} holding the serialized data of
         * {@link CommunityPool}
         */
        get: function () {
            return communityPoolBeet.byteSize;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link CommunityPool} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    CommunityPool.getMinimumBalanceForRentExemption = function (connection, commitment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, connection.getMinimumBalanceForRentExemption(CommunityPool.byteSize, commitment)];
            });
        });
    };
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link CommunityPool} data.
     */
    CommunityPool.hasCorrectByteSize = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return buf.byteLength - offset === CommunityPool.byteSize;
    };
    /**
     * Returns a readable version of {@link CommunityPool} properties
     * and can be used to convert to JSON and/or logging
     */
    CommunityPool.prototype.pretty = function () {
        var _this = this;
        return {
            feeReduction: this.feeReduction,
            communityAdmin: this.communityAdmin.toBase58(),
            locked: this.locked,
            coinMint: this.coinMint.toBase58(),
            coinDecimals: this.coinDecimals,
            totalStakedCount: (function () {
                var x = _this.totalStakedCount;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            totalRewardDistributed: (function () {
                var x = _this.totalRewardDistributed;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
            collectionsIdx: this.collectionsIdx,
            totalUsers: this.totalUsers,
            lockedBalance: (function () {
                var x = _this.lockedBalance;
                if (typeof x.toNumber === 'function') {
                    try {
                        return x.toNumber();
                    }
                    catch (_) {
                        return x;
                    }
                }
                return x;
            })(),
        };
    };
    return CommunityPool;
}());
export { CommunityPool };
/**
 * @category Accounts
 * @category generated
 */
export var communityPoolBeet = new beet.BeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['feeReduction', beet.u8],
    ['communityAdmin', beetSolana.publicKey],
    ['locked', beet.bool],
    ['coinMint', beetSolana.publicKey],
    ['coinDecimals', beet.u8],
    ['totalStakedCount', beet.u64],
    ['totalRewardDistributed', beet.u64],
    ['collectionsIdx', beet.u32],
    ['totalUsers', beet.u32],
    ['lockedBalance', beet.u64],
], CommunityPool.fromArgs, 'CommunityPool');