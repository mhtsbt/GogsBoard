import { Component } from "@angular/core"

import { RepoService } from '../Services/RepoService';

@Component({
    selector: "repo-board",
    templateUrl: "./App/Components/RepoBoardComponent.html"
})
export class RepoBoardComponent {

    public repos;

    constructor(repoService: RepoService) {

        var ctrl = this;



    }

}