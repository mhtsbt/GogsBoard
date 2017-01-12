import { Component } from "@angular/core"

import { RepoService } from '../Services/RepoService';

@Component({
    selector: "gogs-board",
    template: "test"
})
export class GogsBoardComponent {

    public repos;

    constructor(repoService: RepoService) {

        repoService.listRepo().subscribe(function (repos) {

            console.log(repos);
        });

    }

}