import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '~/services/api/models';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
    public get user(): IUser {
        return this.activatedRoute.snapshot.data.user;
    }

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {}

}