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
   * This method doesn't expect any request body.
   */
  updateTimespot$Response(params: {
    timespotId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimespotsService.UpdateTimespotPath, 'put');
    if (params) {
      rb.path('timespotId', params.timespotId, {});
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
   * Update timespot
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTimespot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTimespot(params: {
    timespotId: string;
  }): Observable<void> {

    return this.updateTimespot$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
    timespotId: string;
  }): Observable<StrictHttpResponse<void>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
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
    timespotId: string;
  }): Observable<void> {

    return this.deleteTimespot$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
   * This method doesn't expect any request body.
   */
  createTimespot$Response(params: {
    timelineId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimespotsService.CreateTimespotPath, 'post');
    if (params) {
      rb.path('timelineId', params.timelineId, {});
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
   * Create timespot
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTimespot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTimespot(params: {
    timelineId: string;
  }): Observable<void> {

    return this.createTimespot$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
