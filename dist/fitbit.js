"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var rp = require('request-promise');
var FitbitClient = require('fitbit-client-oauth2');
var FitBitConnector = /** @class */ (function () {
    function FitBitConnector() {
        this.scope = [];
        this.client = new FitbitClient('22CGY6', '3e94747028c020bece22aa395baac816');
        this.redirect_uri = 'http://localhost:3000/oauth_callback';
        this.scope = ['activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight'];
    }
    FitBitConnector.prototype.auth = function (code) {
        var _this = this;
        return new rxjs_1.Observable(function (ob) {
            _this.client.getToken(code, _this.redirect_uri)
                .then(function (token) {
                // ... save your token on db or session... 
                ob.next(token);
                ob.complete();
            })
                .catch(function (err) {
                // something went wrong.
                ob.error(err);
                ob.complete();
            });
        });
    };
    FitBitConnector.prototype.refresh = function (tokens) {
        var _this = this;
        return new rxjs_1.Observable(function (ob) {
            _this.client.refreshAccessToken(tokens)
                .then(function (token) {
                // ... save your token on db or session... 
                ob.next(token);
                ob.complete();
            })
                .catch(function (err) {
                // something went wrong.
                ob.error(err);
                ob.complete();
            });
        });
    };
    return FitBitConnector;
}());
exports.FitBitConnector = FitBitConnector;
//# sourceMappingURL=fitbit.js.map