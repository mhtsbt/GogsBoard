import { Component } from "@angular/core"

import { RepoService } from '../Services/RepoService';
import { LabelService } from '../Services/LabelService';

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

    constructor(private repoService: RepoService, private labelService: LabelService, private route: ActivatedRoute) {

        var ctrl = this;

        this.route.params.subscribe(params => {

            ctrl.owner = params['owner'];
            ctrl.repo = params['repo'];

            ctrl.repoService.getIssues(ctrl.owner, ctrl.repo).subscribe(function (issues) {
                ctrl.backlogIssues = issues;
            });

            this.labelService.getLabelsForRepo(this.owner,this.repo).subscribe((res) => { console.log(res); });

        });

    }

    public receiveIssue(event, destination) {

        var ctrl = this;
        var issue = event.dragData;

        var backlogIndex = ctrl.backlogIssues.indexOf(issue);

        if (backlogIndex !== -1) {
            ctrl.backlogIssues.splice(backlogIndex, 1);
        }

        var currentFlowIndex = ctrl.progressIssues.indexOf(issue);

        if (currentFlowIndex === -1) {
            destination.push(issue);

            // push to api
            this.labelService.addLabelToIssue(this.owner,this.repo,issue.number,5).subscribe(() => {alert("ok!"); });

        }

    }


}
