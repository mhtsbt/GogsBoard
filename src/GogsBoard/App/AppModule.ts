import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { GogsBoardComponent } from './Components/GogsBoardComponent';

import { RepoService } from './Services/RepoService';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [GogsBoardComponent],
    bootstrap: [GogsBoardComponent],
    providers: [RepoService]
})
export class AppModule { }