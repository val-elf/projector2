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
 * Project's timelines management API
 */
@Injectable({
  providedIn: 'root',
})
export class TimelinesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProjectTimelines
   */
  static readonly GetProjectTimelinesPath = '/projects/{projectId}/timelines';

  /**
   * Get list of timelines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjectTimelines()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectTimelines$Response(params: {
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.GetProjectTimelinesPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
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
   * Get list of timelines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjectTimelines$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectTimelines(params: {
    projectId: string;
  }): Observable<void> {

    return this.getProjectTimelines$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createTimeline
   */
  static readonly CreateTimelinePath = '/projects/{projectId}/timelines';

  /**
   * Create new timeline
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTimeline()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTimeline$Response(params: {
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.CreateTimelinePath, 'post');
    if (params) {
      rb.path('projectId', params.projectId, {});
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
   * Create new timeline
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTimeline$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createTimeline(params: {
    projectId: string;
  }): Observable<void> {

    return this.createTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateTimeline
   */
  static readonly UpdateTimelinePath = '/timelines';

  /**
   * Update timeline
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTimeline()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTimeline$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.UpdateTimelinePath, 'put');
    if (params) {
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
   * Update timeline
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTimeline$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTimeline(params?: {
  }): Observable<void> {

    return this.updateTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTimeline
   */
  static readonly GetTimelinePath = '/timelines/{timelineId}';

  /**
   * Get timeline
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeline()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeline$Response(params: {
    timelineId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.GetTimelinePath, 'get');
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
   * Get timeline
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeline$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeline(params: {
    timelineId: string;
  }): Observable<void> {

    return this.getTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTimeline
   */
  static readonly DeleteTimelinePath = '/timelines/{timelineId}';

  /**
   * Delete timeline
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTimeline()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTimeline$Response(params: {
    timelineId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.DeleteTimelinePath, 'delete');
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
   * Delete timeline
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTimeline$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTimeline(params: {
    timelineId: string;
  }): Observable<void> {

    return this.deleteTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
