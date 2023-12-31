/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var createErrorFromCodeLookup = new Map();
var createErrorFromNameLookup = new Map();
/**
 * InvalidMetadata: 'Invalid Metadata Address'
 *
 * @category Errors
 * @category generated
 */
var InvalidMetadataError = /** @class */ (function (_super) {
    __extends(InvalidMetadataError, _super);
    function InvalidMetadataError() {
        var _this = _super.call(this, 'Invalid Metadata Address') || this;
        _this.code = 0x1770;
        _this.name = 'InvalidMetadata';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, InvalidMetadataError);
        }
        return _this;
    }
    return InvalidMetadataError;
}(Error));
export { InvalidMetadataError };
createErrorFromCodeLookup.set(0x1770, function () { return new InvalidMetadataError(); });
createErrorFromNameLookup.set('InvalidMetadata', function () { return new InvalidMetadataError(); });
/**
 * IncorrectFeeReduction: 'Fee reduction must be within 0-100'
 *
 * @category Errors
 * @category generated
 */
var IncorrectFeeReductionError = /** @class */ (function (_super) {
    __extends(IncorrectFeeReductionError, _super);
    function IncorrectFeeReductionError() {
        var _this = _super.call(this, 'Fee reduction must be within 0-100') || this;
        _this.code = 0x1771;
        _this.name = 'IncorrectFeeReduction';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IncorrectFeeReductionError);
        }
        return _this;
    }
    return IncorrectFeeReductionError;
}(Error));
export { IncorrectFeeReductionError };
createErrorFromCodeLookup.set(0x1771, function () { return new IncorrectFeeReductionError(); });
createErrorFromNameLookup.set('IncorrectFeeReduction', function () { return new IncorrectFeeReductionError(); });
/**
 * MetadataCreatorParseError: 'Can't Parse The NFT's Creators'
 *
 * @category Errors
 * @category generated
 */
var MetadataCreatorParseErrorError = /** @class */ (function (_super) {
    __extends(MetadataCreatorParseErrorError, _super);
    function MetadataCreatorParseErrorError() {
        var _this = _super.call(this, "Can't Parse The NFT's Creators") || this;
        _this.code = 0x1772;
        _this.name = 'MetadataCreatorParseError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, MetadataCreatorParseErrorError);
        }
        return _this;
    }
    return MetadataCreatorParseErrorError;
}(Error));
export { MetadataCreatorParseErrorError };
createErrorFromCodeLookup.set(0x1772, function () { return new MetadataCreatorParseErrorError(); });
createErrorFromNameLookup.set('MetadataCreatorParseError', function () { return new MetadataCreatorParseErrorError(); });
/**
 * NftDoesntMatchCollectionPda: 'Provided NFT is not a member of provided collection'
 *
 * @category Errors
 * @category generated
 */
var NftDoesntMatchCollectionPdaError = /** @class */ (function (_super) {
    __extends(NftDoesntMatchCollectionPdaError, _super);
    function NftDoesntMatchCollectionPdaError() {
        var _this = _super.call(this, 'Provided NFT is not a member of provided collection') || this;
        _this.code = 0x1773;
        _this.name = 'NftDoesntMatchCollectionPda';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, NftDoesntMatchCollectionPdaError);
        }
        return _this;
    }
    return NftDoesntMatchCollectionPdaError;
}(Error));
export { NftDoesntMatchCollectionPdaError };
createErrorFromCodeLookup.set(0x1773, function () { return new NftDoesntMatchCollectionPdaError(); });
createErrorFromNameLookup.set('NftDoesntMatchCollectionPda', function () { return new NftDoesntMatchCollectionPdaError(); });
/**
 * UnexpectedCreator: 'Creator of the NFT is not the expected creator'
 *
 * @category Errors
 * @category generated
 */
