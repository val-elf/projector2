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
        if (this.authService.isAuthorized) {
            return true;
        }
        this.router.navigate(['/', 'login']);
        return false;
    }
}