import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {UsersLoginPage} from './users.login.page';
import {UsersListPage} from './users.list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: UsersListPage
            },
            {
                path: 'login',
                component: UsersLoginPage
            }
        ])
    ],
    declarations: [
        UsersLoginPage,
        UsersListPage
    ]
})
export class UsersModule {

}
