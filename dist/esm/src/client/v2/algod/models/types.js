/**
 * NOTICE: This file was generated. Editing this file manually is not recommended.
 */
/* eslint-disable no-use-before-define */
import BaseModel from './base';
/**
 * Account information at a given round.
 * Definition:
 * data/basics/userBalance.go : AccountData
 */
export class Account extends BaseModel {
    /**
     * Creates a new `Account` object.
     * @param address - the account public key
     * @param amount - (algo) total number of MicroAlgos in the account
     * @param amountWithoutPendingRewards - specifies the amount of MicroAlgos in the account, without the pending rewards.
     * @param pendingRewards - amount of MicroAlgos of pending rewards in this account.
     * @param rewards - (ern) total rewards of MicroAlgos the account has received, including pending
     * rewards.
     * @param round - The round for which this information is relevant.
     * @param status - (onl) delegation status of the account's MicroAlgos
     * * Offline - indicates that the associated account is delegated.
     * * Online - indicates that the associated account used as part of the delegation
     * pool.
     * * NotParticipating - indicates that the associated account is neither a
     * delegator nor a delegate.
     * @param appsLocalState - (appl) applications local data stored in this account.
     * Note the raw object uses `map[int] -> AppLocalState` for this type.
     * @param appsTotalExtraPages - (teap) the sum of all extra application program pages for this account.
     * @param appsTotalSchema - (tsch) stores the sum of all of the local schemas and global schemas in this
     * account.
     * Note: the raw account uses `StateSchema` for this type.
     * @param assets - (asset) assets held by this account.
     * Note the raw object uses `map[int] -> AssetHolding` for this type.
     * @param authAddr - (spend) the address against which signing should be checked. If empty, the
     * address of the current account is used. This field can be updated in any
     * transaction by setting the RekeyTo field.
     * @param createdApps - (appp) parameters of applications created by this account including app global
     * data.
     * Note: the raw account uses `map[int] -> AppParams` for this type.
     * @param createdAssets - (apar) parameters of assets created by this account.
     * Note: the raw account uses `map[int] -> Asset` for this type.
     * @param participation - AccountParticipation describes the parameters used by this account in consensus
     * protocol.
     * @param rewardBase - (ebase) used as part of the rewards computation. Only applicable to accounts
     * which are participating.
     * @param sigType - Indicates what type of signature is used by this account, must be one of:
     * * sig
     * * msig
     * * lsig
     */
    constructor({ address, amount, amountWithoutPendingRewards, pendingRewards, rewards, round, status, appsLocalState, appsTotalExtraPages, appsTotalSchema, assets, authAddr, createdApps, createdAssets, participation, rewardBase, sigType, }) {
        super();
        this.address = address;
        this.amount = amount;
        this.amountWithoutPendingRewards = amountWithoutPendingRewards;
        this.pendingRewards = pendingRewards;
        this.rewards = rewards;
        this.round = round;
        this.status = status;
        this.appsLocalState = appsLocalState;
        this.appsTotalExtraPages = appsTotalExtraPages;
        this.appsTotalSchema = appsTotalSchema;
        this.assets = assets;
        this.authAddr = authAddr;
        this.createdApps = createdApps;
        this.createdAssets = createdAssets;
        this.participation = participation;
        this.rewardBase = rewardBase;
        this.sigType = sigType;
        this.attribute_map = {
            address: 'address',
            amount: 'amount',
            amountWithoutPendingRewards: 'amount-without-pending-rewards',
            pendingRewards: 'pending-rewards',
            rewards: 'rewards',
            round: 'round',
            status: 'status',
            appsLocalState: 'apps-local-state',
            appsTotalExtraPages: 'apps-total-extra-pages',
            appsTotalSchema: 'apps-total-schema',
            assets: 'assets',
            authAddr: 'auth-addr',
            createdApps: 'created-apps',
            createdAssets: 'created-assets',
            participation: 'participation',
            rewardBase: 'reward-base',
            sigType: 'sig-type',
        };
    }
}
/**
 * AccountParticipation describes the parameters used by this account in consensus
 * protocol.
 */
