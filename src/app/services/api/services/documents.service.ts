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


@Injectable({
  providedIn: 'root',
})
export class DocumentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOwnerDocuments
   */
  static readonly GetOwnerDocumentsPath = '/owner/{owner}/documents';

  /**
   * Get owner documents
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerDocuments$Response(params: {
    owner: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetOwnerDocumentsPath, 'get');
    if (params) {
      rb.path('owner', params.owner, {});
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
   * Get owner documents
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnerDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerDocuments(params: {
    owner: string;
  }): Observable<void> {

    return this.getOwnerDocuments$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createDocument
   */
  static readonly CreateDocumentPath = '/owner/{owner}/documents';

  /**
   * Create a document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  createDocument$Response(params: {
    owner: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.CreateDocumentPath, 'post');
    if (params) {
      rb.path('owner', params.owner, {});
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
   * Create a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createDocument(params: {
    owner: string;
  }): Observable<void> {

    return this.createDocument$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getDocument
   */
  static readonly GetDocumentPath = '/documents/{document}';

  /**
   * Get a document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocument$Response(params: {
    document: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetDocumentPath, 'get');
    if (params) {
      rb.path('document', params.document, {});
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
   * Get a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocument(params: {
    document: string;
  }): Observable<void> {

    return this.getDocument$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDocument
   */
  static readonly DeleteDocumentPath = '/documents/{document}';

  /**
   * Delete a document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocument$Response(params: {
    document: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.DeleteDocumentPath, 'delete');
    if (params) {
      rb.path('document', params.document, {});
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
   * Delete a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocument(params: {
    document: string;
  }): Observable<void> {

    return this.deleteDocument$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateDocument
   */
  static readonly UpdateDocumentPath = '/documents/{documentId}';

  /**
   * Update a document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateDocument$Response(params: {
    documentId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.UpdateDocumentPath, 'put');
    if (params) {
      rb.path('documentId', params.documentId, {});
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
   * Update a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateDocument(params: {
    documentId: string;
  }): Observable<void> {

    return this.updateDocument$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
