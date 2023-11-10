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

import { ICategorySchema } from '../models/i-category-schema';
import { IHierarchyCategorySchemaItem } from '../models/i-hierarchy-category-schema-item';


/**
 * Project's category schemas management API
 */
@Injectable({
  providedIn: 'root',
})
export class CategorySchemasService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getRootCategorySchemas
   */
  static readonly GetRootCategorySchemasPath = '/category-schemas';

  /**
   * Get root category schemas
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRootCategorySchemas()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRootCategorySchemas$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ICategorySchema>>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.GetRootCategorySchemasPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ICategorySchema>>;
      })
    );
  }

  /**
   * Get root category schemas
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRootCategorySchemas$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRootCategorySchemas(params?: {
  }): Observable<Array<ICategorySchema>> {

    return this.getRootCategorySchemas$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ICategorySchema>>) => r.body as Array<ICategorySchema>)
    );
  }

  /**
   * Path part for operation createCategorySchema
   */
  static readonly CreateCategorySchemaPath = '/category-schemas';

  /**
   * Create root category schema
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategorySchema()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategorySchema$Response(params?: {
    body?: {
'name'?: string;
'description'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.CreateCategorySchemaPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create root category schema
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCategorySchema$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategorySchema(params?: {
    body?: {
'name'?: string;
'description'?: string;
}
  }): Observable<void> {

    return this.createCategorySchema$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getOwnerCategorySchemas
   */
  static readonly GetOwnerCategorySchemasPath = '/category-schemas/{ownerId}';

  /**
   * Get owner category schemas
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerCategorySchemas()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerCategorySchemas$Response(params: {

    /**
     * Id of the owner
     */
    ownerId: string;
  }): Observable<StrictHttpResponse<Array<ICategorySchema>>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.GetOwnerCategorySchemasPath, 'get');
    if (params) {
      rb.path('ownerId', params.ownerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ICategorySchema>>;
      })
    );
  }

  /**
   * Get owner category schemas
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnerCategorySchemas$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerCategorySchemas(params: {

    /**
     * Id of the owner
     */
    ownerId: string;
  }): Observable<Array<ICategorySchema>> {

    return this.getOwnerCategorySchemas$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ICategorySchema>>) => r.body as Array<ICategorySchema>)
    );
  }

  /**
   * Path part for operation createOwnerCategorySchema
   */
  static readonly CreateOwnerCategorySchemaPath = '/category-schemas/{ownerId}';

  /**
   * Create root category schema
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOwnerCategorySchema()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOwnerCategorySchema$Response(params: {

    /**
     * Id of the owner or null when schema is root
     */
    ownerId: string;
    body?: {
'name'?: string;
'description'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.CreateOwnerCategorySchemaPath, 'post');
    if (params) {
      rb.path('ownerId', params.ownerId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Create root category schema
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOwnerCategorySchema$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOwnerCategorySchema(params: {

    /**
     * Id of the owner or null when schema is root
     */
    ownerId: string;
    body?: {
'name'?: string;
'description'?: string;
}
  }): Observable<void> {

    return this.createOwnerCategorySchema$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCategorySchemasHierarchy
   */
  static readonly GetCategorySchemasHierarchyPath = '/category-schemas-hierarchy';

  /**
   * Get category schemas hierarchy
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategorySchemasHierarchy()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategorySchemasHierarchy$Response(params?: {
  }): Observable<StrictHttpResponse<Array<IHierarchyCategorySchemaItem>>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.GetCategorySchemasHierarchyPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IHierarchyCategorySchemaItem>>;
      })
    );
  }

  /**
   * Get category schemas hierarchy
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCategorySchemasHierarchy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategorySchemasHierarchy(params?: {
  }): Observable<Array<IHierarchyCategorySchemaItem>> {

    return this.getCategorySchemasHierarchy$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IHierarchyCategorySchemaItem>>) => r.body as Array<IHierarchyCategorySchemaItem>)
    );
  }

  /**
   * Path part for operation assignCategorySchema
   */
  static readonly AssignCategorySchemaPath = '/category-schemas/{categorySchemaId}/assignTo/{projectId}';

  /**
   * Assign category schema to project
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignCategorySchema()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignCategorySchema$Response(params: {

    /**
     * Id of the category schema
     */
    categorySchemaId: string;

    /**
     * Id of the project
     */
    projectId: string;
  }): Observable<StrictHttpResponse<{
'updated'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.AssignCategorySchemaPath, 'post');
    if (params) {
      rb.path('categorySchemaId', params.categorySchemaId, {});
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'updated'?: boolean;
        }>;
      })
    );
  }

  /**
   * Assign category schema to project
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `assignCategorySchema$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignCategorySchema(params: {

    /**
     * Id of the category schema
     */
    categorySchemaId: string;

    /**
     * Id of the project
     */
    projectId: string;
  }): Observable<{
'updated'?: boolean;
}> {

    return this.assignCategorySchema$Response(params).pipe(
      map((r: StrictHttpResponse<{
'updated'?: boolean;
}>) => r.body as {
'updated'?: boolean;
})
    );
  }

  /**
   * Path part for operation getProjectSchema
   */
  static readonly GetProjectSchemaPath = '/projects/{projectId}/schema';

  /**
   * Get project schema
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjectSchema()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectSchema$Response(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<StrictHttpResponse<IHierarchyCategorySchemaItem>> {

    const rb = new RequestBuilder(this.rootUrl, CategorySchemasService.GetProjectSchemaPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IHierarchyCategorySchemaItem>;
      })
    );
  }

  /**
   * Get project schema
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjectSchema$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectSchema(params: {

    /**
     * Project ID
     */
    projectId: string;
  }): Observable<IHierarchyCategorySchemaItem> {

    return this.getProjectSchema$Response(params).pipe(
      map((r: StrictHttpResponse<IHierarchyCategorySchemaItem>) => r.body as IHierarchyCategorySchemaItem)
    );
  }

}
