/**
 * NOTICE: This file was generated. Editing this file manually is not recommended.
 */
import BaseModel from './base';
import { EncodedSignedTransaction } from '../../../../types/transactions/encoded';
import BlockHeader from '../../../../types/blockHeader';
/**
 * Account information at a given round.
 * Definition:
 * data/basics/userBalance.go : AccountData
 */
export declare class Account extends BaseModel {
    /**
     * the account public key
     */
    address: string;
    /**
     * (algo) total number of MicroAlgos in the account
     */
    amount: number | bigint;
    /**
     * specifies the amount of MicroAlgos in the account, without the pending rewards.
     */
    amountWithoutPendingRewards: number | bigint;
    /**
     * amount of MicroAlgos of pending rewards in this account.
     */
    pendingRewards: number | bigint;
    /**
     * (ern) total rewards of MicroAlgos the account has received, including pending
     * rewards.
     */
    rewards: number | bigint;
    /**
     * The round for which this information is relevant.
     */
    round: number | bigint;
    /**
     * (onl) delegation status of the account's MicroAlgos
     * * Offline - indicates that the associated account is delegated.
     * * Online - indicates that the associated account used as part of the delegation
     * pool.
     * * NotParticipating - indicates that the associated account is neither a
     * delegator nor a delegate.
     */
    status: string;
    /**
     * (appl) applications local data stored in this account.
     * Note the raw object uses `map[int] -> AppLocalState` for this type.
     */
    appsLocalState?: ApplicationLocalState[];
    /**
     * (teap) the sum of all extra application program pages for this account.
     */
    appsTotalExtraPages?: number | bigint;
    /**
     * (tsch) stores the sum of all of the local schemas and global schemas in this
     * account.
     * Note: the raw account uses `StateSchema` for this type.
     */
    appsTotalSchema?: ApplicationStateSchema;
    /**
     * (asset) assets held by this account.
     * Note the raw object uses `map[int] -> AssetHolding` for this type.
     */
    assets?: AssetHolding[];
    /**
     * (spend) the address against which signing should be checked. If empty, the
     * address of the current account is used. This field can be updated in any
     * transaction by setting the RekeyTo field.
     */
    authAddr?: string;
    /**
     * (appp) parameters of applications created by this account including app global
     * data.
     * Note: the raw account uses `map[int] -> AppParams` for this type.
     */
    createdApps?: Application[];
    /**
     * (apar) parameters of assets created by this account.
     * Note: the raw account uses `map[int] -> Asset` for this type.
     */
    createdAssets?: Asset[];
    /**
     * AccountParticipation describes the parameters used by this account in consensus
     * protocol.
     */
    participation?: AccountParticipation;
    /**
     * (ebase) used as part of the rewards computation. Only applicable to accounts
     * which are participating.
     */
    rewardBase?: number | bigint;
    /**
     * Indicates what type of signature is used by this account, must be one of:
     * * sig
     * * msig
     * * lsig
     */
    sigType?: string;
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
    constructor({ address, amount, amountWithoutPendingRewards, pendingRewards, rewards, round, status, appsLocalState, appsTotalExtraPages, appsTotalSchema, assets, authAddr, createdApps, createdAssets, participation, rewardBase, sigType, }: {
        address: string;
        amount: number | bigint;
        amountWithoutPendingRewards: number | bigint;
        pendingRewards: number | bigint;
        rewards: number | bigint;
        round: number | bigint;
        status: string;
        appsLocalState?: ApplicationLocalState[];
        appsTotalExtraPages?: number | bigint;
        appsTotalSchema?: ApplicationStateSchema;
        assets?: AssetHolding[];
        authAddr?: string;
        createdApps?: Application[];
        createdAssets?: Asset[];
        participation?: AccountParticipation;
        rewardBase?: number | bigint;
        sigType?: string;
    });
}
/**
 * AccountParticipation describes the parameters used by this account in consensus
 * protocol.
 */