export class AccountParticipation extends BaseModel {
    /**
     * Creates a new `AccountParticipation` object.
     * @param selectionParticipationKey - (sel) Selection public key (if any) currently registered for this round.
     * @param voteFirstValid - (voteFst) First round for which this participation is valid.
     * @param voteKeyDilution - (voteKD) Number of subkeys in each batch of participation keys.
     * @param voteLastValid - (voteLst) Last round for which this participation is valid.
     * @param voteParticipationKey - (vote) root participation public key (if any) currently registered for this
     * round.
     */
    constructor({ selectionParticipationKey, voteFirstValid, voteKeyDilution, voteLastValid, voteParticipationKey, }) {
        super();
        this.selectionParticipationKey =
            typeof selectionParticipationKey === 'string'
                ? new Uint8Array(Buffer.from(selectionParticipationKey, 'base64'))
                : selectionParticipationKey;
        this.voteFirstValid = voteFirstValid;
        this.voteKeyDilution = voteKeyDilution;
        this.voteLastValid = voteLastValid;
        this.voteParticipationKey =
            typeof voteParticipationKey === 'string'
                ? new Uint8Array(Buffer.from(voteParticipationKey, 'base64'))
                : voteParticipationKey;
        this.attribute_map = {
            selectionParticipationKey: 'selection-participation-key',
            voteFirstValid: 'vote-first-valid',
            voteKeyDilution: 'vote-key-dilution',
            voteLastValid: 'vote-last-valid',
            voteParticipationKey: 'vote-participation-key',
        };
    }
}
/**
 * Application state delta.
 */
export class AccountStateDelta extends BaseModel {
    /**
     * Creates a new `AccountStateDelta` object.
     * @param address -
     * @param delta - Application state delta.
     */
    constructor(address, delta) {
        super();
        this.address = address;
        this.delta = delta;
        this.attribute_map = {
            address: 'address',
            delta: 'delta',
        };
    }
}
/**
 * Application index and its parameters
 */
export class Application extends BaseModel {
    /**
     * Creates a new `Application` object.
     * @param id - (appidx) application index.
     * @param params - (appparams) application parameters.
     */
    constructor(id, params) {
        super();
        this.id = id;
        this.params = params;
        this.attribute_map = {
            id: 'id',
            params: 'params',
        };
    }
}
/**
 * Stores local state associated with an application.
 */
export class ApplicationLocalState extends BaseModel {
    /**
     * Creates a new `ApplicationLocalState` object.
     * @param id - The application which this local state is for.
     * @param schema - (hsch) schema.
     * @param keyValue - (tkv) storage.
     */
    constructor(id, schema, keyValue) {
        super();
        this.id = id;
        this.schema = schema;
        this.keyValue = keyValue;
        this.attribute_map = {
            id: 'id',
            schema: 'schema',
            keyValue: 'key-value',
        };
    }
}
/**
 * Stores the global information associated with an application.
 */
export class ApplicationParams extends BaseModel {
    /**
     * Creates a new `ApplicationParams` object.
     * @param approvalProgram - (approv) approval program.
     * @param clearStateProgram - (clearp) approval program.
     * @param creator - The address that created this application. This is the address where the
     * parameters and global state for this application can be found.
     * @param extraProgramPages - (epp) the amount of extra program pages available to this app.
     * @param globalState - [\gs) global schema
     * @param globalStateSchema - [\lsch) global schema
     * @param localStateSchema - [\lsch) local schema
     */
    constructor({ approvalProgram, clearStateProgram, creator, extraProgramPages, globalState, globalStateSchema, localStateSchema, }) {
        super();
        this.approvalProgram =
            typeof approvalProgram === 'string'
                ? new Uint8Array(Buffer.from(approvalProgram, 'base64'))
                : approvalProgram;
        this.clearStateProgram =
            typeof clearStateProgram === 'string'
                ? new Uint8Array(Buffer.from(clearStateProgram, 'base64'))
                : clearStateProgram;
        this.creator = creator;
        this.extraProgramPages = extraProgramPages;
        this.globalState = globalState;
        this.globalStateSchema = globalStateSchema;
        this.localStateSchema = localStateSchema;
        this.attribute_map = {
            approvalProgram: 'approval-program',
            clearStateProgram: 'clear-state-program',
            creator: 'creator',
            extraProgramPages: 'extra-program-pages',
            globalState: 'global-state',
            globalStateSchema: 'global-state-schema',
            localStateSchema: 'local-state-schema',
        };
    }
}
/**
 * Specifies maximums on the number of each type that may be stored.
 */
