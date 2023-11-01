import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '~/models/user.model';

@Injectable({  providedIn: 'root' })
export class UsersService {
    constructor(
        private http: HttpClient,
    ) {}

    public getCurrentUser(): Observable<IUser> {
        return this.http.get<IUser>('/api/users/current');
    }
}