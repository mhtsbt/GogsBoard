import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { ConfigService } from './ConfigService';

@Injectable()
export class LabelService {

    constructor(private http: Http, private configService: ConfigService) {

    }

    public getLabelsForRepo(username: string, reponame: string) {

        var service = this;

        return Observable.create(observable => {

            service.configService.getConfig().subscribe(config => {

                service.http.get(config.gogsurl + "/api/v1/repos/" + username + "/" + reponame + "/labels?token=" + config.gogstoken).subscribe(res => {
                    observable.next(res.json());
                });
            });
        });

    }

    public addLabelToIssue(username: string, reponame: string, issueIndex: number, labelId: number) {

        var service = this;

        var labels = {labels: [labelId]};

        return Observable.create(observable => {

            service.configService.getConfig().subscribe(config => {

                service.http.post(config.gogsurl + "/api/v1/repos/" + username + "/" + reponame + "/issues/"+issueIndex+"/labels?token=" + config.gogstoken,labels).subscribe(res => {
                    observable.next(res.json());
                });
            });
        });

    }

    public getIssues(owner: string, repo: string) {

        var service = this;

        return Observable.create(observable => {

            service.configService.getConfig().subscribe(config => {

                service.http.get(config.gogsurl + "/api/v1/repos/" + owner + "/" + repo + "/issues?token=" + config.gogstoken).subscribe(res => {
                    observable.next(res.json());
                });

            });

        });

    }

}