import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/vnd.api+json',
                    'Accept': 'application/vnd.api+json',
                    'Authorization': `Bearer ${currentUser.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}
