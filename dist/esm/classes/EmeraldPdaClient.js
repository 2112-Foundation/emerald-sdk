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
import { PublicKey } from "@solana/web3.js";
import { COLLECTION_POLICY_SEED, COLLECTION_SEED, COMMUNITY_SEED, MAIN_POOL, MAIN_SEED, NFT_TICKET, SNAPSHOT_PEG_SEED, USER_ACCOUNT_SEED, USER_COMMUNITY_ACCOUNT_SEED } from "../constants";
import { BN } from "@coral-xyz/anchor";
import { CommunityPool, PROGRAM_ID } from "../lib/emerald-solita";
var EmeraldPdaClient = /** @class */ (function () {
    function EmeraldPdaClient(connection, programId) {
        this.programId = programId || PROGRAM_ID;
        this.connection = connection;
    }
    EmeraldPdaClient.prototype.communityPool = function (communityId) {
        var communityPool = PublicKey.findProgramAddressSync([
            Buffer.from(COMMUNITY_SEED),
            MAIN_POOL.toBuffer(),
            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
        ], this.programId)[0];
        return communityPool;
    };
    EmeraldPdaClient.prototype.snapshotPeg = function (communityId) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityData, snapshotPeg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = this.communityPool(communityId);
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityData = _a.sent();
                        snapshotPeg = PublicKey.findProgramAddressSync([
                            Buffer.from(SNAPSHOT_PEG_SEED),
                            communityPool.toBuffer(),
                            new BN(communityData.totalUsers).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        return [2 /*return*/, snapshotPeg];
                }
            });
        });
    };
    EmeraldPdaClient.prototype.collection = function (communityId, collectionId) {
        var communityPool = this.communityPool(communityId);
        var collection = PublicKey.findProgramAddressSync([
            Buffer.from(COLLECTION_SEED),
            communityPool.toBuffer(),
            new BN(collectionId).toArrayLike(Buffer, "be", 4),
        ], this.programId)[0];
        return collection;
    };
    EmeraldPdaClient.prototype.collectionPolicy = function (communityId, collectionId, policyId) {
        var communityPool = this.communityPool(communityId);
        var collectionPda = this.collection(communityId, collectionId);
        var collectionPolicyPda = PublicKey.findProgramAddressSync([
            Buffer.from(COLLECTION_POLICY_SEED),
            collectionPda.toBuffer(),
            communityPool.toBuffer(),
            (new BN(policyId)).toArrayLike(Buffer, "be", 4),
        ], this.programId)[0];
        return collectionPolicyPda;
    };
    EmeraldPdaClient.prototype.userAccount = function (user) {
        var userAccount = PublicKey.findProgramAddressSync([
            Buffer.from(USER_ACCOUNT_SEED),
            user.toBuffer(),
            MAIN_POOL.toBuffer()
        ], this.programId)[0];
        return userAccount;
    };
    EmeraldPdaClient.prototype.userCommunityAccount = function (user, communityId) {
        var userGlobalAccountPda = this.userAccount(user);
        var userCommunityAccount = PublicKey.findProgramAddressSync([
            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
            user.toBuffer(),
            userGlobalAccountPda.toBuffer(),
            (new BN(communityId)).toArrayLike(Buffer, "be", 4),
        ], this.programId)[0];
        return userCommunityAccount;
    };
    EmeraldPdaClient.prototype.taken = function (user, communityId) {
        var communityPool = this.communityPool(communityId);
        var taken = PublicKey.findProgramAddressSync([
            Buffer.from(MAIN_SEED),
            user.toBuffer(),
            communityPool.toBuffer(),
        ], this.programId)[0];
        return taken;
    };
    EmeraldPdaClient.prototype.nftTicket = function (nft, user, communityId) {
        var userGlobalAccount = this.userAccount(user);
        var userCommunityAccount = this.userCommunityAccount(user, communityId);
        var nftTicket = PublicKey.findProgramAddressSync([
            Buffer.from(NFT_TICKET),
            userGlobalAccount.toBuffer(),
            userCommunityAccount.toBuffer(),
            nft.toBuffer()
        ], this.programId)[0];
        return nftTicket;
    };
    return EmeraldPdaClient;
}());
export default EmeraldPdaClient;
