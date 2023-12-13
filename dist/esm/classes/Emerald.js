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
import { PublicKey } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { COLLECTION_POLICY_SEED, COLLECTION_SEED, COMMUNITY_SEED, MAIN_POOL, MAIN_SEED, NFT_TICKET, SNAPSHOT_PEG_SEED, USER_ACCOUNT_SEED, USER_COMMUNITY_ACCOUNT_SEED } from "../constants";
import { Collection, CommunityPool, createAddCollectionInstruction, createAddCollectionPolicyInstruction, createClaimSingleInstruction, createInitialiseCommunityInstruction, createInitialiseUserAccountInstruction, createInitialiseUserCommunityAccountInstruction, createLockCommunityInstruction, createStakeNftInstruction, createUnstakeNftInstruction, MainPool, PROGRAM_ID, UserAccount, UserCommunityAccount } from "../lib/emerald-solita";
import { BN } from "@coral-xyz/anchor";
import { createAssociatedTokenAccountIdempotentInstruction, createAssociatedTokenAccountInstruction, createTransferCheckedInstruction, getAssociatedTokenAddressSync, getMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import EmeraldPdaClient from "./EmeraldPdaClient";
var tokenMetadataProgram = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var Emerald = /** @class */ (function () {
    function Emerald(connection, programId) {
        this.mainPool = MAIN_POOL;
        this.connection = connection;
        this.metaplex = new Metaplex(connection);
        this.programId = programId || PROGRAM_ID;
        this.PdaClient = new EmeraldPdaClient(connection, programId);
    }
    Emerald.prototype.getProtocolData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MainPool.fromAccountAddress(this.connection, this.mainPool)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // async snapshotCommunity(communityId: number) {
    //     const communityPool = this.PdaClient.communityPool(communityId);
    //
    //     const communityPoolData = await CommunityPool.fromAccountAddress(
    //         this.connection,
    //         communityPool
    //     );
    //
    //     const promises: UserCommunityAccount[] = [];
    //
    //     for (let i = 0; i < communityPoolData.totalUsers; i++) {
    //         const snapshotPeg = await this.PdaClient.snapshotPeg(communityId);
    //
    //         const { userCommunityAccount } = await SnapshotPeg.fromAccountAddress(this.connection, snapshotPeg);
    //         const communityAccountData = await UserCommunityAccount.fromAccountAddress(this.connection, userCommunityAccount);
    //
    //         promises.push(communityAccountData);
    //     }
    //
    //     // Result = array of community accounts, cannot reverse-derive actual addresses.
    //     const result = await Promise.all(promises);
    //     const filteredResult = result.filter(user => user.);
    // }
    Emerald.prototype.getWhitelistedCollections = function (communityId) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityPoolData, collectionsIdx, whitelistedCollections, i, collection, collectionsDatas;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        collectionsIdx = communityPoolData.collectionsIdx;
                        whitelistedCollections = [];
                        for (i = 0; i < collectionsIdx; i++) {
                            collection = PublicKey.findProgramAddressSync([
                                Buffer.from(COLLECTION_SEED),
                                communityPool.toBuffer(),
                                new BN(i).toArrayLike(Buffer, "be", 4),
                            ], this.programId)[0];
                            whitelistedCollections.push(collection);
                        }
                        return [4 /*yield*/, Promise.all(whitelistedCollections.map(function (collection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Collection.fromAccountAddress(this.connection, collection)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 2:
                        collectionsDatas = _a.sent();
                        return [2 /*return*/, collectionsDatas];
                }
            });
        });
    };
    Emerald.prototype.createNewCommunity = function (rewardMint, admin) {
        return __awaiter(this, void 0, void 0, function () {
            var mainPoolData, communityPool, rewardVault, ix1, ix2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MainPool.fromAccountAddress(this.connection, this.mainPool)];
                    case 1:
                        mainPoolData = _a.sent();
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(mainPoolData.totalCommunities)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        rewardVault = getAssociatedTokenAddressSync(rewardMint, communityPool, true);
                        ix1 = createAssociatedTokenAccountInstruction(admin, rewardVault, communityPool, rewardMint);
                        ix2 = createInitialiseCommunityInstruction({
                            mainPool: this.mainPool,
                            coinMint: rewardMint,
                            communityPool: communityPool,
                            rewardVault: rewardVault,
                            admin: admin
                        }, {
                            feeReduction: 100
                        }, this.programId);
                        return [2 /*return*/, [ix1, ix2]];
                }
            });
        });
    };
    Emerald.prototype.addCollectionToCommunity = function (communityId, admin, verifiedCollectionAddress, verifiedCreator) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityPoolData, collectionPda, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        collectionPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_SEED),
                            communityPool.toBuffer(),
                            new BN(communityPoolData.collectionsIdx).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        ix = createAddCollectionInstruction({
                            admin: admin,
                            communityPool: communityPool,
                            mainPool: MAIN_POOL,
                            collection: collectionPda
                        }, {
                            verifiedCreator: !!verifiedCreator,
                            creatorKey: verifiedCreator || new PublicKey(0),
                            communityIdx: communityId,
                            masterCollectionKey: verifiedCollectionAddress,
                            masterEditionKey: new PublicKey(0)
                        }, this.programId);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.addCollectionPolicy = function (communityId, collectionId, policy) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityPoolData, collectionPda, collectionData, collectionPolicyPda, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        collectionPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_SEED),
                            communityPool.toBuffer(),
                            new BN(collectionId).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        return [4 /*yield*/, Collection.fromAccountAddress(this.connection, collectionPda)];
                    case 2:
                        collectionData = _a.sent();
                        collectionPolicyPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_POLICY_SEED),
                            collectionPda.toBuffer(),
                            communityPool.toBuffer(),
                            (new BN(collectionData.totalPolicies)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        ix = createAddCollectionPolicyInstruction({
                            admin: communityPoolData.communityAdmin,
                            communityPool: communityPool,
                            collection: collectionPda,
                            mainPool: MAIN_POOL,
                            collectionPolicy: collectionPolicyPda
                        }, __assign(__assign({}, policy), { collectionIdx: collectionId, communityIdx: communityId }), this.programId);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.lockCommunity = function (communityId, admin) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, coinMint, vault, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        coinMint = (_a.sent()).coinMint;
                        vault = getAssociatedTokenAddressSync(coinMint, communityPool, true);
                        ix = createLockCommunityInstruction({
                            admin: admin,
                            communityPool: communityPool,
                            rewardVault: vault,
                            mainPool: MAIN_POOL,
                        }, {
                            communityIdx: communityId
                        });
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.initializeUserGlobalAccount = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var pda, ix;
            return __generator(this, function (_a) {
                pda = PublicKey.findProgramAddressSync([
                    Buffer.from(USER_ACCOUNT_SEED),
                    user.toBuffer(),
                    MAIN_POOL.toBuffer()
                ], this.programId)[0];
                ix = createInitialiseUserAccountInstruction({
                    user: user,
                    userAccount: pda,
                    mainPool: MAIN_POOL,
                }, this.programId);
                return [2 /*return*/, ix];
            });
        });
    };
    Emerald.prototype.fetchUserCommunityAccountIndex = function (user, userGlobalAccountPda, communityPool) {
        return __awaiter(this, void 0, void 0, function () {
            var index, i, pda, d, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = null;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index === null)) return [3 /*break*/, 6];
                        pda = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            user.toBuffer(),
                            userGlobalAccountPda.toBuffer(),
                            (new BN(i)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, UserCommunityAccount.fromAccountAddress(this.connection, pda)];
                    case 3:
                        d = _a.sent();
                        if (d.communityAddress.toString() === communityPool.toString()) {
                            index = i;
                        }
                        else {
                            i++;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        throw "User community account is not initialized.";
                    case 5: return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, i];
                }
            });
        });
    };
    Emerald.prototype.initializeUserCommunityAccount = function (user, communityId, userCommunityCounter) {
        return __awaiter(this, void 0, void 0, function () {
            var userGlobalAccount, index, userGlobalAccountData, err_2, userCommunityAccount, communityPool, taken, communityPoolData, snapshotPeg, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userGlobalAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            user.toBuffer(),
                            MAIN_POOL.toBuffer()
                        ], this.programId)[0];
                        index = 0;
                        if (!(userCommunityCounter !== undefined)) return [3 /*break*/, 1];
                        index = userCommunityCounter;
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, UserAccount.fromAccountAddress(this.connection, userGlobalAccount)];
                    case 2:
                        userGlobalAccountData = _a.sent();
                        index = userGlobalAccountData.communityCounter;
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        // We cannot find the global account data, meaning we are initializing both simultaneously.
                        // Index equals 0.
                        index = 0;
                        return [3 /*break*/, 4];
                    case 4:
                        userCommunityAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            user.toBuffer(),
                            userGlobalAccount.toBuffer(),
                            (new BN(index)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        taken = PublicKey.findProgramAddressSync([
                            Buffer.from(MAIN_SEED),
                            user.toBuffer(),
                            communityPool.toBuffer(),
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 5:
                        communityPoolData = _a.sent();
                        snapshotPeg = PublicKey.findProgramAddressSync([
                            Buffer.from(SNAPSHOT_PEG_SEED),
                            communityPool.toBuffer(),
                            new BN(communityPoolData.totalUsers).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        ix = createInitialiseUserCommunityAccountInstruction({
                            user: user,
                            communityPool: communityPool,
                            mainPool: MAIN_POOL,
                            userAccount: userGlobalAccount,
                            userCommunityAccount: userCommunityAccount,
                            taken: taken,
                            snapshotPeg: snapshotPeg,
                        }, {
                            communityIdx: communityId
                        }, this.programId);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.stakeNft = function (user, nft, communityId, collectionId, policyId) {
        return __awaiter(this, void 0, void 0, function () {
            var userGlobalAccount, communityPool, userCommunityAccountIndex, userCommunityAccount, userAta, nftTicket, nftMetadataPda, collectionPda, collectionPolicyPda, edition, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userGlobalAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            user.toBuffer(),
                            MAIN_POOL.toBuffer()
                        ], this.programId)[0];
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, this.fetchUserCommunityAccountIndex(user, userGlobalAccount, communityPool)];
                    case 1:
                        userCommunityAccountIndex = _a.sent();
                        userCommunityAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            user.toBuffer(),
                            userGlobalAccount.toBuffer(),
                            (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        userAta = getAssociatedTokenAddressSync(nft, user);
                        nftTicket = PublicKey.findProgramAddressSync([
                            Buffer.from(NFT_TICKET),
                            userGlobalAccount.toBuffer(),
                            userCommunityAccount.toBuffer(),
                            nft.toBuffer()
                        ], this.programId)[0];
                        nftMetadataPda = this.metaplex.nfts().pdas().metadata({ mint: nft });
                        collectionPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_SEED),
                            communityPool.toBuffer(),
                            new BN(collectionId).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        collectionPolicyPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_POLICY_SEED),
                            collectionPda.toBuffer(),
                            communityPool.toBuffer(),
                            (new BN(policyId)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        edition = this.metaplex.nfts().pdas().edition({
                            mint: nft
                        });
                        ix = createStakeNftInstruction({
                            user: user,
                            mainPool: MAIN_POOL,
                            userAccount: userGlobalAccount,
                            communityPool: communityPool,
                            userCommunityAccount: userCommunityAccount,
                            tokenProgram: TOKEN_PROGRAM_ID,
                            tokenMetadataProgram: tokenMetadataProgram,
                            userNftTokenAccount: userAta,
                            collection: collectionPda,
                            nftMint: nft,
                            collectionPolicy: collectionPolicyPda,
                            editionId: edition,
                            nftTicket: nftTicket,
                            mintMetadata: nftMetadataPda,
                            masterMintMetadata: nftMetadataPda,
                        }, {
                            communityAccount: userCommunityAccountIndex,
                            collectionIdx: collectionId,
                            policyIdx: policyId,
                            communityIdx: communityId
                        }, this.programId);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.unstakeNft = function (user, nft, communityId, collectionId, policyId) {
        return __awaiter(this, void 0, void 0, function () {
            var userGlobalAccount, communityPool, communityPoolData, token, userCommunityAccountIndex, userCommunityAccount, userAta, nftTicket, nftMetadataPda, collectionPda, collectionPolicyPda, edition, rewardVault, userRewardVault, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userGlobalAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            user.toBuffer(),
                            MAIN_POOL.toBuffer()
                        ], this.programId)[0];
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        token = communityPoolData.coinMint;
                        return [4 /*yield*/, this.fetchUserCommunityAccountIndex(user, userGlobalAccount, communityPool)];
                    case 2:
                        userCommunityAccountIndex = _a.sent();
                        userCommunityAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            user.toBuffer(),
                            userGlobalAccount.toBuffer(),
                            (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        userAta = getAssociatedTokenAddressSync(nft, user);
                        nftTicket = PublicKey.findProgramAddressSync([
                            Buffer.from(NFT_TICKET),
                            userGlobalAccount.toBuffer(),
                            userCommunityAccount.toBuffer(),
                            nft.toBuffer()
                        ], this.programId)[0];
                        nftMetadataPda = this.metaplex.nfts().pdas().metadata({ mint: nft });
                        collectionPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_SEED),
                            communityPool.toBuffer(),
                            new BN(collectionId).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        collectionPolicyPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_POLICY_SEED),
                            collectionPda.toBuffer(),
                            communityPool.toBuffer(),
                            (new BN(policyId)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        edition = this.metaplex.nfts().pdas().edition({
                            mint: nft
                        });
                        rewardVault = getAssociatedTokenAddressSync(token, communityPool, true);
                        userRewardVault = getAssociatedTokenAddressSync(token, user, true);
                        ix = createUnstakeNftInstruction({
                            user: user,
                            communityPool: communityPool,
                            mainPool: MAIN_POOL,
                            unstakeNftTicket: nftTicket,
                            mintMetadata: nftMetadataPda,
                            nftMint: nft,
                            collectionPolicy: collectionPolicyPda,
                            editionId: edition,
                            tokenMetadataProgram: tokenMetadataProgram,
                            userCommunityAccount: userCommunityAccount,
                            masterMintMetadata: nftMetadataPda,
                            userNftTokenAccount: userAta,
                            collection: collectionPda,
                            rewardVault: rewardVault,
                            userRewardAccount: userRewardVault,
                            userAccount: userGlobalAccount
                        }, {
                            collectionIdx: collectionId,
                            communityIdx: communityId,
                            policyIdx: policyId,
                            communityAccount: userCommunityAccountIndex
                        }, this.programId);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.claimRewards = function (user, nft, communityId, collectionId, policyId) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityPoolData, token, userGlobalAccount, userCommunityAccountIndex, userCommunityAccount, rewardVault, userRewardVault, collectionPda, nftTicket, collectionPolicyPda, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        token = communityPoolData.coinMint;
                        userGlobalAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_ACCOUNT_SEED),
                            user.toBuffer(),
                            MAIN_POOL.toBuffer()
                        ], this.programId)[0];
                        return [4 /*yield*/, this.fetchUserCommunityAccountIndex(user, userGlobalAccount, communityPool)];
                    case 2:
                        userCommunityAccountIndex = _a.sent();
                        userCommunityAccount = PublicKey.findProgramAddressSync([
                            Buffer.from(USER_COMMUNITY_ACCOUNT_SEED),
                            user.toBuffer(),
                            userGlobalAccount.toBuffer(),
                            (new BN(userCommunityAccountIndex)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        rewardVault = getAssociatedTokenAddressSync(token, communityPool, true);
                        userRewardVault = getAssociatedTokenAddressSync(token, user, true);
                        collectionPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_SEED),
                            communityPool.toBuffer(),
                            new BN(collectionId).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        nftTicket = PublicKey.findProgramAddressSync([
                            Buffer.from(NFT_TICKET),
                            userGlobalAccount.toBuffer(),
                            userCommunityAccount.toBuffer(),
                            nft.toBuffer()
                        ], this.programId)[0];
                        collectionPolicyPda = PublicKey.findProgramAddressSync([
                            Buffer.from(COLLECTION_POLICY_SEED),
                            collectionPda.toBuffer(),
                            communityPool.toBuffer(),
                            (new BN(policyId)).toArrayLike(Buffer, "be", 4),
                        ], this.programId)[0];
                        ix = createClaimSingleInstruction({
                            mainPool: MAIN_POOL,
                            user: user,
                            communityPool: communityPool,
                            userAccount: userGlobalAccount,
                            userCommunityAccount: userCommunityAccount,
                            rewardVault: rewardVault,
                            userRewardAccount: userRewardVault,
                            collectionPolicy: collectionPolicyPda,
                            collection: collectionPda,
                            nftTicket: nftTicket,
                        }, {
                            nftMint: nft,
                            communityIdx: communityId,
                            collectionIdx: collectionId,
                            collectionPolicyIdx: policyId,
                            userCommunityAccountIdx: userCommunityAccountIndex
                        }, this.programId);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.initializeRewardVault = function (communityId, admin) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityPoolData, token, ata, ix;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        token = communityPoolData.coinMint;
                        ata = getAssociatedTokenAddressSync(token, communityPool, true);
                        ix = createAssociatedTokenAccountIdempotentInstruction(admin, ata, communityPool, token);
                        return [2 /*return*/, ix];
                }
            });
        });
    };
    Emerald.prototype.fundRewards = function (communityId, admin, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var communityPool, communityPoolData, token, tokenData, ata, adminAta, ix1, ix2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        communityPool = PublicKey.findProgramAddressSync([
                            Buffer.from(COMMUNITY_SEED),
                            MAIN_POOL.toBuffer(),
                            (new BN(communityId)).toArrayLike(Buffer, "be", 4)
                        ], this.programId)[0];
                        return [4 /*yield*/, CommunityPool.fromAccountAddress(this.connection, communityPool)];
                    case 1:
                        communityPoolData = _a.sent();
                        token = communityPoolData.coinMint;
                        return [4 /*yield*/, getMint(this.connection, token)];
                    case 2:
                        tokenData = _a.sent();
                        ata = getAssociatedTokenAddressSync(token, communityPool, true);
                        adminAta = getAssociatedTokenAddressSync(token, admin, false);
                        ix1 = createAssociatedTokenAccountIdempotentInstruction(admin, ata, communityPool, token);
                        ix2 = createTransferCheckedInstruction(adminAta, token, ata, admin, amount, tokenData.decimals);
                        return [2 /*return*/, [ix1, ix2]];
                }
            });
        });
    };
    return Emerald;
}());
export default Emerald;
