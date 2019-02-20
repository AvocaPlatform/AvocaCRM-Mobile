import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthenticateModel} from './modules/users/authenticate.model';
import {UserModel} from './modules/users/user.model';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [],
    exports: [],
    providers: [
        AuthenticateModel,
        UserModel
    ]
})
export class AvocaModule {
    static forRoot() {
        return {
            ngModule: AvocaModule,
            providers: []
        };
    }
}
