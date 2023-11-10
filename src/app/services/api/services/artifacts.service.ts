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

import { IArtifact } from '../models/i-artifact';
import { IInitArtifact } from '../models/i-init-artifact';


/**
 * Project's artifacts management API
 */
@Injectable({
  providedIn: 'root',
})
export class ArtifactsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getArtifactsList
   */
  static readonly GetArtifactsListPath = '/projects/{projectId}/artifacts';

  /**
   * Get list of artifacts for particular project
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArtifactsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArtifactsList$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<Array<IArtifact>>> {

    const rb = new RequestBuilder(this.rootUrl, ArtifactsService.GetArtifactsListPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IArtifact>>;
      })
    );
  }

  /**
   * Get list of artifacts for particular project
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getArtifactsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArtifactsList(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<Array<IArtifact>> {

    return this.getArtifactsList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IArtifact>>) => r.body as Array<IArtifact>)
    );
  }

  /**
   * Path part for operation createArtifact
   */
  static readonly CreateArtifactPath = '/projects/{projectId}/artifacts';

  /**
   * Create new artifact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createArtifact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createArtifact$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: IInitArtifact
  }): Observable<StrictHttpResponse<IArtifact>> {

    const rb = new RequestBuilder(this.rootUrl, ArtifactsService.CreateArtifactPath, 'post');
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
        return r as StrictHttpResponse<IArtifact>;
      })
    );
  }

  /**
   * Create new artifact
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createArtifact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createArtifact(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: IInitArtifact
  }): Observable<IArtifact> {

    return this.createArtifact$Response(params).pipe(
      map((r: StrictHttpResponse<IArtifact>) => r.body as IArtifact)
    );
  }

  /**
   * Path part for operation getArtifact
   */
  static readonly GetArtifactPath = '/artifacts/{artifactId}';

  /**
   * Get artifact by its ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArtifact()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArtifact$Response(params: {

    /**
     * Artifact ID
     */
    artifactId: string;
  }): Observable<StrictHttpResponse<IArtifact>> {

    const rb = new RequestBuilder(this.rootUrl, ArtifactsService.GetArtifactPath, 'get');
    if (params) {
      rb.path('artifactId', params.artifactId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IArtifact>;
      })
    );
  }

  /**
   * Get artifact by its ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getArtifact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArtifact(params: {

    /**
     * Artifact ID
     */
    artifactId: string;
  }): Observable<IArtifact> {

    return this.getArtifact$Response(params).pipe(
      map((r: StrictHttpResponse<IArtifact>) => r.body as IArtifact)
    );
  }

  /**
   * Path part for operation updateArtifact
   */
  static readonly UpdateArtifactPath = '/artifacts/{artifactId}';

  /**
   * Update existing artifact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArtifact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArtifact$Response(params: {

    /**
     * Artifact ID
     */
    artifactId: string;
    body?: IInitArtifact
  }): Observable<StrictHttpResponse<IArtifact>> {

    const rb = new RequestBuilder(this.rootUrl, ArtifactsService.UpdateArtifactPath, 'put');
    if (params) {
      rb.path('artifactId', params.artifactId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IArtifact>;
      })
    );
  }

  /**
   * Update existing artifact
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateArtifact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArtifact(params: {

    /**
     * Artifact ID
     */
    artifactId: string;
    body?: IInitArtifact
  }): Observable<IArtifact> {

    return this.updateArtifact$Response(params).pipe(
      map((r: StrictHttpResponse<IArtifact>) => r.body as IArtifact)
    );
  }

  /**
   * Path part for operation deleteArtifact
   */
  static readonly DeleteArtifactPath = '/artifacts/{artifactId}';

  /**
   * Delete artifact by its ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArtifact()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArtifact$Response(params: {

    /**
     * Artifact ID
     */
    artifactId: string;
  }): Observable<StrictHttpResponse<{
'deleted'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ArtifactsService.DeleteArtifactPath, 'delete');
    if (params) {
      rb.path('artifactId', params.artifactId, {});
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
   * Delete artifact by its ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteArtifact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArtifact(params: {

    /**
     * Artifact ID
     */
    artifactId: string;
  }): Observable<{
'deleted'?: boolean;
}> {

    return this.deleteArtifact$Response(params).pipe(
      map((r: StrictHttpResponse<{
'deleted'?: boolean;
}>) => r.body as {
'deleted'?: boolean;
})
    );
  }

}