export class ApplicationStateSchema extends BaseModel {
    /**
     * Creates a new `ApplicationStateSchema` object.
     * @param numUint - (nui) num of uints.
     * @param numByteSlice - (nbs) num of byte slices.
     */
    constructor(numUint, numByteSlice) {
        super();
        this.numUint = numUint;
        this.numByteSlice = numByteSlice;
        this.attribute_map = {
            numUint: 'num-uint',
            numByteSlice: 'num-byte-slice',
        };
    }
}
/**
 * Specifies both the unique identifier and the parameters for an asset
 */
export class Asset extends BaseModel {
    /**
     * Creates a new `Asset` object.
     * @param index - unique asset identifier
     * @param params - AssetParams specifies the parameters for an asset.
     * (apar) when part of an AssetConfig transaction.
     * Definition:
     * data/transactions/asset.go : AssetParams
     */
    constructor(index, params) {
        super();
        this.index = index;
        this.params = params;
        this.attribute_map = {
            index: 'index',
            params: 'params',
        };
    }
}
/**
 * Describes an asset held by an account.
 * Definition:
 * data/basics/userBalance.go : AssetHolding
 */
export class AssetHolding extends BaseModel {
    /**
     * Creates a new `AssetHolding` object.
     * @param amount - (a) number of units held.
     * @param assetId - Asset ID of the holding.
     * @param creator - Address that created this asset. This is the address where the parameters for
     * this asset can be found, and also the address where unwanted asset units can be
     * sent in the worst case.
     * @param isFrozen - (f) whether or not the holding is frozen.
     */
    constructor(amount, assetId, creator, isFrozen) {
        super();
        this.amount = amount;
        this.assetId = assetId;
        this.creator = creator;
        this.isFrozen = isFrozen;
        this.attribute_map = {
            amount: 'amount',
            assetId: 'asset-id',
            creator: 'creator',
            isFrozen: 'is-frozen',
        };
    }
}
/**
 * AssetParams specifies the parameters for an asset.
 * (apar) when part of an AssetConfig transaction.
 * Definition:
 * data/transactions/asset.go : AssetParams
 */
export class AssetParams extends BaseModel {
    /**
     * Creates a new `AssetParams` object.
     * @param creator - The address that created this asset. This is the address where the parameters
     * for this asset can be found, and also the address where unwanted asset units can
     * be sent in the worst case.
     * @param decimals - (dc) The number of digits to use after the decimal point when displaying this
     * asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in
     * tenths. If 2, the base unit of the asset is in hundredths, and so on. This value
     * must be between 0 and 19 (inclusive).
     * @param total - (t) The total number of units of this asset.
     * @param clawback - (c) Address of account used to clawback holdings of this asset. If empty,
     * clawback is not permitted.
     * @param defaultFrozen - (df) Whether holdings of this asset are frozen by default.
     * @param freeze - (f) Address of account used to freeze holdings of this asset. If empty, freezing
     * is not permitted.
     * @param manager - (m) Address of account used to manage the keys of this asset and to destroy it.
     * @param metadataHash - (am) A commitment to some unspecified asset metadata. The format of this
     * metadata is up to the application.
     * @param name - (an) Name of this asset, as supplied by the creator. Included only when the
     * asset name is composed of printable utf-8 characters.
     * @param nameB64 - Base64 encoded name of this asset, as supplied by the creator.
     * @param reserve - (r) Address of account holding reserve (non-minted) units of this asset.
     * @param unitName - (un) Name of a unit of this asset, as supplied by the creator. Included only
     * when the name of a unit of this asset is composed of printable utf-8 characters.
     * @param unitNameB64 - Base64 encoded name of a unit of this asset, as supplied by the creator.
     * @param url - (au) URL where more information about the asset can be retrieved. Included only
     * when the URL is composed of printable utf-8 characters.
     * @param urlB64 - Base64 encoded URL where more information about the asset can be retrieved.
     */
    constructor({ creator, decimals, total, clawback, defaultFrozen, freeze, manager, metadataHash, name, nameB64, reserve, unitName, unitNameB64, url, urlB64, }) {
        super();
        this.creator = creator;
        this.decimals = decimals;
        this.total = total;
        this.clawback = clawback;
        this.defaultFrozen = defaultFrozen;
        this.freeze = freeze;
        this.manager = manager;
        this.metadataHash =
            typeof metadataHash === 'string'
                ? new Uint8Array(Buffer.from(metadataHash, 'base64'))
                : metadataHash;
        this.name = name;
        this.nameB64 =
            typeof nameB64 === 'string'
                ? new Uint8Array(Buffer.from(nameB64, 'base64'))
                : nameB64;
        this.reserve = reserve;
        this.unitName = unitName;
        this.unitNameB64 =
            typeof unitNameB64 === 'string'
                ? new Uint8Array(Buffer.from(unitNameB64, 'base64'))
                : unitNameB64;
        this.url = url;
        this.urlB64 =
            typeof urlB64 === 'string'
                ? new Uint8Array(Buffer.from(urlB64, 'base64'))
                : urlB64;
        this.attribute_map = {
            creator: 'creator',
            decimals: 'decimals',
            total: 'total',
            clawback: 'clawback',
            defaultFrozen: 'default-frozen',
            freeze: 'freeze',
            manager: 'manager',
            metadataHash: 'metadata-hash',
            name: 'name',
            nameB64: 'name-b64',
            reserve: 'reserve',
            unitName: 'unit-name',
            unitNameB64: 'unit-name-b64',
            url: 'url',
            urlB64: 'url-b64',
        };
    }
}
/**
 * Encoded block object.
 */
