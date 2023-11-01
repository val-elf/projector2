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



/**
 * Project's dbobjects management API
 */
@Injectable({
  providedIn: 'root',
})
export class DbObjectsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getObject
   */
  static readonly GetObjectPath = '/dbobjects/{objectId}';

  /**
   * Get full information about database object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getObject()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObject$Response(params: {
    objectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DbObjectsService.GetObjectPath, 'get');
    if (params) {
      rb.path('objectId', params.objectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Get full information about database object
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getObject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObject(params: {
    objectId: string;
  }): Observable<void> {

    return this.getObject$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getObjectPreviewByType
   */
  static readonly GetObjectPreviewByTypePath = '/dbobjects/{objectId}/preview/{type}';

  /**
   * Get preview image of database object by its type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getObjectPreviewByType()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObjectPreviewByType$Response(params: {
    objectId: string;
    type: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DbObjectsService.GetObjectPreviewByTypePath, 'get');
    if (params) {
      rb.path('objectId', params.objectId, {});
      rb.path('type', params.type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Get preview image of database object by its type
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getObjectPreviewByType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObjectPreviewByType(params: {
    objectId: string;
    type: string;
  }): Observable<void> {

    return this.getObjectPreviewByType$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getObjectPreview
   */
  static readonly GetObjectPreviewPath = '/dbobjects/{objectId}/preview';

  /**
   * Get preview image of database object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getObjectPreview()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObjectPreview$Response(params: {
    objectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DbObjectsService.GetObjectPreviewPath, 'get');
    if (params) {
      rb.path('objectId', params.objectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Get preview image of database object
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getObjectPreview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getObjectPreview(params: {
    objectId: string;
  }): Observable<void> {

    return this.getObjectPreview$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