var UnexpectedCreatorError = /** @class */ (function (_super) {
    __extends(UnexpectedCreatorError, _super);
    function UnexpectedCreatorError() {
        var _this = _super.call(this, 'Creator of the NFT is not the expected creator') || this;
        _this.code = 0x1774;
        _this.name = 'UnexpectedCreator';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, UnexpectedCreatorError);
        }
        return _this;
    }
    return UnexpectedCreatorError;
}(Error));
export { UnexpectedCreatorError };
createErrorFromCodeLookup.set(0x1774, function () { return new UnexpectedCreatorError(); });
createErrorFromNameLookup.set('UnexpectedCreator', function () { return new UnexpectedCreatorError(); });
/**
 * UnverifiedCreator: 'Creator of the NFT is not the expected creator'
 *
 * @category Errors
 * @category generated
 */
var UnverifiedCreatorError = /** @class */ (function (_super) {
    __extends(UnverifiedCreatorError, _super);
    function UnverifiedCreatorError() {
        var _this = _super.call(this, 'Creator of the NFT is not the expected creator') || this;
        _this.code = 0x1775;
        _this.name = 'UnverifiedCreator';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, UnverifiedCreatorError);
        }
        return _this;
    }
    return UnverifiedCreatorError;
}(Error));
export { UnverifiedCreatorError };
createErrorFromCodeLookup.set(0x1775, function () { return new UnverifiedCreatorError(); });
createErrorFromNameLookup.set('UnverifiedCreator', function () { return new UnverifiedCreatorError(); });
/**
 * ConversionFailed: 'Couldnt up the number'
 *
 * @category Errors
 * @category generated
 */
var ConversionFailedError = /** @class */ (function (_super) {
    __extends(ConversionFailedError, _super);
    function ConversionFailedError() {
        var _this = _super.call(this, 'Couldnt up the number') || this;
        _this.code = 0x1776;
        _this.name = 'ConversionFailed';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ConversionFailedError);
        }
        return _this;
    }
    return ConversionFailedError;
}(Error));
export { ConversionFailedError };
createErrorFromCodeLookup.set(0x1776, function () { return new ConversionFailedError(); });
createErrorFromNameLookup.set('ConversionFailed', function () { return new ConversionFailedError(); });
/**
 * NftTicketMismatch: 'Provided NFT is not stored in the NFT PDA'
 *
 * @category Errors
 * @category generated
 */
var NftTicketMismatchError = /** @class */ (function (_super) {
    __extends(NftTicketMismatchError, _super);
    function NftTicketMismatchError() {
        var _this = _super.call(this, 'Provided NFT is not stored in the NFT PDA') || this;
        _this.code = 0x1777;
        _this.name = 'NftTicketMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, NftTicketMismatchError);
        }
        return _this;
    }
    return NftTicketMismatchError;
}(Error));
export { NftTicketMismatchError };
createErrorFromCodeLookup.set(0x1777, function () { return new NftTicketMismatchError(); });
createErrorFromNameLookup.set('NftTicketMismatch', function () { return new NftTicketMismatchError(); });
/**
 * NotStakedLongEnough: 'NFT needs to be staked longer to withdraw'
 *
 * @category Errors
 * @category generated
 */
var NotStakedLongEnoughError = /** @class */ (function (_super) {
    __extends(NotStakedLongEnoughError, _super);
    function NotStakedLongEnoughError() {
        var _this = _super.call(this, 'NFT needs to be staked longer to withdraw') || this;
        _this.code = 0x1778;
        _this.name = 'NotStakedLongEnough';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, NotStakedLongEnoughError);
        }
        return _this;
    }
    return NotStakedLongEnoughError;
}(Error));
export { NotStakedLongEnoughError };
createErrorFromCodeLookup.set(0x1778, function () { return new NotStakedLongEnoughError(); });
createErrorFromNameLookup.set('NotStakedLongEnough', function () { return new NotStakedLongEnoughError(); });
/**
 * IncorrectCollectionAddresses: 'Ensure correct addresses for collection provided'
 *
 * @category Errors
 * @category generated
 */
