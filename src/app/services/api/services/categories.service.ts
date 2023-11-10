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

import { ICategory } from '../models/i-category';
import { IInitCategory } from '../models/i-init-category';


/**
 * Categories management API
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOwnerCategories
   */
  static readonly GetOwnerCategoriesPath = '/owner/{ownerId}/categories/';

  /**
   * Get count of categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerCategories$Response(params: {

    /**
     * Owner ID
     */
    ownerId: string;
  }): Observable<StrictHttpResponse<Array<ICategory>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetOwnerCategoriesPath, 'get');
    if (params) {
      rb.path('ownerId', params.ownerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ICategory>>;
      })
    );
  }

  /**
   * Get count of categories
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnerCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerCategories(params: {

    /**
     * Owner ID
     */
    ownerId: string;
  }): Observable<Array<ICategory>> {

    return this.getOwnerCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ICategory>>) => r.body as Array<ICategory>)
    );
  }

  /**
   * Path part for operation createCategory
   */
  static readonly CreateCategoryPath = '/owner/{ownerId}/categories/';

  /**
   * Get count of categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory$Response(params: {

    /**
     * Owner ID
     */
    ownerId: string;
    body?: IInitCategory
  }): Observable<StrictHttpResponse<ICategory>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.CreateCategoryPath, 'post');
    if (params) {
      rb.path('ownerId', params.ownerId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ICategory>;
      })
    );
  }

  /**
   * Get count of categories
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory(params: {

    /**
     * Owner ID
     */
    ownerId: string;
    body?: IInitCategory
  }): Observable<ICategory> {

    return this.createCategory$Response(params).pipe(
      map((r: StrictHttpResponse<ICategory>) => r.body as ICategory)
    );
  }

  /**
   * Path part for operation updateCategory
   */
  static readonly UpdateCategoryPath = '/owner/{ownerId}/categories/{categoryId}';

  /**
   * Get count of categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: {

    /**
     * Owner ID
     */
    ownerId: string;

    /**
     * Category ID
     */
    categoryId: string;
    body?: IInitCategory
  }): Observable<StrictHttpResponse<ICategory>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.UpdateCategoryPath, 'put');
    if (params) {
      rb.path('ownerId', params.ownerId, {});
      rb.path('categoryId', params.categoryId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ICategory>;
      })
    );
  }

  /**
   * Get count of categories
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: {

    /**
     * Owner ID
     */
    ownerId: string;

    /**
     * Category ID
     */
    categoryId: string;
    body?: IInitCategory
  }): Observable<ICategory> {

    return this.updateCategory$Response(params).pipe(
      map((r: StrictHttpResponse<ICategory>) => r.body as ICategory)
    );
  }

}
