import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';

import { GogsBoardComponent } from './Components/GogsBoardComponent';
import { RepoBoardComponent } from './Components/RepoBoardComponent';
import { RepoListComponent } from './Components/RepoListComponent';
import { IssueComponent } from './Components/IssueComponent';

import { LabelService } from './Services/LabelService';
import { RepoService } from './Services/RepoService';
import { ConfigService } from './Services/ConfigService';

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot([
        { path: '', component: RepoListComponent },
        { path: 'repo/:owner/:repo', component: RepoBoardComponent }
    ]), DndModule.forRoot()],
    declarations: [GogsBoardComponent, RepoListComponent, RepoBoardComponent, IssueComponent],
    bootstrap: [GogsBoardComponent],
    providers: [RepoService,LabelService, ConfigService]
})
export class AppModule { }