var IncorrectCollectionAddressesError = /** @class */ (function (_super) {
    __extends(IncorrectCollectionAddressesError, _super);
    function IncorrectCollectionAddressesError() {
        var _this = _super.call(this, 'Ensure correct addresses for collection provided') || this;
        _this.code = 0x1779;
        _this.name = 'IncorrectCollectionAddresses';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IncorrectCollectionAddressesError);
        }
        return _this;
    }
    return IncorrectCollectionAddressesError;
}(Error));
export { IncorrectCollectionAddressesError };
createErrorFromCodeLookup.set(0x1779, function () { return new IncorrectCollectionAddressesError(); });
createErrorFromNameLookup.set('IncorrectCollectionAddresses', function () { return new IncorrectCollectionAddressesError(); });
/**
 * ZeroValueRate: 'Ensure rate is non-zero'
 *
 * @category Errors
 * @category generated
 */
var ZeroValueRateError = /** @class */ (function (_super) {
    __extends(ZeroValueRateError, _super);
    function ZeroValueRateError() {
        var _this = _super.call(this, 'Ensure rate is non-zero') || this;
        _this.code = 0x177a;
        _this.name = 'ZeroValueRate';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ZeroValueRateError);
        }
        return _this;
    }
    return ZeroValueRateError;
}(Error));
export { ZeroValueRateError };
createErrorFromCodeLookup.set(0x177a, function () { return new ZeroValueRateError(); });
createErrorFromNameLookup.set('ZeroValueRate', function () { return new ZeroValueRateError(); });
/**
 * ZeroValueEpoch: 'Ensure epoch is non-zero'
 *
 * @category Errors
 * @category generated
 */
var ZeroValueEpochError = /** @class */ (function (_super) {
    __extends(ZeroValueEpochError, _super);
    function ZeroValueEpochError() {
        var _this = _super.call(this, 'Ensure epoch is non-zero') || this;
        _this.code = 0x177b;
        _this.name = 'ZeroValueEpoch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ZeroValueEpochError);
        }
        return _this;
    }
    return ZeroValueEpochError;
}(Error));
export { ZeroValueEpochError };
createErrorFromCodeLookup.set(0x177b, function () { return new ZeroValueEpochError(); });
createErrorFromNameLookup.set('ZeroValueEpoch', function () { return new ZeroValueEpochError(); });
/**
 * CommunityMismatch: 'Community address does not match user community account'
 *
 * @category Errors
 * @category generated
 */
var CommunityMismatchError = /** @class */ (function (_super) {
    __extends(CommunityMismatchError, _super);
    function CommunityMismatchError() {
        var _this = _super.call(this, 'Community address does not match user community account') || this;
        _this.code = 0x177c;
        _this.name = 'CommunityMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, CommunityMismatchError);
        }
        return _this;
    }
    return CommunityMismatchError;
}(Error));
export { CommunityMismatchError };
createErrorFromCodeLookup.set(0x177c, function () { return new CommunityMismatchError(); });
createErrorFromNameLookup.set('CommunityMismatch', function () { return new CommunityMismatchError(); });
/**
 * TimeCapExceeded: 'Promotion period has ended'
 *
 * @category Errors
 * @category generated
 */
var TimeCapExceededError = /** @class */ (function (_super) {
    __extends(TimeCapExceededError, _super);
    function TimeCapExceededError() {
        var _this = _super.call(this, 'Promotion period has ended') || this;
        _this.code = 0x177d;
        _this.name = 'TimeCapExceeded';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, TimeCapExceededError);
        }
        return _this;
    }
    return TimeCapExceededError;
}(Error));
export { TimeCapExceededError };
createErrorFromCodeLookup.set(0x177d, function () { return new TimeCapExceededError(); });
createErrorFromNameLookup.set('TimeCapExceeded', function () { return new TimeCapExceededError(); });
/**
 * TooFewCollectionsProvided: 'Length of total remaining accounts is equal to collection index vector'
 *
 * @category Errors
 * @category generated
 */
