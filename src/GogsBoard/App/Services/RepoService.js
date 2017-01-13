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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var RepoService = (function () {
    function RepoService(http) {
        this.http = http;
    }
    RepoService.prototype.listRepo = function () {
        var service = this;
        return Rx_1.Observable.create(function (observable) {
            service.http.get("https://git.blinkingled.be/api/v1/user/repos?token=" + config.token).subscribe(function (res) {
                observable.next(res.json());
            });
        });
    };
    RepoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RepoService);
    return RepoService;
}());
exports.RepoService = RepoService;
//# sourceMappingURL=RepoService.js.map