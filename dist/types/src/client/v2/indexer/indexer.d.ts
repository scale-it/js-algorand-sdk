import ServiceClient from '../serviceClient';
import { CustomTokenHeader, IndexerTokenHeader } from '../../client';
import MakeHealthCheck from './makeHealthCheck';
import LookupAssetBalances from './lookupAssetBalances';
import LookupAssetTransactions from './lookupAssetTransactions';
import LookupAccountTransactions from './lookupAccountTransactions';
import LookupBlock from './lookupBlock';
import LookupTransactionByID from './lookupTransactionByID';
import LookupAccountByID from './lookupAccountByID';
import LookupAssetByID from './lookupAssetByID';
import LookupApplications from './lookupApplications';
import SearchAccounts from './searchAccounts';
import SearchForTransactions from './searchForTransactions';
import SearchForAssets from './searchForAssets';
import SearchForApplications from './searchForApplications';
export default class IndexerClient extends ServiceClient {
    constructor(token: string | IndexerTokenHeader | CustomTokenHeader, baseServer?: string, port?: string | number, headers?: {});
    /**
     * Returns the health object for the service.
     */
    makeHealthCheck(): MakeHealthCheck;
    /**
     * Returns holder balances for the given asset.
     * @param index - The asset ID to look up.
     */
    lookupAssetBalances(index: number): LookupAssetBalances;
    /**
     * Returns transactions relating to the given asset.
     * @param index - The asset ID to look up.
     */
    lookupAssetTransactions(index: number): LookupAssetTransactions;
    /**
     * Returns transactions relating to the given account.
     * @param account - The address of the account.
     */
    lookupAccountTransactions(account: string): LookupAccountTransactions;
    /**
     * Returns the block for the passed round.
     * @param round - The number of the round to look up.
     */
    lookupBlock(round: number): LookupBlock;
    /**
     * Returns information about the given transaction.
     * @param txID - The ID of the transaction to look up.
     */
    lookupTransactionByID(txID: string): LookupTransactionByID;
    /**
     * Returns information about the given account.
     * @param account - The address of the account to look up.
     */
    lookupAccountByID(account: string): LookupAccountByID;
    /**
     * Returns information about the passed asset.
     * @param index - The ID of the asset ot look up.
     */
    lookupAssetByID(index: number): LookupAssetByID;
    /**
     * Returns information about the passed application.
     * @param index - The ID of the application to look up.
     */
    lookupApplications(index: number): LookupApplications;
    /**
     * Returns information about indexed accounts.
     */
    searchAccounts(): SearchAccounts;
    /**
     * Returns information about indexed transactions.
     */
    searchForTransactions(): SearchForTransactions;
    /**
     * Returns information about indexed assets.
     */
    searchForAssets(): SearchForAssets;
    /**
     * Returns information about indexed applications.
     */
    searchForApplications(): SearchForApplications;
}
