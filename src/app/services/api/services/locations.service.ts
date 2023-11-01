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
 * Project's locations management API
 */
@Injectable({
  providedIn: 'root',
})
export class LocationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getLocationsList
   */
  static readonly GetLocationsListPath = '/projects/{projectId}/locations';

  /**
   * Get list of locations
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLocationsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocationsList$Response(params: {
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.GetLocationsListPath, 'get');
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
   * Get list of locations
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLocationsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocationsList(params: {
    projectId: string;
  }): Observable<void> {

    return this.getLocationsList$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createLocation
   */
  static readonly CreateLocationPath = '/projects/{projectId}/locations';

  /**
   * Create new location
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createLocation()` instead.
   *
   * This method doesn't expect any request body.
   */
  createLocation$Response(params: {
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.CreateLocationPath, 'post');
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
   * Create new location
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createLocation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createLocation(params: {
    projectId: string;
  }): Observable<void> {

    return this.createLocation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getLocationItem
   */
  static readonly GetLocationItemPath = '/locations/{location}';

  /**
   * Get location by its ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLocationItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocationItem$Response(params: {
    location: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.GetLocationItemPath, 'get');
    if (params) {
      rb.path('location', params.location, {});
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
   * Get location by its ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getLocationItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocationItem(params: {
    location: string;
  }): Observable<void> {

    return this.getLocationItem$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateLocation
   */
  static readonly UpdateLocationPath = '/locations/{locationId}';

  /**
   * Update location
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLocation()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateLocation$Response(params: {
    locationId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.UpdateLocationPath, 'put');
    if (params) {
      rb.path('locationId', params.locationId, {});
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
   * Update location
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateLocation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateLocation(params: {
    locationId: string;
  }): Observable<void> {

    return this.updateLocation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteLocation
   */
  static readonly DeleteLocationPath = '/locations/{locationId}';

  /**
   * Delete location
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLocation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLocation$Response(params: {
    locationId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.DeleteLocationPath, 'delete');
    if (params) {
      rb.path('locationId', params.locationId, {});
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
   * Delete location
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteLocation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLocation(params: {
    locationId: string;
  }): Observable<void> {

    return this.deleteLocation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
