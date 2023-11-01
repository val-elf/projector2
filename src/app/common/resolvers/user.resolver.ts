import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '~/models/user.model';
import { UsersService } from '~/services/users.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<IUser> {

    constructor(
        private userService: UsersService
    ) {}

    resolve(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<IUser> {
        return this.userService.getCurrentUser();
    }
}