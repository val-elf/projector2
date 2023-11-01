import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDbObject } from '~/models/object.model';

@Injectable({ providedIn: 'root' })
export class ObjectsService {
    constructor(private http: HttpClient) {}

    public getObject(objectId: string): Observable<IDbObject> {
        return this.http.get<IDbObject>(`/api/dbobjects/${objectId}`);
    }

    public getObjectPreview(objectId: string, type?: string): Observable<string> {
        return this.http.get(`/api/dbobjects/${objectId}/preview${type ? '/' + type : ''}`, { responseType: 'text', observe: 'body' });
    }

    public getObjects(filter: any, ownerId: string): Observable<IDbObject[]> {
        return this.http.post<IDbObject[]>(`/api/dbobjects/byOwner/${ownerId}`, filter);
    }
}