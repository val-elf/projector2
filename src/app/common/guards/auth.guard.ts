import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '~/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthorizationService,
        private router: Router
    ) {}

    public canActivate(): boolean {
        console.log('AS', this.authService);
        if (this.authService.isAuthorized) {
            console.log('Is authorized!');
            return true;
        }
        this.router.navigate(['/', 'login']);
        return false;
    }
}