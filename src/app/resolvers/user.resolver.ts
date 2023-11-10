import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IServerUser, IUser } from '~/services/api/models';
import { UsersService } from '~/services/api/services';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<IServerUser> {

    constructor(
        private userService: UsersService,
        private router: Router,
    ) {}

    resolve(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<IServerUser> {
        return this.userService.getUser({ userId: 'current'})
            .pipe(
                catchError((err) => {
                    this.router.navigate(['/login']);
                    return throwError(() => err);
                })
            );
    }
}