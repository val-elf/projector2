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

import { IDocument } from '../models/i-document';
import { IInitDocument } from '../models/i-init-document';


/**
 * Documents management APIs
 */
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
  static readonly GetOwnerDocumentsPath = '/owner/{ownerId}/documents';

  /**
   * Get owner documents
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerDocuments$Response(params: {

    /**
     * Id of the owner
     */
    ownerId: string;
  }): Observable<StrictHttpResponse<{
'result'?: Array<IDocument>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetOwnerDocumentsPath, 'get');
    if (params) {
      rb.path('ownerId', params.ownerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'result'?: Array<IDocument>;
        'options'?: {
        [key: string]: (string | number | boolean | null | undefined);
        };
        }>;
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

    /**
     * Id of the owner
     */
    ownerId: string;
  }): Observable<{
'result'?: Array<IDocument>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}> {

    return this.getOwnerDocuments$Response(params).pipe(
      map((r: StrictHttpResponse<{
'result'?: Array<IDocument>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}>) => r.body as {
'result'?: Array<IDocument>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
})
    );
  }

  /**
   * Path part for operation createDocument
   */
  static readonly CreateDocumentPath = '/owner/{ownerId}/documents';

  /**
   * Create a document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDocument$Response(params: {

    /**
     * Id of the owner
     */
    ownerId: string;
    body?: IInitDocument
  }): Observable<StrictHttpResponse<IDocument>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.CreateDocumentPath, 'post');
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
        return r as StrictHttpResponse<IDocument>;
      })
    );
  }

  /**
   * Create a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDocument(params: {

    /**
     * Id of the owner
     */
    ownerId: string;
    body?: IInitDocument
  }): Observable<IDocument> {

    return this.createDocument$Response(params).pipe(
      map((r: StrictHttpResponse<IDocument>) => r.body as IDocument)
    );
  }

  /**
   * Path part for operation getDocument
   */
  static readonly GetDocumentPath = '/documents/{documentId}';

  /**
   * Get a particular document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocument$Response(params: {

    /**
     * Id of the document
     */
    documentId: string;
  }): Observable<StrictHttpResponse<IDocument>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.GetDocumentPath, 'get');
    if (params) {
      rb.path('documentId', params.documentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IDocument>;
      })
    );
  }

  /**
   * Get a particular document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDocument(params: {

    /**
     * Id of the document
     */
    documentId: string;
  }): Observable<IDocument> {

    return this.getDocument$Response(params).pipe(
      map((r: StrictHttpResponse<IDocument>) => r.body as IDocument)
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
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDocument$Response(params: {

    /**
     * Id of the updated document
     */
    documentId: string;
    body?: IInitDocument
  }): Observable<StrictHttpResponse<IDocument>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.UpdateDocumentPath, 'put');
    if (params) {
      rb.path('documentId', params.documentId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IDocument>;
      })
    );
  }

  /**
   * Update a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDocument(params: {

    /**
     * Id of the updated document
     */
    documentId: string;
    body?: IInitDocument
  }): Observable<IDocument> {

    return this.updateDocument$Response(params).pipe(
      map((r: StrictHttpResponse<IDocument>) => r.body as IDocument)
    );
  }

  /**
   * Path part for operation deleteDocument
   */
  static readonly DeleteDocumentPath = '/documents/{documentId}';

  /**
   * Delete a document
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocument$Response(params: {

    /**
     * Id of the document
     */
    documentId: string;
  }): Observable<StrictHttpResponse<{
'deleted'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentsService.DeleteDocumentPath, 'delete');
    if (params) {
      rb.path('documentId', params.documentId, {});
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
   * Delete a document
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDocument(params: {

    /**
     * Id of the document
     */
    documentId: string;
  }): Observable<{
'deleted'?: boolean;
}> {

    return this.deleteDocument$Response(params).pipe(
      map((r: StrictHttpResponse<{
'deleted'?: boolean;
}>) => r.body as {
'deleted'?: boolean;
})
    );
  }

}
