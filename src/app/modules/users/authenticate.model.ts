import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from '../../config/app.config';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticateModel {

    constructor(private _http: HttpClient) {

    }

    login(username: string, password: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json'
        });

        const body = {
            grant_type: 'password',
            client_id: AppConfig.crmClientId,
            client_secret: AppConfig.crmSecret,
            username: username,
            password: password,
            //scope: 'standard:create standard:read standard:update standard:delete standard:delete standard:relationship:create standard:relationship:read standard:relationship:update standard:relationship:delete'
        };

        const url = AppConfig.crmUrl + '/Api/access_token';
        return this._http.post<any>(url, body, {headers: headers}).pipe(
            map(token => {
                if (token && token.access_token) {
                    localStorage.setItem("currentUser", JSON.stringify(token));
                }

                return token;
            })
        );
    }
}