export declare class AccountParticipation extends BaseModel {
    /**
     * (sel) Selection public key (if any) currently registered for this round.
     */
    selectionParticipationKey: Uint8Array;
    /**
     * (voteFst) First round for which this participation is valid.
     */
    voteFirstValid: number | bigint;
    /**
     * (voteKD) Number of subkeys in each batch of participation keys.
     */
    voteKeyDilution: number | bigint;
    /**
     * (voteLst) Last round for which this participation is valid.
     */
    voteLastValid: number | bigint;
    /**
     * (vote) root participation public key (if any) currently registered for this
     * round.
     */
    voteParticipationKey: Uint8Array;
    /**
     * Creates a new `AccountParticipation` object.
     * @param selectionParticipationKey - (sel) Selection public key (if any) currently registered for this round.
     * @param voteFirstValid - (voteFst) First round for which this participation is valid.
     * @param voteKeyDilution - (voteKD) Number of subkeys in each batch of participation keys.
     * @param voteLastValid - (voteLst) Last round for which this participation is valid.
     * @param voteParticipationKey - (vote) root participation public key (if any) currently registered for this
     * round.
     */
    constructor({ selectionParticipationKey, voteFirstValid, voteKeyDilution, voteLastValid, voteParticipationKey, }: {
        selectionParticipationKey: string | Uint8Array;
        voteFirstValid: number | bigint;
        voteKeyDilution: number | bigint;
        voteLastValid: number | bigint;
        voteParticipationKey: string | Uint8Array;
    });
}
/**
 * Application state delta.
 */
export declare class AccountStateDelta extends BaseModel {
    address: string;
    /**
     * Application state delta.
     */
    delta: EvalDeltaKeyValue[];
    /**
     * Creates a new `AccountStateDelta` object.
     * @param address -
     * @param delta - Application state delta.
     */
    constructor(address: string, delta: EvalDeltaKeyValue[]);
}
/**
 * Application index and its parameters
 */
export declare class Application extends BaseModel {
    /**
     * (appidx) application index.
     */
    id: number | bigint;
    /**
     * (appparams) application parameters.
     */
    params: ApplicationParams;
    /**
     * Creates a new `Application` object.
     * @param id - (appidx) application index.
     * @param params - (appparams) application parameters.
     */
    constructor(id: number | bigint, params: ApplicationParams);
}
/**
 * Stores local state associated with an application.
 */
export declare class ApplicationLocalState extends BaseModel {
    /**
     * The application which this local state is for.
     */
    id: number | bigint;
    /**
     * (hsch) schema.
     */
    schema: ApplicationStateSchema;
    /**
     * (tkv) storage.
     */
    keyValue?: TealKeyValue[];
    /**
     * Creates a new `ApplicationLocalState` object.
     * @param id - The application which this local state is for.
     * @param schema - (hsch) schema.
     * @param keyValue - (tkv) storage.
     */
    constructor(id: number | bigint, schema: ApplicationStateSchema, keyValue?: TealKeyValue[]);
}
/**
 * Stores the global information associated with an application.
 */
export declare class ApplicationParams extends BaseModel {
    /**
     * (approv) approval program.
     */
    approvalProgram: Uint8Array;
    /**
     * (clearp) approval program.
     */
    clearStateProgram: Uint8Array;
    /**
     * The address that created this application. This is the address where the
     * parameters and global state for this application can be found.
     */
    creator: string;
    /**
     * (epp) the amount of extra program pages available to this app.
     */
    extraProgramPages?: number | bigint;
    /**
     * [\gs) global schema
     */
    globalState?: TealKeyValue[];
    /**
     * [\lsch) global schema
     */
    globalStateSchema?: ApplicationStateSchema;
    /**
     * [\lsch) local schema
     */
    localStateSchema?: ApplicationStateSchema;
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
    constructor({ approvalProgram, clearStateProgram, creator, extraProgramPages, globalState, globalStateSchema, localStateSchema, }: {
        approvalProgram: string | Uint8Array;
        clearStateProgram: string | Uint8Array;
        creator: string;
        extraProgramPages?: number | bigint;
        globalState?: TealKeyValue[];
        globalStateSchema?: ApplicationStateSchema;
        localStateSchema?: ApplicationStateSchema;
    });
}
/**
 * Specifies maximums on the number of each type that may be stored.
 */