export class BlockResponse extends BaseModel {
    /**
     * Creates a new `BlockResponse` object.
     * @param block - Block header data.
     * @param cert - Optional certificate object. This is only included when the format is set to
     * message pack.
     */
    constructor(block, cert) {
        super();
        this.block = block;
        this.cert = cert;
        this.attribute_map = {
            block: 'block',
            cert: 'cert',
        };
    }
}
export class BuildVersion extends BaseModel {
    /**
     * Creates a new `BuildVersion` object.
     * @param branch -
     * @param buildNumber -
     * @param channel -
     * @param commitHash -
     * @param major -
     * @param minor -
     */
    constructor({ branch, buildNumber, channel, commitHash, major, minor, }) {
        super();
        this.branch = branch;
        this.buildNumber = buildNumber;
        this.channel = channel;
        this.commitHash = commitHash;
        this.major = major;
        this.minor = minor;
        this.attribute_map = {
            branch: 'branch',
            buildNumber: 'build_number',
            channel: 'channel',
            commitHash: 'commit_hash',
            major: 'major',
            minor: 'minor',
        };
    }
}
/**
 *
 */
export class CatchpointAbortResponse extends BaseModel {
    /**
     * Creates a new `CatchpointAbortResponse` object.
     * @param catchupMessage - Catchup abort response string
     */
    constructor(catchupMessage) {
        super();
        this.catchupMessage = catchupMessage;
        this.attribute_map = {
            catchupMessage: 'catchup-message',
        };
    }
}
/**
 *
 */
export class CatchpointStartResponse extends BaseModel {
    /**
     * Creates a new `CatchpointStartResponse` object.
     * @param catchupMessage - Catchup start response string
     */
    constructor(catchupMessage) {
        super();
        this.catchupMessage = catchupMessage;
        this.attribute_map = {
            catchupMessage: 'catchup-message',
        };
    }
}
/**
 * Teal compile Result
 */
export class CompileResponse extends BaseModel {
    /**
     * Creates a new `CompileResponse` object.
     * @param hash - base32 SHA512_256 of program bytes (Address style)
     * @param result - base64 encoded program bytes
     */
    constructor(hash, result) {
        super();
        this.hash = hash;
        this.result = result;
        this.attribute_map = {
            hash: 'hash',
            result: 'result',
        };
    }
}
/**
 * Request data type for dryrun endpoint. Given the Transactions and simulated
 * ledger state upload, run TEAL scripts and return debugging information.
 */
export class DryrunRequest extends BaseModel {
    /**
     * Creates a new `DryrunRequest` object.
     * @param accounts -
     * @param apps -
     * @param latestTimestamp - LatestTimestamp is available to some TEAL scripts. Defaults to the latest
     * confirmed timestamp this algod is attached to.
     * @param protocolVersion - ProtocolVersion specifies a specific version string to operate under, otherwise
     * whatever the current protocol of the network this algod is running in.
     * @param round - Round is available to some TEAL scripts. Defaults to the current round on the
     * network this algod is attached to.
     * @param sources -
     * @param txns -
     */
    constructor({ accounts, apps, latestTimestamp, protocolVersion, round, sources, txns, }) {
        super();
        this.accounts = accounts;
        this.apps = apps;
        this.latestTimestamp = latestTimestamp;
        this.protocolVersion = protocolVersion;
        this.round = round;
        this.sources = sources;
        this.txns = txns;
        this.attribute_map = {
            accounts: 'accounts',
            apps: 'apps',
            latestTimestamp: 'latest-timestamp',
            protocolVersion: 'protocol-version',
            round: 'round',
            sources: 'sources',
            txns: 'txns',
        };
    }
}
/**
 * DryrunResponse contains per-txn debug information from a dryrun.
 */
