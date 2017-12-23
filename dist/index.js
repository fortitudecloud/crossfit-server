"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var grapple_1 = require("grapple");
var fitbit_1 = require("./fitbit");
var Crossfit;
(function (Crossfit) {
    var Apiware = /** @class */ (function () {
        function Apiware() {
        }
        Apiware.prototype.handle = function (req, res, next) {
            console.log('mongo rest api called');
        };
        Apiware = __decorate([
            grapple_1.apiware(),
            __metadata("design:paramtypes", [])
        ], Apiware);
        return Apiware;
    }());
    Crossfit.Apiware = Apiware;
    var FitbitAuth = /** @class */ (function () {
        function FitbitAuth() {
            this.connector = new fitbit_1.FitBitConnector();
        }
        FitbitAuth.prototype.handle = function (req, res, next) {
            this.connector.auth(req.params.code).subscribe(function (t) {
                res.send(t);
            }, function (err) {
                res.send(500);
            });
        };
        FitbitAuth = __decorate([
            grapple_1.httpGet('/fitbit/auth'),
            __metadata("design:paramtypes", [])
        ], FitbitAuth);
        return FitbitAuth;
    }());
    Crossfit.FitbitAuth = FitbitAuth;
    var FitbitRefresh = /** @class */ (function () {
        function FitbitRefresh() {
            this.connector = new fitbit_1.FitBitConnector();
        }
        FitbitRefresh.prototype.handle = function (req, res, next) {
            this.connector.refresh(req.body).subscribe(function (t) {
                res.send(t);
            }, function (err) {
                res.send(500);
            });
        };
        FitbitRefresh = __decorate([
            grapple_1.httpPost('/fitbit/refresh'),
            __metadata("design:paramtypes", [])
        ], FitbitRefresh);
        return FitbitRefresh;
    }());
    Crossfit.FitbitRefresh = FitbitRefresh;
})(Crossfit || (Crossfit = {}));
grapple_1.grapple([Crossfit]);
//# sourceMappingURL=index.js.map