export declare class ApplicationStateSchema extends BaseModel {
    /**
     * (nui) num of uints.
     */
    numUint: number | bigint;
    /**
     * (nbs) num of byte slices.
     */
    numByteSlice: number | bigint;
    /**
     * Creates a new `ApplicationStateSchema` object.
     * @param numUint - (nui) num of uints.
     * @param numByteSlice - (nbs) num of byte slices.
     */
    constructor(numUint: number | bigint, numByteSlice: number | bigint);
}
/**
 * Specifies both the unique identifier and the parameters for an asset
 */
export declare class Asset extends BaseModel {
    /**
     * unique asset identifier
     */
    index: number | bigint;
    /**
     * AssetParams specifies the parameters for an asset.
     * (apar) when part of an AssetConfig transaction.
     * Definition:
     * data/transactions/asset.go : AssetParams
     */
    params: AssetParams;
    /**
     * Creates a new `Asset` object.
     * @param index - unique asset identifier
     * @param params - AssetParams specifies the parameters for an asset.
     * (apar) when part of an AssetConfig transaction.
     * Definition:
     * data/transactions/asset.go : AssetParams
     */
    constructor(index: number | bigint, params: AssetParams);
}
/**
 * Describes an asset held by an account.
 * Definition:
 * data/basics/userBalance.go : AssetHolding
 */
export declare class AssetHolding extends BaseModel {
    /**
     * (a) number of units held.
     */
    amount: number | bigint;
    /**
     * Asset ID of the holding.
     */
    assetId: number | bigint;
    /**
     * Address that created this asset. This is the address where the parameters for
     * this asset can be found, and also the address where unwanted asset units can be
     * sent in the worst case.
     */
    creator: string;
    /**
     * (f) whether or not the holding is frozen.
     */
    isFrozen: boolean;
    /**
     * Creates a new `AssetHolding` object.
     * @param amount - (a) number of units held.
     * @param assetId - Asset ID of the holding.
     * @param creator - Address that created this asset. This is the address where the parameters for
     * this asset can be found, and also the address where unwanted asset units can be
     * sent in the worst case.
     * @param isFrozen - (f) whether or not the holding is frozen.
     */
    constructor(amount: number | bigint, assetId: number | bigint, creator: string, isFrozen: boolean);
}
/**
 * AssetParams specifies the parameters for an asset.
 * (apar) when part of an AssetConfig transaction.
 * Definition:
 * data/transactions/asset.go : AssetParams
 */