export class DryrunResponse extends BaseModel {
    /**
     * Creates a new `DryrunResponse` object.
     * @param error -
     * @param protocolVersion - Protocol version is the protocol version Dryrun was operated under.
     * @param txns -
     */
    constructor(error, protocolVersion, txns) {
        super();
        this.error = error;
        this.protocolVersion = protocolVersion;
        this.txns = txns;
        this.attribute_map = {
            error: 'error',
            protocolVersion: 'protocol-version',
            txns: 'txns',
        };
    }
}
/**
 * DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into
 * transactions or application state.
 */
export class DryrunSource extends BaseModel {
    /**
     * Creates a new `DryrunSource` object.
     * @param fieldName - FieldName is what kind of sources this is. If lsig then it goes into the
     * transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the
     * Approval Program or Clear State Program of application[this.AppIndex].
     * @param source -
     * @param txnIndex -
     * @param appIndex -
     */
    constructor(fieldName, source, txnIndex, appIndex) {
        super();
        this.fieldName = fieldName;
        this.source = source;
        this.txnIndex = txnIndex;
        this.appIndex = appIndex;
        this.attribute_map = {
            fieldName: 'field-name',
            source: 'source',
            txnIndex: 'txn-index',
            appIndex: 'app-index',
        };
    }
}
/**
 * Stores the TEAL eval step data
 */
export class DryrunState extends BaseModel {
    /**
     * Creates a new `DryrunState` object.
     * @param line - Line number
     * @param pc - Program counter
     * @param stack -
     * @param error - Evaluation error if any
     * @param scratch -
     */
    constructor({ line, pc, stack, error, scratch, }) {
        super();
        this.line = line;
        this.pc = pc;
        this.stack = stack;
        this.error = error;
        this.scratch = scratch;
        this.attribute_map = {
            line: 'line',
            pc: 'pc',
            stack: 'stack',
            error: 'error',
            scratch: 'scratch',
        };
    }
}
/**
 * DryrunTxnResult contains any LogicSig or ApplicationCall program debug
 * information and state updates from a dryrun.
 */
export class DryrunTxnResult extends BaseModel {
    /**
     * Creates a new `DryrunTxnResult` object.
     * @param disassembly - Disassembled program line by line.
     * @param appCallMessages -
     * @param appCallTrace -
     * @param globalDelta - Application state delta.
     * @param localDeltas -
     * @param logicSigMessages -
     * @param logicSigTrace -
     */
    constructor({ disassembly, appCallMessages, appCallTrace, globalDelta, localDeltas, logicSigMessages, logicSigTrace, }) {
        super();
        this.disassembly = disassembly;
        this.appCallMessages = appCallMessages;
        this.appCallTrace = appCallTrace;
        this.globalDelta = globalDelta;
        this.localDeltas = localDeltas;
        this.logicSigMessages = logicSigMessages;
        this.logicSigTrace = logicSigTrace;
        this.attribute_map = {
            disassembly: 'disassembly',
            appCallMessages: 'app-call-messages',
            appCallTrace: 'app-call-trace',
            globalDelta: 'global-delta',
            localDeltas: 'local-deltas',
            logicSigMessages: 'logic-sig-messages',
            logicSigTrace: 'logic-sig-trace',
        };
    }
}
/**
 * An error response with optional data field.
 */
export class ErrorResponse extends BaseModel {
    /**
     * Creates a new `ErrorResponse` object.
     * @param message -
     * @param data -
     */
    constructor(message, data) {
        super();
        this.message = message;
        this.data = data;
        this.attribute_map = {
            message: 'message',
            data: 'data',
        };
    }
}
/**
 * Represents a TEAL value delta.
 */
