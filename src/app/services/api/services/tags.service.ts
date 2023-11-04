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

import { IDbObject } from '../models/i-db-object';
import { ITag } from '../models/i-tag';


/**
 * Project's tags management API
 */
@Injectable({
  providedIn: 'root',
})
export class TagsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProjectTags
   */
  static readonly GetProjectTagsPath = '/projects/{projectId}/tags';

  /**
   * Get project's tags list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjectTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectTags$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<Array<ITag>>> {

    const rb = new RequestBuilder(this.rootUrl, TagsService.GetProjectTagsPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ITag>>;
      })
    );
  }

  /**
   * Get project's tags list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjectTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectTags(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<Array<ITag>> {

    return this.getProjectTags$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ITag>>) => r.body as Array<ITag>)
    );
  }

  /**
   * Path part for operation getObjectTags
   */
  static readonly GetObjectTagsPath = '/dbobject/{objectId}/tags';

  /**
   * Get object's tags list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getObjectTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObjectTags$Response(params: {

    /**
     * Object ID
     */
    objectId: string;
  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, TagsService.GetObjectTagsPath, 'get');
    if (params) {
      rb.path('objectId', params.objectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Get object's tags list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getObjectTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObjectTags(params: {

    /**
     * Object ID
     */
    objectId: string;
  }): Observable<Array<string>> {

    return this.getObjectTags$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation searchObjectsByTags
   */
  static readonly SearchObjectsByTagsPath = '/projects/{projectId}/searchByTag';

  /**
   * Search objects by tag
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchObjectsByTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchObjectsByTags$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<Array<IDbObject>>> {

    const rb = new RequestBuilder(this.rootUrl, TagsService.SearchObjectsByTagsPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IDbObject>>;
      })
    );
  }

  /**
   * Search objects by tag
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `searchObjectsByTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchObjectsByTags(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<Array<IDbObject>> {

    return this.searchObjectsByTags$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IDbObject>>) => r.body as Array<IDbObject>)
    );
  }

}
