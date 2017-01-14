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
var RepoService_1 = require('../Services/RepoService');
var router_1 = require('@angular/router');
var RepoBoardComponent = (function () {
    function RepoBoardComponent(repoService, route) {
        this.repoService = repoService;
        this.route = route;
        this.backlogIssues = [];
        this.progressIssues = [];
        var ctrl = this;
        this.route.params.subscribe(function (params) {
            ctrl.owner = params['owner'];
            ctrl.repo = params['repo'];
        });
        ctrl.repoService.getIssues(ctrl.owner, ctrl.repo).subscribe(function (issues) {
            ctrl.backlogIssues = issues;
        });
    }
    RepoBoardComponent.prototype.receiveIssue = function (event, destination) {
        var ctrl = this;
        var issue = event.dragData;
        var backlogIndex = ctrl.backlogIssues.indexOf(issue);
        if (backlogIndex) {
            ctrl.backlogIssues.splice(backlogIndex, 1);
        }
        destination.push(issue);
    };
    RepoBoardComponent = __decorate([
        core_1.Component({
            selector: "repo-board",
            templateUrl: "./App/Components/RepoBoardComponent.html"
        }), 
        __metadata('design:paramtypes', [RepoService_1.RepoService, router_1.ActivatedRoute])
    ], RepoBoardComponent);
    return RepoBoardComponent;
}());
exports.RepoBoardComponent = RepoBoardComponent;
//# sourceMappingURL=RepoBoardComponent.js.map