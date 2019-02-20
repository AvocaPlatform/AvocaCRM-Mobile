import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../config/app.config';

@Injectable()
export class UserModel {

    constructor(private _http: HttpClient) {

    }

    getList() {
        const url = AppConfig.crmUrl + '/Api/V8/module/Users';
        return this._http.get<any>(url);
    }
}