export class EvalDelta extends BaseModel {
    /**
     * Creates a new `EvalDelta` object.
     * @param action - (at) delta action.
     * @param bytes - (bs) bytes value.
     * @param uint - (ui) uint value.
     */
    constructor(action, bytes, uint) {
        super();
        this.action = action;
        this.bytes = bytes;
        this.uint = uint;
        this.attribute_map = {
            action: 'action',
            bytes: 'bytes',
            uint: 'uint',
        };
    }
}
/**
 * Key-value pairs for StateDelta.
 */
export class EvalDeltaKeyValue extends BaseModel {
    /**
     * Creates a new `EvalDeltaKeyValue` object.
     * @param key -
     * @param value - Represents a TEAL value delta.
     */
    constructor(key, value) {
        super();
        this.key = key;
        this.value = value;
        this.attribute_map = {
            key: 'key',
            value: 'value',
        };
    }
}
/**
 *
 */
export class NodeStatusResponse extends BaseModel {
    /**
     * Creates a new `NodeStatusResponse` object.
     * @param catchupTime - CatchupTime in nanoseconds
     * @param lastRound - LastRound indicates the last round seen
     * @param lastVersion - LastVersion indicates the last consensus version supported
     * @param nextVersion - NextVersion of consensus protocol to use
     * @param nextVersionRound - NextVersionRound is the round at which the next consensus version will apply
     * @param nextVersionSupported - NextVersionSupported indicates whether the next consensus version is supported
     * by this node
     * @param stoppedAtUnsupportedRound - StoppedAtUnsupportedRound indicates that the node does not support the new
     * rounds and has stopped making progress
     * @param timeSinceLastRound - TimeSinceLastRound in nanoseconds
     * @param catchpoint - The current catchpoint that is being caught up to
     * @param catchpointAcquiredBlocks - The number of blocks that have already been obtained by the node as part of the
     * catchup
     * @param catchpointProcessedAccounts - The number of accounts from the current catchpoint that have been processed so
     * far as part of the catchup
     * @param catchpointTotalAccounts - The total number of accounts included in the current catchpoint
     * @param catchpointTotalBlocks - The total number of blocks that are required to complete the current catchpoint
     * catchup
     * @param catchpointVerifiedAccounts - The number of accounts from the current catchpoint that have been verified so
     * far as part of the catchup
     * @param lastCatchpoint - The last catchpoint seen by the node
     */
    constructor({ catchupTime, lastRound, lastVersion, nextVersion, nextVersionRound, nextVersionSupported, stoppedAtUnsupportedRound, timeSinceLastRound, catchpoint, catchpointAcquiredBlocks, catchpointProcessedAccounts, catchpointTotalAccounts, catchpointTotalBlocks, catchpointVerifiedAccounts, lastCatchpoint, }) {
        super();
        this.catchupTime = catchupTime;
        this.lastRound = lastRound;
        this.lastVersion = lastVersion;
        this.nextVersion = nextVersion;
        this.nextVersionRound = nextVersionRound;
        this.nextVersionSupported = nextVersionSupported;
        this.stoppedAtUnsupportedRound = stoppedAtUnsupportedRound;
        this.timeSinceLastRound = timeSinceLastRound;
        this.catchpoint = catchpoint;
        this.catchpointAcquiredBlocks = catchpointAcquiredBlocks;
        this.catchpointProcessedAccounts = catchpointProcessedAccounts;
        this.catchpointTotalAccounts = catchpointTotalAccounts;
        this.catchpointTotalBlocks = catchpointTotalBlocks;
        this.catchpointVerifiedAccounts = catchpointVerifiedAccounts;
        this.lastCatchpoint = lastCatchpoint;
        this.attribute_map = {
            catchupTime: 'catchup-time',
            lastRound: 'last-round',
            lastVersion: 'last-version',
            nextVersion: 'next-version',
            nextVersionRound: 'next-version-round',
            nextVersionSupported: 'next-version-supported',
            stoppedAtUnsupportedRound: 'stopped-at-unsupported-round',
            timeSinceLastRound: 'time-since-last-round',
            catchpoint: 'catchpoint',
            catchpointAcquiredBlocks: 'catchpoint-acquired-blocks',
            catchpointProcessedAccounts: 'catchpoint-processed-accounts',
            catchpointTotalAccounts: 'catchpoint-total-accounts',
            catchpointTotalBlocks: 'catchpoint-total-blocks',
            catchpointVerifiedAccounts: 'catchpoint-verified-accounts',
            lastCatchpoint: 'last-catchpoint',
        };
    }
}
/**
 * Given a transaction id of a recently submitted transaction, it returns
 * information about it. There are several cases when this might succeed:
 * - transaction committed (committed round > 0)
 * - transaction still in the pool (committed round = 0, pool error = "")
 * - transaction removed from pool due to error (committed round = 0, pool error !=
 * "")
 * Or the transaction may have happened sufficiently long ago that the node no
 * longer remembers it, and this will return an error.
 */
