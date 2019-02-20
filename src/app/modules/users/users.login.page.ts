import {Component, OnInit} from '@angular/core';
import {AuthenticateModel} from './authenticate.model';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'users.login.page.html'
})
export class UsersLoginPage implements OnInit {
    user: any = {};

    constructor(private _auth: AuthenticateModel,
                private _router: Router) {

    }

    ngOnInit(): void {

    }

    login() {
        this._auth.login(this.user.username, this.user.password).pipe(first()).subscribe(
            user => {
                //console.log(user);
                return this._router.navigate(['/']);
            },
            error => {
                console.log(error);
            }
        )
    }
}
