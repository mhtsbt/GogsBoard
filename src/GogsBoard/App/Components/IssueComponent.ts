import { Component, } from "@angular/core"

@Component({
    selector: "issue",
    templateUrl: "./App/Components/IssueComponent.html",
    inputs: ["issueData"]
})
export class IssueComponent {

    public issueData;

    constructor() {

        

    }

    ngOnInit() {

        console.log(this.issueData);
    }

}