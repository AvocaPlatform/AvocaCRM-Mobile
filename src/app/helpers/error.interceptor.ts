import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {first, catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticateModel} from '../modules/users/authenticate.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _auth: AuthenticateModel,
                private _router: Router) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // Refresh token
                let currentUser = JSON.parse(localStorage.getItem("currentUser"));

                if (currentUser && currentUser.refresh_token) {
                    this._auth.refresh(currentUser.refresh_token).pipe(first()).subscribe(
                        token => {
                            location.reload(true);
                        },
                        error => {
                            // auto logout if 401 response returned from api
                            this._auth.logout();

                            if (this._router.url.indexOf('/users/login') < 0) {
                                this._router.navigate(['/users/login'], {queryParams: {r: this._router.url}});
                            }
                        }
                    );
                } else {
                    // auto logout if 401 response returned from api
                    this._auth.logout();

                    if (this._router.url.indexOf('/users/login') < 0) {
                        this._router.navigate(['/users/login'], {queryParams: {r: this._router.url}});
                    }
                }
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }

}
