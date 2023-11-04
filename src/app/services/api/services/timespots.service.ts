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

import { IInitTimespot } from '../models/i-init-timespot';
import { ITimespot } from '../models/i-timespot';


/**
 * Timespots management API
 */
@Injectable({
  providedIn: 'root',
})
export class TimespotsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateTimespot
   */
  static readonly UpdateTimespotPath = '/timespots/{timespotId}';

  /**
   * Update timespot
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTimespot()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTimespot$Response(params: {

    /**
     * Timespot ID
     */
    timespotId: string;
    body?: IInitTimespot
  }): Observable<StrictHttpResponse<ITimespot>> {

    const rb = new RequestBuilder(this.rootUrl, TimespotsService.UpdateTimespotPath, 'put');
    if (params) {
      rb.path('timespotId', params.timespotId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ITimespot>;
      })
    );
  }

  /**
   * Update timespot
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTimespot$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTimespot(params: {

    /**
     * Timespot ID
     */
    timespotId: string;
    body?: IInitTimespot
  }): Observable<ITimespot> {

    return this.updateTimespot$Response(params).pipe(
      map((r: StrictHttpResponse<ITimespot>) => r.body as ITimespot)
    );
  }

  /**
   * Path part for operation deleteTimespot
   */
  static readonly DeleteTimespotPath = '/timespots/{timespotId}';

  /**
   * Get timespots
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTimespot()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTimespot$Response(params: {

    /**
     * Timespot ID
     */
    timespotId: string;
  }): Observable<StrictHttpResponse<{
'delete'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, TimespotsService.DeleteTimespotPath, 'delete');
    if (params) {
      rb.path('timespotId', params.timespotId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'delete'?: boolean;
        }>;
      })
    );
  }

  /**
   * Get timespots
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTimespot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTimespot(params: {

    /**
     * Timespot ID
     */
    timespotId: string;
  }): Observable<{
'delete'?: boolean;
}> {

    return this.deleteTimespot$Response(params).pipe(
      map((r: StrictHttpResponse<{
'delete'?: boolean;
}>) => r.body as {
'delete'?: boolean;
})
    );
  }

  /**
   * Path part for operation createTimespot
   */
  static readonly CreateTimespotPath = '/timeline/{timelineId}/timespots';

  /**
   * Create timespot
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTimespot()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTimespot$Response(params: {

    /**
     * Timeline ID
     */
    timelineId: string;
    body?: IInitTimespot
  }): Observable<StrictHttpResponse<ITimespot>> {

    const rb = new RequestBuilder(this.rootUrl, TimespotsService.CreateTimespotPath, 'post');
    if (params) {
      rb.path('timelineId', params.timelineId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ITimespot>;
      })
    );
  }

  /**
   * Create timespot
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTimespot$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTimespot(params: {

    /**
     * Timeline ID
     */
    timelineId: string;
    body?: IInitTimespot
  }): Observable<ITimespot> {

    return this.createTimespot$Response(params).pipe(
      map((r: StrictHttpResponse<ITimespot>) => r.body as ITimespot)
    );
  }

}