export class PendingTransactionResponse extends BaseModel {
    /**
     * Creates a new `PendingTransactionResponse` object.
     * @param poolError - Indicates that the transaction was kicked out of this node's transaction pool
     * (and specifies why that happened). An empty string indicates the transaction
     * wasn't kicked out of this node's txpool due to an error.
     * @param txn - The raw signed transaction.
     * @param applicationIndex - The application index if the transaction was found and it created an
     * application.
     * @param assetClosingAmount - The number of the asset's unit that were transferred to the close-to address.
     * @param assetIndex - The asset index if the transaction was found and it created an asset.
     * @param closeRewards - Rewards in microalgos applied to the close remainder to account.
     * @param closingAmount - Closing amount for the transaction.
     * @param confirmedRound - The round where this transaction was confirmed, if present.
     * @param globalStateDelta - (gd) Global state key/value changes for the application being executed by this
     * transaction.
     * @param localStateDelta - (ld) Local state key/value changes for the application being executed by this
     * transaction.
     * @param receiverRewards - Rewards in microalgos applied to the receiver account.
     * @param senderRewards - Rewards in microalgos applied to the sender account.
     */
    constructor({ poolError, txn, applicationIndex, assetClosingAmount, assetIndex, closeRewards, closingAmount, confirmedRound, globalStateDelta, localStateDelta, receiverRewards, senderRewards, }) {
        super();
        this.poolError = poolError;
        this.txn = txn;
        this.applicationIndex = applicationIndex;
        this.assetClosingAmount = assetClosingAmount;
        this.assetIndex = assetIndex;
        this.closeRewards = closeRewards;
        this.closingAmount = closingAmount;
        this.confirmedRound = confirmedRound;
        this.globalStateDelta = globalStateDelta;
        this.localStateDelta = localStateDelta;
        this.receiverRewards = receiverRewards;
        this.senderRewards = senderRewards;
        this.attribute_map = {
            poolError: 'pool-error',
            txn: 'txn',
            applicationIndex: 'application-index',
            assetClosingAmount: 'asset-closing-amount',
            assetIndex: 'asset-index',
            closeRewards: 'close-rewards',
            closingAmount: 'closing-amount',
            confirmedRound: 'confirmed-round',
            globalStateDelta: 'global-state-delta',
            localStateDelta: 'local-state-delta',
            receiverRewards: 'receiver-rewards',
            senderRewards: 'sender-rewards',
        };
    }
}
/**
 * A potentially truncated list of transactions currently in the node's transaction
 * pool. You can compute whether or not the list is truncated if the number of
 * elements in the **top-transactions** array is fewer than **total-transactions**.
 */
export class PendingTransactionsResponse extends BaseModel {
    /**
     * Creates a new `PendingTransactionsResponse` object.
     * @param topTransactions - An array of signed transaction objects.
     * @param totalTransactions - Total number of transactions in the pool.
     */
    constructor(topTransactions, totalTransactions) {
        super();
        this.topTransactions = topTransactions;
        this.totalTransactions = totalTransactions;
        this.attribute_map = {
            topTransactions: 'top-transactions',
            totalTransactions: 'total-transactions',
        };
    }
}
/**
 * Transaction ID of the submission.
 */
export class PostTransactionsResponse extends BaseModel {
    /**
     * Creates a new `PostTransactionsResponse` object.
     * @param txid - encoding of the transaction hash.
     */
    constructor(txid) {
        super();
        this.txid = txid;
        this.attribute_map = {
            txid: 'txId',
        };
    }
}
/**
 * Proof of transaction in a block.
 */
