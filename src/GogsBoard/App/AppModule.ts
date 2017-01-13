import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { GogsBoardComponent } from './Components/GogsBoardComponent';
import { RepoBoardComponent } from './Components/RepoBoardComponent';
import { RepoListComponent } from './Components/RepoListComponent';

import { RepoService } from './Services/RepoService';

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot([
        { path: '', component: RepoListComponent },
        { path: 'repo/:id', component: RepoBoardComponent }
    ])],
    declarations: [GogsBoardComponent, RepoListComponent, RepoBoardComponent],
    bootstrap: [GogsBoardComponent],
    providers: [RepoService]
})
export class AppModule { }