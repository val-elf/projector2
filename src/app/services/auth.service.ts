import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ISession } from '~/models/session.model';

@Injectable()
export class AuthorizationService {

    public token$: BehaviorSubject<string | null> = new BehaviorSubject<string|null>(null);

    public get token(): string {
        return this.token$.value;
    }

    public get isAuthorized(): boolean {
        return !!this.token;
    }

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        const storedToken = window.localStorage.getItem('token');
        if (storedToken) {
            this.token$.next(storedToken);
        }

        this.token$.subscribe(newToken => {
            console.log('New token is ', newToken);;
            if (newToken) {
                window.localStorage.setItem('token', newToken);
            } else {
                window.localStorage.removeItem('token');
                this.router.navigate(['/', 'login']);
            }
        });
    }

    private getSessionByToken(token: string): Observable<boolean> {
        return this.http.post<boolean>(`/api/refreshToken`, { token });
    }

    public logout() {
        this.token$.next(null);
    }

    public login(login: string, password: string): Observable<ISession> {
        return this.http.post<HttpResponse<ISession>>('/api/login',
            { login, password },
            {
                observe: 'response',
                responseType: 'json'
            })
        .pipe(
            map(result => {
                console.log('Result is ', result.body);
                return result.body as any as ISession;
            }),
            tap(userInfo => {
                const sessionId = userInfo.sessionToken;
                console.log('User info ', userInfo, sessionId);
                this.token$.next(sessionId);
            })
        );
    }
}