export class ProofResponse extends BaseModel {
    /**
     * Creates a new `ProofResponse` object.
     * @param idx - Index of the transaction in the block's payset.
     * @param proof - Merkle proof of transaction membership.
     * @param stibhash - Hash of SignedTxnInBlock for verifying proof.
     */
    constructor(idx, proof, stibhash) {
        super();
        this.idx = idx;
        this.proof =
            typeof proof === 'string'
                ? new Uint8Array(Buffer.from(proof, 'base64'))
                : proof;
        this.stibhash =
            typeof stibhash === 'string'
                ? new Uint8Array(Buffer.from(stibhash, 'base64'))
                : stibhash;
        this.attribute_map = {
            idx: 'idx',
            proof: 'proof',
            stibhash: 'stibhash',
        };
    }
}
/**
 * Supply represents the current supply of MicroAlgos in the system.
 */
export class SupplyResponse extends BaseModel {
    /**
     * Creates a new `SupplyResponse` object.
     * @param currentRound - Round
     * @param onlineMoney - OnlineMoney
     * @param totalMoney - TotalMoney
     */
    constructor(currentRound, onlineMoney, totalMoney) {
        super();
        this.currentRound = currentRound;
        this.onlineMoney = onlineMoney;
        this.totalMoney = totalMoney;
        this.attribute_map = {
            currentRound: 'current_round',
            onlineMoney: 'online-money',
            totalMoney: 'total-money',
        };
    }
}
/**
 * Represents a key-value pair in an application store.
 */
export class TealKeyValue extends BaseModel {
    /**
     * Creates a new `TealKeyValue` object.
     * @param key -
     * @param value - Represents a TEAL value.
     */
    constructor(key, value) {
        super();
        this.key = key;
        this.value = value;
        this.attribute_map = {
            key: 'key',
            value: 'value',
        };
    }
}
/**
 * Represents a TEAL value.
 */
export class TealValue extends BaseModel {
    /**
     * Creates a new `TealValue` object.
     * @param type - (tt) value type.
     * @param bytes - (tb) bytes value.
     * @param uint - (ui) uint value.
     */
    constructor(type, bytes, uint) {
        super();
        this.type = type;
        this.bytes = bytes;
        this.uint = uint;
        this.attribute_map = {
            type: 'type',
            bytes: 'bytes',
            uint: 'uint',
        };
    }
}
/**
 * TransactionParams contains the parameters that help a client construct a new
 * transaction.
 */
export class TransactionParametersResponse extends BaseModel {
    /**
     * Creates a new `TransactionParametersResponse` object.
     * @param consensusVersion - ConsensusVersion indicates the consensus protocol version
     * as of LastRound.
     * @param fee - Fee is the suggested transaction fee
     * Fee is in units of micro-Algos per byte.
     * Fee may fall to zero but transactions must still have a fee of
     * at least MinTxnFee for the current network protocol.
     * @param genesisHash - GenesisHash is the hash of the genesis block.
     * @param genesisId - GenesisID is an ID listed in the genesis block.
     * @param lastRound - LastRound indicates the last round seen
     * @param minFee - The minimum transaction fee (not per byte) required for the
     * txn to validate for the current network protocol.
     */
    constructor({ consensusVersion, fee, genesisHash, genesisId, lastRound, minFee, }) {
        super();
        this.consensusVersion = consensusVersion;
        this.fee = fee;
        this.genesisHash =
            typeof genesisHash === 'string'
                ? new Uint8Array(Buffer.from(genesisHash, 'base64'))
                : genesisHash;
        this.genesisId = genesisId;
        this.lastRound = lastRound;
        this.minFee = minFee;
        this.attribute_map = {
            consensusVersion: 'consensus-version',
            fee: 'fee',
            genesisHash: 'genesis-hash',
            genesisId: 'genesis-id',
            lastRound: 'last-round',
            minFee: 'min-fee',
        };
    }
}
/**
 * algod version information.
 */
export class Version extends BaseModel {
    /**
     * Creates a new `Version` object.
     * @param build -
     * @param genesisHashB64 -
     * @param genesisId -
     * @param versions -
     */
    constructor(build, genesisHashB64, genesisId, versions) {
        super();
        this.build = build;
        this.genesisHashB64 =
            typeof genesisHashB64 === 'string'
                ? new Uint8Array(Buffer.from(genesisHashB64, 'base64'))
                : genesisHashB64;
        this.genesisId = genesisId;
        this.versions = versions;
        this.attribute_map = {
            build: 'build',
            genesisHashB64: 'genesis_hash_b64',
            genesisId: 'genesis_id',
            versions: 'versions',
        };
    }
}
//# sourceMappingURL=types.js.map