import { Component } from "@angular/core"

import { RepoService } from '../Services/RepoService';

@Component({
    selector: "gogs-board",
    templateUrl: "./App/Components/RepoList.html"
})
export class GogsBoardComponent {

    public repos;

    constructor(repoService: RepoService) {

        var ctrl = this;

        repoService.listRepo().subscribe(function (repos) {
            ctrl.repos = repos;
            console.log(repos);
        });

    }

}