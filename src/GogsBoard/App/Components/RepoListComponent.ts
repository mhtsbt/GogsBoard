import { Component } from "@angular/core"

import { RepoService } from '../Services/RepoService';

@Component({
    selector: "repo-list",
    templateUrl: "./App/Components/RepoListComponent.html"
})
export class RepoListComponent {

    public repos;

    constructor(repoService: RepoService) {

        var ctrl = this;

        repoService.listRepo().subscribe(function (repos) {
            ctrl.repos = repos;
            console.log(repos);
        });

    }

}