var TooFewCollectionsProvidedError = /** @class */ (function (_super) {
    __extends(TooFewCollectionsProvidedError, _super);
    function TooFewCollectionsProvidedError() {
        var _this = _super.call(this, 'Length of total remaining accounts is equal to collection index vector') || this;
        _this.code = 0x177e;
        _this.name = 'TooFewCollectionsProvided';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, TooFewCollectionsProvidedError);
        }
        return _this;
    }
    return TooFewCollectionsProvidedError;
}(Error));
export { TooFewCollectionsProvidedError };
createErrorFromCodeLookup.set(0x177e, function () { return new TooFewCollectionsProvidedError(); });
createErrorFromNameLookup.set('TooFewCollectionsProvided', function () { return new TooFewCollectionsProvidedError(); });
/**
 * EmptyVector: 'Length of collection and policy indexes vectors can't be zero'
 *
 * @category Errors
 * @category generated
 */
var EmptyVectorError = /** @class */ (function (_super) {
    __extends(EmptyVectorError, _super);
    function EmptyVectorError() {
        var _this = _super.call(this, "Length of collection and policy indexes vectors can't be zero") || this;
        _this.code = 0x177f;
        _this.name = 'EmptyVector';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, EmptyVectorError);
        }
        return _this;
    }
    return EmptyVectorError;
}(Error));
export { EmptyVectorError };
createErrorFromCodeLookup.set(0x177f, function () { return new EmptyVectorError(); });
createErrorFromNameLookup.set('EmptyVector', function () { return new EmptyVectorError(); });
/**
 * TooManyCollections1: 'Number of collections larger than the number of indexes'
 *
 * @category Errors
 * @category generated
 */
var TooManyCollections1Error = /** @class */ (function (_super) {
    __extends(TooManyCollections1Error, _super);
    function TooManyCollections1Error() {
        var _this = _super.call(this, 'Number of collections larger than the number of indexes') || this;
        _this.code = 0x1780;
        _this.name = 'TooManyCollections1';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, TooManyCollections1Error);
        }
        return _this;
    }
    return TooManyCollections1Error;
}(Error));
export { TooManyCollections1Error };
createErrorFromCodeLookup.set(0x1780, function () { return new TooManyCollections1Error(); });
createErrorFromNameLookup.set('TooManyCollections1', function () { return new TooManyCollections1Error(); });
/**
 * TooManyPolicies: 'Number of policies exceeds number of policy choices'
 *
 * @category Errors
 * @category generated
 */
var TooManyPoliciesError = /** @class */ (function (_super) {
    __extends(TooManyPoliciesError, _super);
    function TooManyPoliciesError() {
        var _this = _super.call(this, 'Number of policies exceeds number of policy choices') || this;
        _this.code = 0x1781;
        _this.name = 'TooManyPolicies';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, TooManyPoliciesError);
        }
        return _this;
    }
    return TooManyPoliciesError;
}(Error));
export { TooManyPoliciesError };
createErrorFromCodeLookup.set(0x1781, function () { return new TooManyPoliciesError(); });
createErrorFromNameLookup.set('TooManyPolicies', function () { return new TooManyPoliciesError(); });
/**
 * TooManyCollections: 'Number of collections exceeds number of collection choices'
 *
 * @category Errors
 * @category generated
 */
var TooManyCollectionsError = /** @class */ (function (_super) {
    __extends(TooManyCollectionsError, _super);
    function TooManyCollectionsError() {
        var _this = _super.call(this, 'Number of collections exceeds number of collection choices') || this;
        _this.code = 0x1782;
        _this.name = 'TooManyCollections';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, TooManyCollectionsError);
        }
        return _this;
    }
    return TooManyCollectionsError;
}(Error));
export { TooManyCollectionsError };
createErrorFromCodeLookup.set(0x1782, function () { return new TooManyCollectionsError(); });
createErrorFromNameLookup.set('TooManyCollections', function () { return new TooManyCollectionsError(); });
/**
 * CollectionPolicyMismatch: 'Provided collection policy does not match derived one'
 *
 * @category Errors
 * @category generated
 */
