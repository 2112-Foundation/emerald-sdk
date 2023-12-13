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
import { COMMUNITY_SEED, MAIN_POOL, NFT_TICKET, USER_ACCOUNT_SEED, USER_COMMUNITY_ACCOUNT_SEED } from "../constants";
import { BN } from "@coral-xyz/anchor";
import { CommunityPool, NftTicket, PROGRAM_ID, UserAccount, UserCommunityAccount } from "../lib/emerald-solita";
import Emerald from "./Emerald";
import { createAssociatedTokenAccountIdempotentInstruction, getAssociatedTokenAddressSync } from "@solana/spl-token";
var EmeraldCommunity = /** @class */ (function () {
    function EmeraldCommunity(connection, communityId, user, admin) {
        this.communityId = communityId;
        this.emeraldClient = new Emerald(connection);
        this.admin = admin;
        this.user = user;
        var communityPool = PublicKey.findProgramAddressSync([
            Buffer.from(COMMUNITY_SEED),
            MAIN_POOL.toBuffer(),
            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
        ], PROGRAM_ID)[0];
        this.communityPubkey = communityPool;
    }
    EmeraldCommunity.prototype.initializeUserGlobalAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.emeraldClient.initializeUserGlobalAccount(this.user)];
            });
        });
    };
    EmeraldCommunity.prototype.initializeUserCommunityAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.emeraldClient.initializeUserCommunityAccount(this.user, this.communityId)];
            });
        });
    };
    EmeraldCommunity.prototype.getUserGlobalAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pda, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pda = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            this.user.toBuffer(),
                            MAIN_POOL.toBuffer()
                        ], PROGRAM_ID)[0];
                        data = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, UserAccount.fromAccountAddress(this.emeraldClient.connection, pda)];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        data = null;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, data];
                }
            });
        });
    };
    EmeraldCommunity.prototype.getUserCommunityAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userGlobalAccountPda, userCommunityAccountIndex, err_2, userCommunityAccountPda, communityAccountData, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userGlobalAccountPda = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            this.user.toBuffer(),
                            MAIN_POOL.toBuffer()
                        ], PROGRAM_ID)[0];
                        userCommunityAccountIndex = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.emeraldClient.fetchUserCommunityAccountIndex(this.user, userGlobalAccountPda, this.communityPubkey)];
                    case 2:
                        userCommunityAccountIndex = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        userCommunityAccountIndex = null;
                        return [3 /*break*/, 4];
                    case 4:
                        if (userCommunityAccountIndex === null) {
                            return [2 /*return*/, null];
                        }
                        userCommunityAccountPda = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            this.user.toBuffer(),
                            userGlobalAccountPda.toBuffer(),
                            (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
                        ], PROGRAM_ID)[0];
                        communityAccountData = null;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, UserCommunityAccount.fromAccountAddress(this.emeraldClient.connection, userCommunityAccountPda)];
                    case 6:
                        communityAccountData = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_3 = _a.sent();
                        communityAccountData = null;
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, communityAccountData];
                }
            });
        });
    };
    EmeraldCommunity.prototype.initializeUserRewardVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var communityPoolData, coinMint, ata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCommunity()];
                    case 1:
                        communityPoolData = _a.sent();
                        coinMint = communityPoolData.coinMint;
                        ata = getAssociatedTokenAddressSync(coinMint, this.user, false);
                        return [2 /*return*/, createAssociatedTokenAccountIdempotentInstruction(this.user, ata, this.user, coinMint)];
                }
            });
        });
    };
    EmeraldCommunity.prototype.getCommunity = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CommunityPool.fromAccountAddress(this.emeraldClient.connection, this.communityPubkey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmeraldCommunity.prototype.addCollection = function (verifiedCollectionAddress, verifiedCreator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.emeraldClient.addCollectionToCommunity(this.communityId, 
                    // @ts-ignore
                    this.admin, verifiedCollectionAddress, verifiedCreator)];
            });
        });
    };
    EmeraldCommunity.prototype.getCollections = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emeraldClient.getWhitelistedCollections(this.communityId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmeraldCommunity.prototype.getWalletNfts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allWalletNfts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emeraldClient.metaplex.nfts().findAllByOwner({ owner: this.user })];
                    case 1:
                        allWalletNfts = _a.sent();
                        return [2 /*return*/, allWalletNfts];
                }
            });
        });
    };
    EmeraldCommunity.prototype.matchNftToCollection = function (nft) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var collections, metadata, verifiedCollection, verifiedCollectionIndex, verifiedCollectionData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCollections()];
                    case 1:
                        collections = _b.sent();
                        return [4 /*yield*/, this.emeraldClient.metaplex.nfts().findByMint({ mintAddress: nft })];
                    case 2:
                        metadata = _b.sent();
                        verifiedCollection = ((_a = metadata.collection) === null || _a === void 0 ? void 0 : _a.verified) ? metadata.collection.address : null;
                        if (!verifiedCollection)
                            throw "This NFT does not have a verified collection. Therefore, it cannnot be staked in this pool.";
                        verifiedCollectionIndex = collections
                            .map(function (collection) {
                            return collection.masterCollectionKey.toString();
                        })
                            .indexOf(verifiedCollection.toString());
                        verifiedCollectionData = collections[verifiedCollectionIndex];
                        return [2 /*return*/, {
                                data: verifiedCollectionData,
                                index: verifiedCollectionIndex
                            }];
                }
            });
        });
    };
    EmeraldCommunity.prototype.stakeNft = function (nft, policy) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, verifiedCollectionIndex, verifiedCollectionData, policyIndex;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.matchNftToCollection(nft)];
                    case 1:
                        _a = _b.sent(), verifiedCollectionIndex = _a.index, verifiedCollectionData = _a.data;
                        if (verifiedCollectionData.totalPolicies > 1) {
                            policyIndex = policy;
                        }
                        else {
                            policyIndex = 0;
                        }
                        if (typeof policyIndex === "undefined") {
                            throw "There's more than 1 policy that can be used with this instruction. Specify ID of the policy you want to use with this instruction by passing it as the second function argument. You can leave this field empty when there's only 1 existing policy.";
                        }
                        return [2 /*return*/, this.emeraldClient.stakeNft(this.user, nft, this.communityId, verifiedCollectionIndex, policyIndex)];
                }
            });
        });
    };
    EmeraldCommunity.prototype.unstakeNft = function (nft, policy) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, verifiedCollectionIndex, verifiedCollectionData, policyIndex;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.matchNftToCollection(nft)];
                    case 1:
                        _a = _b.sent(), verifiedCollectionIndex = _a.index, verifiedCollectionData = _a.data;
                        if (verifiedCollectionData.totalPolicies > 1) {
                            policyIndex = policy;
                        }
                        else {
                            policyIndex = 0;
                        }
                        if (typeof policyIndex === "undefined") {
                            throw "There's more than 1 policy that can be used with this instruction. Specify ID of the policy you want to use with this instruction by passing it as the second function argument. You can leave this field empty when there's only 1 existing policy.";
                        }
                        return [4 /*yield*/, this.emeraldClient.unstakeNft(this.user, nft, this.communityId, verifiedCollectionIndex, policyIndex)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    EmeraldCommunity.prototype.claimRewardPerNft = function (nft, policy) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, index, data, policyIndex;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.matchNftToCollection(nft)];
                    case 1:
                        _a = _b.sent(), index = _a.index, data = _a.data;
                        if (data.totalPolicies > 1) {
                            policyIndex = policy;
                        }
                        else {
                            policyIndex = 0;
                        }
                        if (typeof policyIndex === "undefined") {
                            throw "There's more than 1 policy that can be used with this instruction. Specify ID of the policy you want to use with this instruction by passing it as the second function argument. You can leave this field empty when there's only 1 existing policy.";
                        }
                        return [2 /*return*/, this.emeraldClient.claimRewards(this.user, nft, this.communityId, index, policyIndex)];
                }
            });
        });
    };
    EmeraldCommunity.prototype.getNftTicket = function (nft) {
        return __awaiter(this, void 0, void 0, function () {
            var userGlobalAccountPda, userCommunityAccountIndex, userCommunityAccountPda, nftTicketPda, ticketData, data, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userGlobalAccountPda = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            this.user.toBuffer(),
                            this.emeraldClient.mainPool.toBuffer()
                        ], PROGRAM_ID)[0];
                        return [4 /*yield*/, this.emeraldClient.fetchUserCommunityAccountIndex(this.user, userGlobalAccountPda, this.communityPubkey)];
                    case 1:
                        userCommunityAccountIndex = _a.sent();
                        userCommunityAccountPda = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            this.user.toBuffer(),
                            userGlobalAccountPda.toBuffer(),
                            (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
                        ], PROGRAM_ID)[0];
                        nftTicketPda = PublicKey.findProgramAddressSync([
                            Buffer.from(NFT_TICKET),
                            userGlobalAccountPda.toBuffer(),
                            userCommunityAccountPda.toBuffer(),
                            nft.toBuffer()
                        ], PROGRAM_ID)[0];
                        ticketData = null;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, NftTicket.fromAccountAddress(this.emeraldClient.connection, nftTicketPda)];
                    case 3:
                        data = _a.sent();
                        if (data)
                            ticketData = data;
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _a.sent();
                        ticketData = null;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, ticketData];
                }
            });
        });
    };
    EmeraldCommunity.prototype.getUserStakedNfts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var whitelisted, whitelistedMapped, allHeldNfts, filteredByWhitelist, filteredByState, stakedFiltered;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("getUserStakedNfts");
                        return [4 /*yield*/, this.getCollections()];
                    case 1:
                        whitelisted = _a.sent();
                        whitelistedMapped = whitelisted.map(function (w) { return w.masterCollectionKey.toString(); });
                        return [4 /*yield*/, this.emeraldClient.metaplex.nfts().findAllByOwner({ owner: this.user })];
                    case 2:
                        allHeldNfts = _a.sent();
                        filteredByWhitelist = allHeldNfts.filter(function (nft) {
                            return nft.collection && nft.collection.verified && whitelistedMapped.includes(nft.collection.address.toString());
                        });
                        return [4 /*yield*/, Promise.all(filteredByWhitelist.map(function (nft) { return __awaiter(_this, void 0, void 0, function () {
                                var address, ticketData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            address = ('mintAddress' in nft) ? nft.mintAddress : nft.address;
                                            return [4 /*yield*/, this.getNftTicket(address)];
                                        case 1:
                                            ticketData = _a.sent();
                                            if (ticketData) {
                                                return [2 /*return*/, {
                                                        data: ticketData,
                                                        mint: address
                                                    }];
                                            }
                                            else {
                                                return [2 /*return*/, null];
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        filteredByState = _a.sent();
                        stakedFiltered = filteredByState.filter(function (f) { return !!f; });
                        return [2 /*return*/, stakedFiltered];
                }
            });
        });
    };
    EmeraldCommunity.prototype.claimAllRewards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allStakedNfts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserStakedNfts()];
                    case 1:
                        allStakedNfts = _a.sent();
                        return [4 /*yield*/, Promise.all(allStakedNfts.map(function (_a) {
                                var mint = _a.mint;
                                return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0: return [4 /*yield*/, this.claimRewardPerNft(mint, 0)];
                                            case 1: return [2 /*return*/, _b.sent()];
                                        }
                                    });
                                });
                            }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EmeraldCommunity;
}());
export default EmeraldCommunity;
