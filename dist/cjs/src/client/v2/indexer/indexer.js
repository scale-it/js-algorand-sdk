"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceClient_1 = __importDefault(require("../serviceClient"));
const makeHealthCheck_1 = __importDefault(require("./makeHealthCheck"));
const lookupAssetBalances_1 = __importDefault(require("./lookupAssetBalances"));
const lookupAssetTransactions_1 = __importDefault(require("./lookupAssetTransactions"));
const lookupAccountTransactions_1 = __importDefault(require("./lookupAccountTransactions"));
const lookupBlock_1 = __importDefault(require("./lookupBlock"));
const lookupTransactionByID_1 = __importDefault(require("./lookupTransactionByID"));
const lookupAccountByID_1 = __importDefault(require("./lookupAccountByID"));
const lookupAssetByID_1 = __importDefault(require("./lookupAssetByID"));
const lookupApplications_1 = __importDefault(require("./lookupApplications"));
const searchAccounts_1 = __importDefault(require("./searchAccounts"));
const searchForTransactions_1 = __importDefault(require("./searchForTransactions"));
const searchForAssets_1 = __importDefault(require("./searchForAssets"));
const searchForApplications_1 = __importDefault(require("./searchForApplications"));
class IndexerClient extends serviceClient_1.default {
    constructor(token, baseServer = 'http://127.0.0.1', port = 8080, headers = {}) {
        super('X-Indexer-API-Token', token, baseServer, port, headers);
    }
    /**
     * Returns the health object for the service.
     */
    makeHealthCheck() {
        return new makeHealthCheck_1.default(this.c, this.intDecoding);
    }
    /**
     * Returns holder balances for the given asset.
     * @param index - The asset ID to look up.
     */
    lookupAssetBalances(index) {
        return new lookupAssetBalances_1.default(this.c, this.intDecoding, index);
    }
    /**
     * Returns transactions relating to the given asset.
     * @param index - The asset ID to look up.
     */
    lookupAssetTransactions(index) {
        return new lookupAssetTransactions_1.default(this.c, this.intDecoding, index);
    }
    /**
     * Returns transactions relating to the given account.
     * @param account - The address of the account.
     */
    lookupAccountTransactions(account) {
        return new lookupAccountTransactions_1.default(this.c, this.intDecoding, account);
    }
    /**
     * Returns the block for the passed round.
     * @param round - The number of the round to look up.
     */
    lookupBlock(round) {
        return new lookupBlock_1.default(this.c, this.intDecoding, round);
    }
    /**
     * Returns information about the given transaction.
     * @param txID - The ID of the transaction to look up.
     */
    lookupTransactionByID(txID) {
        return new lookupTransactionByID_1.default(this.c, this.intDecoding, txID);
    }
    /**
     * Returns information about the given account.
     * @param account - The address of the account to look up.
     */
    lookupAccountByID(account) {
        return new lookupAccountByID_1.default(this.c, this.intDecoding, account);
    }
    /**
     * Returns information about the passed asset.
     * @param index - The ID of the asset ot look up.
     */
    lookupAssetByID(index) {
        return new lookupAssetByID_1.default(this.c, this.intDecoding, index);
    }
    /**
     * Returns information about the passed application.
     * @param index - The ID of the application to look up.
     */
    lookupApplications(index) {
        return new lookupApplications_1.default(this.c, this.intDecoding, index);
    }
    /**
     * Returns information about indexed accounts.
     */
    searchAccounts() {
        return new searchAccounts_1.default(this.c, this.intDecoding);
    }
    /**
     * Returns information about indexed transactions.
     */
    searchForTransactions() {
        return new searchForTransactions_1.default(this.c, this.intDecoding);
    }
    /**
     * Returns information about indexed assets.
     */
    searchForAssets() {
        return new searchForAssets_1.default(this.c, this.intDecoding);
    }
    /**
     * Returns information about indexed applications.
     */
    searchForApplications() {
        return new searchForApplications_1.default(this.c, this.intDecoding);
    }
}
exports.default = IndexerClient;
//# sourceMappingURL=indexer.js.map