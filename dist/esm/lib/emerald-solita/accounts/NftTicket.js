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
export var nftTicketDiscriminator = [236, 56, 134, 154, 218, 88, 207, 207];
/**
 * Holds the data for the {@link NftTicket} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
var NftTicket = /** @class */ (function () {
    function NftTicket(mint, stakeTime, claimedTime, policy) {
        this.mint = mint;
        this.stakeTime = stakeTime;
        this.claimedTime = claimedTime;
        this.policy = policy;
    }
    /**
     * Creates a {@link NftTicket} instance from the provided args.
     */
    NftTicket.fromArgs = function (args) {
        return new NftTicket(args.mint, args.stakeTime, args.claimedTime, args.policy);
    };
    /**
     * Deserializes the {@link NftTicket} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    NftTicket.fromAccountInfo = function (accountInfo, offset) {
        if (offset === void 0) { offset = 0; }
        return NftTicket.deserialize(accountInfo.data, offset);
    };
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link NftTicket} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    NftTicket.fromAccountAddress = function (connection, address, commitmentOrConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var accountInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connection.getAccountInfo(address, commitmentOrConfig)];
                    case 1:
                        accountInfo = _a.sent();
                        if (accountInfo == null) {
                            throw new Error("Unable to find NftTicket account at ".concat(address));
                        }
                        return [2 /*return*/, NftTicket.fromAccountInfo(accountInfo, 0)[0]];
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
    NftTicket.gpaBuilder = function (programId) {
        if (programId === void 0) { programId = new web3.PublicKey('2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'); }
        return beetSolana.GpaBuilder.fromStruct(programId, nftTicketBeet);
    };
    /**
     * Deserializes the {@link NftTicket} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    NftTicket.deserialize = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return nftTicketBeet.deserialize(buf, offset);
    };
    /**
     * Serializes the {@link NftTicket} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    NftTicket.prototype.serialize = function () {
        return nftTicketBeet.serialize(__assign({ accountDiscriminator: nftTicketDiscriminator }, this));
    };
    Object.defineProperty(NftTicket, "byteSize", {
        /**
         * Returns the byteSize of a {@link Buffer} holding the serialized data of
         * {@link NftTicket}
         */
        get: function () {
            return nftTicketBeet.byteSize;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link NftTicket} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    NftTicket.getMinimumBalanceForRentExemption = function (connection, commitment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, connection.getMinimumBalanceForRentExemption(NftTicket.byteSize, commitment)];
            });
        });
    };
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link NftTicket} data.
     */
    NftTicket.hasCorrectByteSize = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return buf.byteLength - offset === NftTicket.byteSize;
    };
    /**
     * Returns a readable version of {@link NftTicket} properties
     * and can be used to convert to JSON and/or logging
     */
    NftTicket.prototype.pretty = function () {
        var _this = this;
        return {
            mint: this.mint.toBase58(),
            stakeTime: (function () {
                var x = _this.stakeTime;
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
            claimedTime: (function () {
                var x = _this.claimedTime;
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
            policy: this.policy.toBase58(),
        };
    };
    return NftTicket;
}());
export { NftTicket };
/**
 * @category Accounts
 * @category generated
 */
export var nftTicketBeet = new beet.BeetStruct([
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['mint', beetSolana.publicKey],
    ['stakeTime', beet.i64],
    ['claimedTime', beet.i64],
    ['policy', beetSolana.publicKey],
], NftTicket.fromArgs, 'NftTicket');
