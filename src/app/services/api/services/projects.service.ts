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

import { IInitProject } from '../models/i-init-project';
import { IProject } from '../models/i-project';


/**
 * Projects management API
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProjects
   */
  static readonly GetProjectsPath = '/projects';

  /**
   * Get list of projects
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjects()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjects$Response(params?: {
  }): Observable<StrictHttpResponse<{
'result'?: Array<IProject>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectsService.GetProjectsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'result'?: Array<IProject>;
        'options'?: {
        [key: string]: (string | number | boolean | null | undefined);
        };
        }>;
      })
    );
  }

  /**
   * Get list of projects
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjects$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjects(params?: {
  }): Observable<{
'result'?: Array<IProject>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}> {

    return this.getProjects$Response(params).pipe(
      map((r: StrictHttpResponse<{
'result'?: Array<IProject>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}>) => r.body as {
'result'?: Array<IProject>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
})
    );
  }

  /**
   * Path part for operation createProject
   */
  static readonly CreateProjectPath = '/projects';

  /**
   * Create new project
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProject$Response(params?: {
    body?: IInitProject
  }): Observable<StrictHttpResponse<IProject>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectsService.CreateProjectPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IProject>;
      })
    );
  }

  /**
   * Create new project
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProject(params?: {
    body?: IInitProject
  }): Observable<IProject> {

    return this.createProject$Response(params).pipe(
      map((r: StrictHttpResponse<IProject>) => r.body as IProject)
    );
  }

  /**
   * Path part for operation getProject
   */
  static readonly GetProjectPath = '/projects/{projectId}';

  /**
   * Get project by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProject()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProject$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<IProject>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectsService.GetProjectPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IProject>;
      })
    );
  }

  /**
   * Get project by ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProject(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<IProject> {

    return this.getProject$Response(params).pipe(
      map((r: StrictHttpResponse<IProject>) => r.body as IProject)
    );
  }

  /**
   * Path part for operation updateProject
   */
  static readonly UpdateProjectPath = '/projects/{projectId}';

  /**
   * Update project
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProject$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: IInitProject
  }): Observable<StrictHttpResponse<IProject>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectsService.UpdateProjectPath, 'put');
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
        return r as StrictHttpResponse<IProject>;
      })
    );
  }

  /**
   * Update project
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateProject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProject(params: {

    /**
     * Project ID
     */
    projectId: string;
    body?: IInitProject
  }): Observable<IProject> {

    return this.updateProject$Response(params).pipe(
      map((r: StrictHttpResponse<IProject>) => r.body as IProject)
    );
  }

}
