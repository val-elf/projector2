/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IServerUser } from '../models/i-server-user';
import { IUser } from '../models/i-user';
import { TObjectId } from '../models/t-object-id';


/**
 * Users management API
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUsers
   */
  static readonly GetUsersPath = '/users';

  /**
   * Get list of users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Response(params?: {
  }): Observable<StrictHttpResponse<Array<IUser>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IUser>>;
      })
    );
  }

  /**
   * Get list of users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers(params?: {
  }): Observable<Array<IUser>> {

    return this.getUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IUser>>) => r.body as Array<IUser>)
    );
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/users';

  /**
   * Create new user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params?: {
    body?: {
'login'?: string;
'password'?: string;
}
  }): Observable<StrictHttpResponse<IUser>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IUser>;
      })
    );
  }

  /**
   * Create new user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params?: {
    body?: {
'login'?: string;
'password'?: string;
}
  }): Observable<IUser> {

    return this.createUser$Response(params).pipe(
      map((r: StrictHttpResponse<IUser>) => r.body as IUser)
    );
  }

  /**
   * Path part for operation getUser
   */
  static readonly GetUserPath = '/users/{userId}';

  /**
   * Get single user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params: {

    /**
     * User ID
     */
    userId: string;
  }): Observable<StrictHttpResponse<(IUser | IServerUser)>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(IUser | IServerUser)>;
      })
    );
  }

  /**
   * Get single user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params: {

    /**
     * User ID
     */
    userId: string;
  }): Observable<(IUser | IServerUser)> {

    return this.getUser$Response(params).pipe(
      map((r: StrictHttpResponse<(IUser | IServerUser)>) => r.body as (IUser | IServerUser))
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/users/{userId}';

  /**
   * Delete particular user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: {

    /**
     * User ID
     */
    userId: string;
    body?: IUser
  }): Observable<StrictHttpResponse<IUser>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UpdateUserPath, 'delete');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IUser>;
      })
    );
  }

  /**
   * Delete particular user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: {

    /**
     * User ID
     */
    userId: string;
    body?: IUser
  }): Observable<IUser> {

    return this.updateUser$Response(params).pipe(
      map((r: StrictHttpResponse<IUser>) => r.body as IUser)
    );
  }

  /**
   * Path part for operation loginUser
   */
  static readonly LoginUserPath = '/login';

  /**
   * Login
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser$Response(params?: {
    body?: {
'login'?: string;
'password'?: string;
}
  }): Observable<StrictHttpResponse<{
'sessionToken'?: TObjectId;
'userId'?: TObjectId;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.LoginUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'sessionToken'?: TObjectId;
        'userId'?: TObjectId;
        }>;
      })
    );
  }

  /**
   * Login
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser(params?: {
    body?: {
'login'?: string;
'password'?: string;
}
  }): Observable<{
'sessionToken'?: TObjectId;
'userId'?: TObjectId;
}> {

    return this.loginUser$Response(params).pipe(
      map((r: StrictHttpResponse<{
'sessionToken'?: TObjectId;
'userId'?: TObjectId;
}>) => r.body as {
'sessionToken'?: TObjectId;
'userId'?: TObjectId;
})
    );
  }

  /**
   * Path part for operation logoutUser
   */
  static readonly LogoutUserPath = '/logout';

  /**
   * Logout
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logoutUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutUser$Response(params?: {
  }): Observable<StrictHttpResponse<{
'logout'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.LogoutUserPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'logout'?: boolean;
        }>;
      })
    );
  }

  /**
   * Logout
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logoutUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutUser(params?: {
  }): Observable<{
'logout'?: boolean;
}> {

    return this.logoutUser$Response(params).pipe(
      map((r: StrictHttpResponse<{
'logout'?: boolean;
}>) => r.body as {
'logout'?: boolean;
})
    );
  }

}
