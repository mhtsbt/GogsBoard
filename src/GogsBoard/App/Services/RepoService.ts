import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import {ConfigService} from './ConfigService';

@Injectable()
export class RepoService {

    constructor(private http: Http, private configService: ConfigService) {

    }

    public listRepo() {

        var service = this;

        return Observable.create(observable => {

            service.configService.getConfig().subscribe(config => {

                service.http.get(config.gogsurl + "/api/v1/user/repos?token=" + config.gogstoken).subscribe(res => {
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