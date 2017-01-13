import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

declare var config;

@Injectable()
export class RepoService {

    constructor(private http: Http) {

    }

    public listRepo() {

        var service = this;

        return Observable.create(observable => {

            service.http.get("https://git.blinkingled.be/api/v1/user/repos?token=" + config.token).subscribe(res => {
                observable.next(res.json());
            });
        });

    }

}