export declare class AssetParams extends BaseModel {
    /**
     * The address that created this asset. This is the address where the parameters
     * for this asset can be found, and also the address where unwanted asset units can
     * be sent in the worst case.
     */
    creator: string;
    /**
     * (dc) The number of digits to use after the decimal point when displaying this
     * asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in
     * tenths. If 2, the base unit of the asset is in hundredths, and so on. This value
     * must be between 0 and 19 (inclusive).
     */
    decimals: number | bigint;
    /**
     * (t) The total number of units of this asset.
     */
    total: number | bigint;
    /**
     * (c) Address of account used to clawback holdings of this asset. If empty,
     * clawback is not permitted.
     */
    clawback?: string;
    /**
     * (df) Whether holdings of this asset are frozen by default.
     */
    defaultFrozen?: boolean;
    /**
     * (f) Address of account used to freeze holdings of this asset. If empty, freezing
     * is not permitted.
     */
    freeze?: string;
    /**
     * (m) Address of account used to manage the keys of this asset and to destroy it.
     */
    manager?: string;
    /**
     * (am) A commitment to some unspecified asset metadata. The format of this
     * metadata is up to the application.
     */
    metadataHash?: Uint8Array | string;
    /**
     * (an) Name of this asset, as supplied by the creator. Included only when the
     * asset name is composed of printable utf-8 characters.
     */
    name?: string;
    /**
     * Base64 encoded name of this asset, as supplied by the creator.
     */
    nameB64?: Uint8Array;
    /**
     * (r) Address of account holding reserve (non-minted) units of this asset.
     */
    reserve?: string;
    /**
     * (un) Name of a unit of this asset, as supplied by the creator. Included only
     * when the name of a unit of this asset is composed of printable utf-8 characters.
     */
    unitName?: string;
    /**
     * Base64 encoded name of a unit of this asset, as supplied by the creator.
     */
    unitNameB64?: Uint8Array;
    /**
     * (au) URL where more information about the asset can be retrieved. Included only
     * when the URL is composed of printable utf-8 characters.
     */
    url?: string;
    /**
     * Base64 encoded URL where more information about the asset can be retrieved.
     */
    urlB64?: Uint8Array;
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
    constructor({ creator, decimals, total, clawback, defaultFrozen, freeze, manager, metadataHash, name, nameB64, reserve, unitName, unitNameB64, url, urlB64, }: {
        creator: string;
        decimals: number | bigint;
        total: number | bigint;
        clawback?: string;
        defaultFrozen?: boolean;
        freeze?: string;
        manager?: string;
        metadataHash?: string | Uint8Array;
        name?: string;
        nameB64?: string | Uint8Array;
        reserve?: string;
        unitName?: string;
        unitNameB64?: string | Uint8Array;
        url?: string;
        urlB64?: string | Uint8Array;
    });
}
/**
 * Encoded block object.
 */
export declare class BlockResponse extends BaseModel {
    /**
     * Block header data.
     */
    block: BlockHeader;
    /**
     * Optional certificate object. This is only included when the format is set to
     * message pack.
     */
    cert?: Record<string, any>;
    /**
     * Creates a new `BlockResponse` object.
     * @param block - Block header data.
     * @param cert - Optional certificate object. This is only included when the format is set to
     * message pack.
     */
    constructor(block: BlockHeader, cert?: Record<string, any>);
}
export declare class BuildVersion extends BaseModel {
    branch: string;
    buildNumber: number | bigint;
    channel: string;
    commitHash: string;
    major: number | bigint;
    minor: number | bigint;
    /**
     * Creates a new `BuildVersion` object.
     * @param branch -
     * @param buildNumber -
     * @param channel -
     * @param commitHash -
     * @param major -
     * @param minor -
     */
    constructor({ branch, buildNumber, channel, commitHash, major, minor, }: {
        branch: string;
        buildNumber: number | bigint;
        channel: string;
        commitHash: string;
        major: number | bigint;
        minor: number | bigint;
    });
}
/**
 *
 */
export declare class CatchpointAbortResponse extends BaseModel {
    /**
     * Catchup abort response string
     */
    catchupMessage: string;
    /**
     * Creates a new `CatchpointAbortResponse` object.
     * @param catchupMessage - Catchup abort response string
     */
    constructor(catchupMessage: string);
}
/**
 *
 */
export declare class CatchpointStartResponse extends BaseModel {
    /**
     * Catchup start response string
     */
    catchupMessage: string;
    /**
     * Creates a new `CatchpointStartResponse` object.
     * @param catchupMessage - Catchup start response string
     */
    constructor(catchupMessage: string);
}
/**
 * Teal compile Result
 */
export declare class CompileResponse extends BaseModel {
    /**
     * base32 SHA512_256 of program bytes (Address style)
     */
    hash: string;
    /**
     * base64 encoded program bytes
     */
    result: string;
    /**
     * Creates a new `CompileResponse` object.
     * @param hash - base32 SHA512_256 of program bytes (Address style)
     * @param result - base64 encoded program bytes
     */
    constructor(hash: string, result: string);
}
/**
 * Request data type for dryrun endpoint. Given the Transactions and simulated
 * ledger state upload, run TEAL scripts and return debugging information.
 */