var CollectionPolicyMismatchError = /** @class */ (function (_super) {
    __extends(CollectionPolicyMismatchError, _super);
    function CollectionPolicyMismatchError() {
        var _this = _super.call(this, 'Provided collection policy does not match derived one') || this;
        _this.code = 0x1783;
        _this.name = 'CollectionPolicyMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, CollectionPolicyMismatchError);
        }
        return _this;
    }
    return CollectionPolicyMismatchError;
}(Error));
export { CollectionPolicyMismatchError };
createErrorFromCodeLookup.set(0x1783, function () { return new CollectionPolicyMismatchError(); });
createErrorFromNameLookup.set('CollectionPolicyMismatch', function () { return new CollectionPolicyMismatchError(); });
/**
 * CollectionMismatch: 'Provided collection does not match derived one'
 *
 * @category Errors
 * @category generated
 */
var CollectionMismatchError = /** @class */ (function (_super) {
    __extends(CollectionMismatchError, _super);
    function CollectionMismatchError() {
        var _this = _super.call(this, 'Provided collection does not match derived one') || this;
        _this.code = 0x1784;
        _this.name = 'CollectionMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, CollectionMismatchError);
        }
        return _this;
    }
    return CollectionMismatchError;
}(Error));
export { CollectionMismatchError };
createErrorFromCodeLookup.set(0x1784, function () { return new CollectionMismatchError(); });
createErrorFromNameLookup.set('CollectionMismatch', function () { return new CollectionMismatchError(); });
/**
 * IndexesMismatch: 'Index for collections and policies must be the same size'
 *
 * @category Errors
 * @category generated
 */
var IndexesMismatchError = /** @class */ (function (_super) {
    __extends(IndexesMismatchError, _super);
    function IndexesMismatchError() {
        var _this = _super.call(this, 'Index for collections and policies must be the same size') || this;
        _this.code = 0x1785;
        _this.name = 'IndexesMismatch';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IndexesMismatchError);
        }
        return _this;
    }
    return IndexesMismatchError;
}(Error));
export { IndexesMismatchError };
createErrorFromCodeLookup.set(0x1785, function () { return new IndexesMismatchError(); });
createErrorFromNameLookup.set('IndexesMismatch', function () { return new IndexesMismatchError(); });
/**
 * IncorrectPolicyCount: 'Policy indexes must match the number of provided policies policy accounts'
 *
 * @category Errors
 * @category generated
 */
var IncorrectPolicyCountError = /** @class */ (function (_super) {
    __extends(IncorrectPolicyCountError, _super);
    function IncorrectPolicyCountError() {
        var _this = _super.call(this, 'Policy indexes must match the number of provided policies policy accounts') || this;
        _this.code = 0x1786;
        _this.name = 'IncorrectPolicyCount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IncorrectPolicyCountError);
        }
        return _this;
    }
    return IncorrectPolicyCountError;
}(Error));
export { IncorrectPolicyCountError };
createErrorFromCodeLookup.set(0x1786, function () { return new IncorrectPolicyCountError(); });
createErrorFromNameLookup.set('IncorrectPolicyCount', function () { return new IncorrectPolicyCountError(); });
/**
 * IncorrectCollectionCount: 'Collection indexes must match the number of provided collections accounts'
 *
 * @category Errors
 * @category generated
 */
