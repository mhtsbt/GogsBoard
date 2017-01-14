import { Component } from "@angular/core"

import { RepoService } from '../Services/RepoService';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "repo-board",
    templateUrl: "./App/Components/RepoBoardComponent.html"
})
export class RepoBoardComponent {

    public backlogIssues = [];
    public progressIssues = [];

    public owner;
    public repo;

    constructor(private repoService: RepoService, private route: ActivatedRoute) {

        var ctrl = this;

        this.route.params.subscribe(params => {
            ctrl.owner = params['owner'];
            ctrl.repo = params['repo'];
        });

        ctrl.repoService.getIssues(ctrl.owner, ctrl.repo).subscribe(function (issues) {
            ctrl.backlogIssues = issues;
        });

    }

    public receiveIssue(event, destination) {

        var ctrl = this;
        var issue = event.dragData;

        var backlogIndex = ctrl.backlogIssues.indexOf(issue);

        if (backlogIndex) {
            ctrl.backlogIssues.splice(backlogIndex, 1);
        }

        destination.push(issue);

    }


}
