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
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.handle = function (req, res, next) {
            res.send({
                status: 200
            });
        };
        User = __decorate([
            grapple_1.httpGet('/user'),
            __metadata("design:paramtypes", [])
        ], User);
        return User;
    }());
    Crossfit.User = User;
})(Crossfit || (Crossfit = {}));
grapple_1.grapple([Crossfit]);
//# sourceMappingURL=index.js.map