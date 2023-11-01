import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from '~/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthorizationService,
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (this.authService.isAuthorized) {
            req = req.clone({
                headers: req.headers.set('Authorization', this.authService.token),
            });
        }
        return next.handle(req).pipe(
            catchError((error) => {
                switch(error.status) {
                    case 500:
                        break;
                    case 403:
                        this.authService.logout();
                        break;
                }
                return throwError(() => error);
            })
        );
    }
}