export declare class DryrunRequest extends BaseModel {
    accounts: Account[];
    apps: Application[];
    /**
     * LatestTimestamp is available to some TEAL scripts. Defaults to the latest
     * confirmed timestamp this algod is attached to.
     */
    latestTimestamp: number | bigint;
    /**
     * ProtocolVersion specifies a specific version string to operate under, otherwise
     * whatever the current protocol of the network this algod is running in.
     */
    protocolVersion: string;
    /**
     * Round is available to some TEAL scripts. Defaults to the current round on the
     * network this algod is attached to.
     */
    round: number | bigint;
    sources: DryrunSource[];
    txns: EncodedSignedTransaction[];
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
    constructor({ accounts, apps, latestTimestamp, protocolVersion, round, sources, txns, }: {
        accounts: Account[];
        apps: Application[];
        latestTimestamp: number | bigint;
        protocolVersion: string;
        round: number | bigint;
        sources: DryrunSource[];
        txns: EncodedSignedTransaction[];
    });
}
/**
 * DryrunResponse contains per-txn debug information from a dryrun.
 */
export declare class DryrunResponse extends BaseModel {
    error: string;
    /**
     * Protocol version is the protocol version Dryrun was operated under.
     */
    protocolVersion: string;
    txns: DryrunTxnResult[];
    /**
     * Creates a new `DryrunResponse` object.
     * @param error -
     * @param protocolVersion - Protocol version is the protocol version Dryrun was operated under.
     * @param txns -
     */
    constructor(error: string, protocolVersion: string, txns: DryrunTxnResult[]);
}
/**
 * DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into
 * transactions or application state.
 */
export declare class DryrunSource extends BaseModel {
    /**
     * FieldName is what kind of sources this is. If lsig then it goes into the
     * transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the
     * Approval Program or Clear State Program of application[this.AppIndex].
     */
    fieldName: string;
    source: string;
    txnIndex: number | bigint;
    appIndex: number | bigint;
    /**
     * Creates a new `DryrunSource` object.
     * @param fieldName - FieldName is what kind of sources this is. If lsig then it goes into the
     * transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the
     * Approval Program or Clear State Program of application[this.AppIndex].
     * @param source -
     * @param txnIndex -
     * @param appIndex -
     */
    constructor(fieldName: string, source: string, txnIndex: number | bigint, appIndex: number | bigint);
}
/**
 * Stores the TEAL eval step data
 */
export declare class DryrunState extends BaseModel {
    /**
     * Line number
     */
    line: number | bigint;
    /**
     * Program counter
     */
    pc: number | bigint;
    stack: TealValue[];
    /**
     * Evaluation error if any
     */
    error?: string;
    scratch?: TealValue[];
    /**
     * Creates a new `DryrunState` object.
     * @param line - Line number
     * @param pc - Program counter
     * @param stack -
     * @param error - Evaluation error if any
     * @param scratch -
     */
    constructor({ line, pc, stack, error, scratch, }: {
        line: number | bigint;
        pc: number | bigint;
        stack: TealValue[];
        error?: string;
        scratch?: TealValue[];
    });
}
/**
 * DryrunTxnResult contains any LogicSig or ApplicationCall program debug
 * information and state updates from a dryrun.
 */
export declare class DryrunTxnResult extends BaseModel {
    /**
     * Disassembled program line by line.
     */
    disassembly: string[];
    appCallMessages?: string[];
    appCallTrace?: DryrunState[];
    /**
     * Application state delta.
     */
    globalDelta?: EvalDeltaKeyValue[];
    localDeltas?: AccountStateDelta[];
    logicSigMessages?: string[];
    logicSigTrace?: DryrunState[];
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
    constructor({ disassembly, appCallMessages, appCallTrace, globalDelta, localDeltas, logicSigMessages, logicSigTrace, }: {
        disassembly: string[];
        appCallMessages?: string[];
        appCallTrace?: DryrunState[];
        globalDelta?: EvalDeltaKeyValue[];
        localDeltas?: AccountStateDelta[];
        logicSigMessages?: string[];
        logicSigTrace?: DryrunState[];
    });
}
/**
 * An error response with optional data field.
 */
