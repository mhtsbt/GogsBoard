import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

declare var config;

@Injectable()
export class ConfigService {

    constructor(private http: Http) {

    }

    public getConfig() {

        var service = this;

        return Observable.create(observable => {

            service.http.get("/api/config").subscribe(res => {
                observable.next(res.json());
            });
        });

    } 
}