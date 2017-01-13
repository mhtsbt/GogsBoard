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
var core_1 = require("@angular/core");
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var GogsBoardComponent_1 = require('./Components/GogsBoardComponent');
var RepoBoardComponent_1 = require('./Components/RepoBoardComponent');
var RepoListComponent_1 = require('./Components/RepoListComponent');
var RepoService_1 = require('./Services/RepoService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                    { path: '', component: RepoListComponent_1.RepoListComponent },
                    { path: 'repo/:id', component: RepoBoardComponent_1.RepoBoardComponent }
                ])],
            declarations: [GogsBoardComponent_1.GogsBoardComponent, RepoListComponent_1.RepoListComponent, RepoBoardComponent_1.RepoBoardComponent],
            bootstrap: [GogsBoardComponent_1.GogsBoardComponent],
            providers: [RepoService_1.RepoService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=AppModule.js.map