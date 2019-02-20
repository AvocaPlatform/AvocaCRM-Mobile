import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';

@Component({
    selector: 'app-list',
    templateUrl: 'users.list.page.html'
})
export class UsersListPage implements OnInit {
    private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];

    constructor(private _user: UserModel) {

    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._user.getList().subscribe(
            res => {
                for (let user of res.data) {
                    this.items.push({
                        title: user.attributes.full_name,
                        note: user.attributes.user_name,
                        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
                    });
                }
            }
        );
    }
}