export declare class ErrorResponse extends BaseModel {
    message: string;
    data?: string;
    /**
     * Creates a new `ErrorResponse` object.
     * @param message -
     * @param data -
     */
    constructor(message: string, data?: string);
}
/**
 * Represents a TEAL value delta.
 */
export declare class EvalDelta extends BaseModel {
    /**
     * (at) delta action.
     */
    action: number | bigint;
    /**
     * (bs) bytes value.
     */
    bytes?: string;
    /**
     * (ui) uint value.
     */
    uint?: number | bigint;
    /**
     * Creates a new `EvalDelta` object.
     * @param action - (at) delta action.
     * @param bytes - (bs) bytes value.
     * @param uint - (ui) uint value.
     */
    constructor(action: number | bigint, bytes?: string, uint?: number | bigint);
}
/**
 * Key-value pairs for StateDelta.
 */
export declare class EvalDeltaKeyValue extends BaseModel {
    key: string;
    /**
     * Represents a TEAL value delta.
     */
    value: EvalDelta;
    /**
     * Creates a new `EvalDeltaKeyValue` object.
     * @param key -
     * @param value - Represents a TEAL value delta.
     */
    constructor(key: string, value: EvalDelta);
}
/**
 *
 */
export declare class NodeStatusResponse extends BaseModel {
    /**
     * CatchupTime in nanoseconds
     */
    catchupTime: number | bigint;
    /**
     * LastRound indicates the last round seen
     */
    lastRound: number | bigint;
    /**
     * LastVersion indicates the last consensus version supported
     */
    lastVersion: string;
    /**
     * NextVersion of consensus protocol to use
     */
    nextVersion: string;
    /**
     * NextVersionRound is the round at which the next consensus version will apply
     */
    nextVersionRound: number | bigint;
    /**
     * NextVersionSupported indicates whether the next consensus version is supported
     * by this node
     */
    nextVersionSupported: boolean;
    /**
     * StoppedAtUnsupportedRound indicates that the node does not support the new
     * rounds and has stopped making progress
     */
    stoppedAtUnsupportedRound: boolean;
    /**
     * TimeSinceLastRound in nanoseconds
     */
    timeSinceLastRound: number | bigint;
    /**
     * The current catchpoint that is being caught up to
     */
    catchpoint?: string;
    /**
     * The number of blocks that have already been obtained by the node as part of the
     * catchup
     */
    catchpointAcquiredBlocks?: number | bigint;
    /**
     * The number of accounts from the current catchpoint that have been processed so
     * far as part of the catchup
     */
    catchpointProcessedAccounts?: number | bigint;
    /**
     * The total number of accounts included in the current catchpoint
     */
    catchpointTotalAccounts?: number | bigint;
    /**
     * The total number of blocks that are required to complete the current catchpoint
     * catchup
     */
    catchpointTotalBlocks?: number | bigint;
    /**
     * The number of accounts from the current catchpoint that have been verified so
     * far as part of the catchup
     */
    catchpointVerifiedAccounts?: number | bigint;
    /**
     * The last catchpoint seen by the node
     */
    lastCatchpoint?: string;
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
    constructor({ catchupTime, lastRound, lastVersion, nextVersion, nextVersionRound, nextVersionSupported, stoppedAtUnsupportedRound, timeSinceLastRound, catchpoint, catchpointAcquiredBlocks, catchpointProcessedAccounts, catchpointTotalAccounts, catchpointTotalBlocks, catchpointVerifiedAccounts, lastCatchpoint, }: {
        catchupTime: number | bigint;
        lastRound: number | bigint;
        lastVersion: string;
        nextVersion: string;
        nextVersionRound: number | bigint;
        nextVersionSupported: boolean;
        stoppedAtUnsupportedRound: boolean;
        timeSinceLastRound: number | bigint;
        catchpoint?: string;
        catchpointAcquiredBlocks?: number | bigint;
        catchpointProcessedAccounts?: number | bigint;
        catchpointTotalAccounts?: number | bigint;
        catchpointTotalBlocks?: number | bigint;
        catchpointVerifiedAccounts?: number | bigint;
        lastCatchpoint?: string;
    });
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
export declare class PendingTransactionResponse extends BaseModel {
    /**
     * Indicates that the transaction was kicked out of this node's transaction pool
     * (and specifies why that happened). An empty string indicates the transaction
     * wasn't kicked out of this node's txpool due to an error.
     */
    poolError: string;
    /**
     * The raw signed transaction.
     */
    txn: EncodedSignedTransaction;
    /**
     * The application index if the transaction was found and it created an
     * application.
     */
    applicationIndex?: number | bigint;
    /**
     * The number of the asset's unit that were transferred to the close-to address.
     */
    assetClosingAmount?: number | bigint;
    /**
     * The asset index if the transaction was found and it created an asset.
     */
    assetIndex?: number | bigint;
    /**
     * Rewards in microalgos applied to the close remainder to account.
     */
    closeRewards?: number | bigint;
    /**
     * Closing amount for the transaction.
     */
    closingAmount?: number | bigint;
    /**
     * The round where this transaction was confirmed, if present.
     */
    confirmedRound?: number | bigint;
    /**
     * (gd) Global state key/value changes for the application being executed by this
     * transaction.
     */
    globalStateDelta?: EvalDeltaKeyValue[];
    /**
     * (ld) Local state key/value changes for the application being executed by this
     * transaction.
     */
    localStateDelta?: AccountStateDelta[];
    /**
     * Rewards in microalgos applied to the receiver account.
     */
    receiverRewards?: number | bigint;
    /**
     * Rewards in microalgos applied to the sender account.
     */
    senderRewards?: number | bigint;
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
    constructor({ poolError, txn, applicationIndex, assetClosingAmount, assetIndex, closeRewards, closingAmount, confirmedRound, globalStateDelta, localStateDelta, receiverRewards, senderRewards, }: {
        poolError: string;
        txn: EncodedSignedTransaction;
        applicationIndex?: number | bigint;
        assetClosingAmount?: number | bigint;
        assetIndex?: number | bigint;
        closeRewards?: number | bigint;
        closingAmount?: number | bigint;
        confirmedRound?: number | bigint;
        globalStateDelta?: EvalDeltaKeyValue[];
        localStateDelta?: AccountStateDelta[];
        receiverRewards?: number | bigint;
        senderRewards?: number | bigint;
    });
}
/**
 * A potentially truncated list of transactions currently in the node's transaction
 * pool. You can compute whether or not the list is truncated if the number of
 * elements in the **top-transactions** array is fewer than **total-transactions**.
 */
export declare class PendingTransactionsResponse extends BaseModel {
    /**
     * An array of signed transaction objects.
     */
    topTransactions: EncodedSignedTransaction[];
    /**
     * Total number of transactions in the pool.
     */
    totalTransactions: number | bigint;
    /**
     * Creates a new `PendingTransactionsResponse` object.
     * @param topTransactions - An array of signed transaction objects.
     * @param totalTransactions - Total number of transactions in the pool.
     */
    constructor(topTransactions: EncodedSignedTransaction[], totalTransactions: number | bigint);
}
/**
 * Transaction ID of the submission.
 */
export declare class PostTransactionsResponse extends BaseModel {
    /**
     * encoding of the transaction hash.
     */
    txid: string;
    /**
     * Creates a new `PostTransactionsResponse` object.
     * @param txid - encoding of the transaction hash.
     */
    constructor(txid: string);
}
/**
 * Proof of transaction in a block.
 */
export declare class ProofResponse extends BaseModel {
    /**
     * Index of the transaction in the block's payset.
     */
    idx: number | bigint;
    /**
     * Merkle proof of transaction membership.
     */
    proof: Uint8Array;
    /**
     * Hash of SignedTxnInBlock for verifying proof.
     */
    stibhash: Uint8Array;
    /**
     * Creates a new `ProofResponse` object.
     * @param idx - Index of the transaction in the block's payset.
     * @param proof - Merkle proof of transaction membership.
     * @param stibhash - Hash of SignedTxnInBlock for verifying proof.
     */
    constructor(idx: number | bigint, proof: string | Uint8Array, stibhash: string | Uint8Array);
}
/**
 * Supply represents the current supply of MicroAlgos in the system.
 */
export declare class SupplyResponse extends BaseModel {
    /**
     * Round
     */
    currentRound: number | bigint;
    /**
     * OnlineMoney
     */
    onlineMoney: number | bigint;
    /**
     * TotalMoney
     */
    totalMoney: number | bigint;
    /**
     * Creates a new `SupplyResponse` object.
     * @param currentRound - Round
     * @param onlineMoney - OnlineMoney
     * @param totalMoney - TotalMoney
     */
    constructor(currentRound: number | bigint, onlineMoney: number | bigint, totalMoney: number | bigint);
}
/**
 * Represents a key-value pair in an application store.
 */
export declare class TealKeyValue extends BaseModel {
    key: string;
    /**
     * Represents a TEAL value.
     */
    value: TealValue;
    /**
     * Creates a new `TealKeyValue` object.
     * @param key -
     * @param value - Represents a TEAL value.
     */
    constructor(key: string, value: TealValue);
}
/**
 * Represents a TEAL value.
 */
export declare class TealValue extends BaseModel {
    /**
     * (tt) value type.
     */
    type: number | bigint;
    /**
     * (tb) bytes value.
     */
    bytes: string;
    /**
     * (ui) uint value.
     */
    uint: number | bigint;
    /**
     * Creates a new `TealValue` object.
     * @param type - (tt) value type.
     * @param bytes - (tb) bytes value.
     * @param uint - (ui) uint value.
     */
    constructor(type: number | bigint, bytes: string, uint: number | bigint);
}
/**
 * TransactionParams contains the parameters that help a client construct a new
 * transaction.
 */
export declare class TransactionParametersResponse extends BaseModel {
    /**
     * ConsensusVersion indicates the consensus protocol version
     * as of LastRound.
     */
    consensusVersion: string;
    /**
     * Fee is the suggested transaction fee
     * Fee is in units of micro-Algos per byte.
     * Fee may fall to zero but transactions must still have a fee of
     * at least MinTxnFee for the current network protocol.
     */
    fee: number | bigint;
    /**
     * GenesisHash is the hash of the genesis block.
     */
    genesisHash: Uint8Array;
    /**
     * GenesisID is an ID listed in the genesis block.
     */
    genesisId: string;
    /**
     * LastRound indicates the last round seen
     */
    lastRound: number | bigint;
    /**
     * The minimum transaction fee (not per byte) required for the
     * txn to validate for the current network protocol.
     */
    minFee: number | bigint;
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
    constructor({ consensusVersion, fee, genesisHash, genesisId, lastRound, minFee, }: {
        consensusVersion: string;
        fee: number | bigint;
        genesisHash: string | Uint8Array;
        genesisId: string;
        lastRound: number | bigint;
        minFee: number | bigint;
    });
}
/**
 * algod version information.
 */
export declare class Version extends BaseModel {
    build: BuildVersion;
    genesisHashB64: Uint8Array;
    genesisId: string;
    versions: string[];
    /**
     * Creates a new `Version` object.
     * @param build -
     * @param genesisHashB64 -
     * @param genesisId -
     * @param versions -
     */
    constructor(build: BuildVersion, genesisHashB64: string | Uint8Array, genesisId: string, versions: string[]);
}
