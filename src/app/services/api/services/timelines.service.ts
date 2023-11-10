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

import { ITimeline } from '../models/i-timeline';


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

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<Array<ITimeline>>> {

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
        return r as StrictHttpResponse<Array<ITimeline>>;
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

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<Array<ITimeline>> {

    return this.getProjectTimelines$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ITimeline>>) => r.body as Array<ITimeline>)
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
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTimeline$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: ITimeline
  }): Observable<StrictHttpResponse<ITimeline>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.CreateTimelinePath, 'post');
    if (params) {
      rb.path('projectId', params.projectId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ITimeline>;
      })
    );
  }

  /**
   * Create new timeline
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTimeline$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTimeline(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: ITimeline
  }): Observable<ITimeline> {

    return this.createTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<ITimeline>) => r.body as ITimeline)
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
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTimeline$Response(params?: {
    body?: ITimeline
  }): Observable<StrictHttpResponse<(ITimeline | Array<ITimeline>)>> {

    const rb = new RequestBuilder(this.rootUrl, TimelinesService.UpdateTimelinePath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(ITimeline | Array<ITimeline>)>;
      })
    );
  }

  /**
   * Update timeline
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTimeline$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTimeline(params?: {
    body?: ITimeline
  }): Observable<(ITimeline | Array<ITimeline>)> {

    return this.updateTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<(ITimeline | Array<ITimeline>)>) => r.body as (ITimeline | Array<ITimeline>))
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

    /**
     * Timeline ID
     */
    timelineId: string;
  }): Observable<StrictHttpResponse<ITimeline>> {

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
        return r as StrictHttpResponse<ITimeline>;
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

    /**
     * Timeline ID
     */
    timelineId: string;
  }): Observable<ITimeline> {

    return this.getTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<ITimeline>) => r.body as ITimeline)
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

    /**
     * Timeline ID
     */
    timelineId: string;
  }): Observable<StrictHttpResponse<{
'delete'?: boolean;
}>> {

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
        return r as StrictHttpResponse<{
        'delete'?: boolean;
        }>;
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

    /**
     * Timeline ID
     */
    timelineId: string;
  }): Observable<{
'delete'?: boolean;
}> {

    return this.deleteTimeline$Response(params).pipe(
      map((r: StrictHttpResponse<{
'delete'?: boolean;
}>) => r.body as {
'delete'?: boolean;
})
    );
  }

}
