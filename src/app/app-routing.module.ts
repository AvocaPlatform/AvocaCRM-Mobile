import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './modules/list/list.module#ListPageModule'
    },
    {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
