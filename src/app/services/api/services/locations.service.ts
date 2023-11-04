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

import { IInitLocation } from '../models/i-init-location';
import { ILocation } from '../models/i-location';


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

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<Array<ILocation>>> {

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
        return r as StrictHttpResponse<Array<ILocation>>;
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

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<Array<ILocation>> {

    return this.getLocationsList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ILocation>>) => r.body as Array<ILocation>)
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
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLocation$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: IInitLocation
  }): Observable<StrictHttpResponse<ILocation>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.CreateLocationPath, 'post');
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
        return r as StrictHttpResponse<ILocation>;
      })
    );
  }

  /**
   * Create new location
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createLocation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLocation(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: IInitLocation
  }): Observable<ILocation> {

    return this.createLocation$Response(params).pipe(
      map((r: StrictHttpResponse<ILocation>) => r.body as ILocation)
    );
  }

  /**
   * Path part for operation getLocationItem
   */
  static readonly GetLocationItemPath = '/locations/{locationId}';

  /**
   * Get location by its ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLocationItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocationItem$Response(params: {

    /**
     * Id of Location
     */
    locationId: string;
  }): Observable<StrictHttpResponse<ILocation>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.GetLocationItemPath, 'get');
    if (params) {
      rb.path('locationId', params.locationId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ILocation>;
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

    /**
     * Id of Location
     */
    locationId: string;
  }): Observable<ILocation> {

    return this.getLocationItem$Response(params).pipe(
      map((r: StrictHttpResponse<ILocation>) => r.body as ILocation)
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
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLocation$Response(params: {

    /**
     * Id of Location
     */
    locationId: string;
    body?: IInitLocation
  }): Observable<StrictHttpResponse<ILocation>> {

    const rb = new RequestBuilder(this.rootUrl, LocationsService.UpdateLocationPath, 'put');
    if (params) {
      rb.path('locationId', params.locationId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ILocation>;
      })
    );
  }

  /**
   * Update location
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateLocation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLocation(params: {

    /**
     * Id of Location
     */
    locationId: string;
    body?: IInitLocation
  }): Observable<ILocation> {

    return this.updateLocation$Response(params).pipe(
      map((r: StrictHttpResponse<ILocation>) => r.body as ILocation)
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

    /**
     * Id of Location
     */
    locationId: string;
  }): Observable<StrictHttpResponse<{
'deleted'?: boolean;
}>> {

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
        return r as StrictHttpResponse<{
        'deleted'?: boolean;
        }>;
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

    /**
     * Id of Location
     */
    locationId: string;
  }): Observable<{
'deleted'?: boolean;
}> {

    return this.deleteLocation$Response(params).pipe(
      map((r: StrictHttpResponse<{
'deleted'?: boolean;
}>) => r.body as {
'deleted'?: boolean;
})
    );
  }

}
