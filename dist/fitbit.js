"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var rp = require('request-promise');
var FitbitClient = require('fitbit-client-oauth2');
var FitBitConnector = /** @class */ (function () {
    function FitBitConnector() {
        this.scope = [];
        this.client = new FitbitClient('22CH93', 'c2530f96f0c9beb2007505a6d8dd4f78');
        // this.redirect_uri = 'http://lcoalhost:3000/oauth2/0';
        // this.redirect_uri = 'http://192.168.15.178:5200/oauth2/0';
        this.redirect_uri = 'https://35.189.50.219/oauth2/0';
        this.scope = ['activity', 'profile', 'settings'];
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
    FitBitConnector.prototype.redirect = function () {
        var _this = this;
        return new rxjs_1.Observable(function (ob) {
            var url = _this.client.getAuthorizationUrl(_this.redirect_uri, _this.scope.join(' '));
            ob.next({ url: url });
            ob.complete();
        });
    };
    return FitBitConnector;
}());
exports.FitBitConnector = FitBitConnector;
//# sourceMappingURL=fitbit.js.map