var IncorrectCollectionCountError = /** @class */ (function (_super) {
    __extends(IncorrectCollectionCountError, _super);
    function IncorrectCollectionCountError() {
        var _this = _super.call(this, 'Collection indexes must match the number of provided collections accounts') || this;
        _this.code = 0x1787;
        _this.name = 'IncorrectCollectionCount';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IncorrectCollectionCountError);
        }
        return _this;
    }
    return IncorrectCollectionCountError;
}(Error));
export { IncorrectCollectionCountError };
createErrorFromCodeLookup.set(0x1787, function () { return new IncorrectCollectionCountError(); });
createErrorFromNameLookup.set('IncorrectCollectionCount', function () { return new IncorrectCollectionCountError(); });
/**
 * CommunityLocked: 'Unable to withdraw from the community pool'
 *
 * @category Errors
 * @category generated
 */
var CommunityLockedError = /** @class */ (function (_super) {
    __extends(CommunityLockedError, _super);
    function CommunityLockedError() {
        var _this = _super.call(this, 'Unable to withdraw from the community pool') || this;
        _this.code = 0x1788;
        _this.name = 'CommunityLocked';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, CommunityLockedError);
        }
        return _this;
    }
    return CommunityLockedError;
}(Error));
export { CommunityLockedError };
createErrorFromCodeLookup.set(0x1788, function () { return new CommunityLockedError(); });
createErrorFromNameLookup.set('CommunityLocked', function () { return new CommunityLockedError(); });
/**
 * PolicyLocked: 'Unable to modify this policy'
 *
 * @category Errors
 * @category generated
 */
var PolicyLockedError = /** @class */ (function (_super) {
    __extends(PolicyLockedError, _super);
    function PolicyLockedError() {
        var _this = _super.call(this, 'Unable to modify this policy') || this;
        _this.code = 0x1789;
        _this.name = 'PolicyLocked';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, PolicyLockedError);
        }
        return _this;
    }
    return PolicyLockedError;
}(Error));
export { PolicyLockedError };
createErrorFromCodeLookup.set(0x1789, function () { return new PolicyLockedError(); });
createErrorFromNameLookup.set('PolicyLocked', function () { return new PolicyLockedError(); });
/**
 * IncorrectSuperAdmin: 'Incorrect admin provided'
 *
 * @category Errors
 * @category generated
 */
var IncorrectSuperAdminError = /** @class */ (function (_super) {
    __extends(IncorrectSuperAdminError, _super);
    function IncorrectSuperAdminError() {
        var _this = _super.call(this, 'Incorrect admin provided') || this;
        _this.code = 0x178a;
        _this.name = 'IncorrectSuperAdmin';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IncorrectSuperAdminError);
        }
        return _this;
    }
    return IncorrectSuperAdminError;
}(Error));
export { IncorrectSuperAdminError };
createErrorFromCodeLookup.set(0x178a, function () { return new IncorrectSuperAdminError(); });
createErrorFromNameLookup.set('IncorrectSuperAdmin', function () { return new IncorrectSuperAdminError(); });
/**
 * IncorrectSPLDecimals: 'Incorrect decimals. Exceeds 18'
 *
 * @category Errors
 * @category generated
 */
var IncorrectSPLDecimalsError = /** @class */ (function (_super) {
    __extends(IncorrectSPLDecimalsError, _super);
    function IncorrectSPLDecimalsError() {
        var _this = _super.call(this, 'Incorrect decimals. Exceeds 18') || this;
        _this.code = 0x178b;
        _this.name = 'IncorrectSPLDecimals';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IncorrectSPLDecimalsError);
        }
        return _this;
    }
    return IncorrectSPLDecimalsError;
}(Error));
export { IncorrectSPLDecimalsError };
createErrorFromCodeLookup.set(0x178b, function () { return new IncorrectSPLDecimalsError(); });
createErrorFromNameLookup.set('IncorrectSPLDecimals', function () { return new IncorrectSPLDecimalsError(); });
/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code) {
    var createError = createErrorFromCodeLookup.get(code);
    return createError != null ? createError() : null;
}
/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name) {
    var createError = createErrorFromNameLookup.get(name);
    return createError != null ? createError() : null;
}
