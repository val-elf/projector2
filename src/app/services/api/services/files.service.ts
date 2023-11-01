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
 * Files management API
 */
@Injectable({
  providedIn: 'root',
})
export class FilesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation upload
   */
  static readonly UploadPath = '/upload';

  /**
   * Upload a file
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `upload()` instead.
   *
   * This method doesn't expect any request body.
   */
  upload$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.UploadPath, 'post');
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
   * Upload a file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `upload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  upload(params?: {
  }): Observable<void> {

    return this.upload$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTranscoderStatus
   */
  static readonly GetTranscoderStatusPath = '/file/{fileId}/status';

  /**
   * Get file transcoding status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTranscoderStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTranscoderStatus$Response(params: {
    fileId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.GetTranscoderStatusPath, 'get');
    if (params) {
      rb.path('fileId', params.fileId, {});
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
   * Get file transcoding status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTranscoderStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTranscoderStatus(params: {
    fileId: string;
  }): Observable<void> {

    return this.getTranscoderStatus$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteFile
   */
  static readonly DeleteFilePath = '/files/{fileId}';

  /**
   * Delete a file
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFile$Response(params: {
    fileId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.DeleteFilePath, 'delete');
    if (params) {
      rb.path('fileId', params.fileId, {});
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
   * Delete a file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFile(params: {
    fileId: string;
  }): Observable<void> {

    return this.deleteFile$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getFileInfo
   */
  static readonly GetFileInfoPath = '/file/{fileId}';

  /**
   * Get file info
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFileInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFileInfo$Response(params: {
    fileId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.GetFileInfoPath, 'get');
    if (params) {
      rb.path('fileId', params.fileId, {});
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
   * Get file info
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFileInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFileInfo(params: {
    fileId: string;
  }): Observable<void> {

    return this.getFileInfo$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadFile
   */
  static readonly DownloadFilePath = '/download/{fileId}';

  /**
   * Download file
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadFile$Response(params: {
    fileId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.DownloadFilePath, 'get');
    if (params) {
      rb.path('fileId', params.fileId, {});
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
   * Download file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `downloadFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadFile(params: {
    fileId: string;
  }): Observable<void> {

    return this.downloadFile$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getOwnerFiles
   */
  static readonly GetOwnerFilesPath = '/dbobject/{objectId}/files';

  /**
   * Get files list for abstract object
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOwnerFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerFiles$Response(params: {
    objectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.GetOwnerFilesPath, 'get');
    if (params) {
      rb.path('objectId', params.objectId, {});
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
   * Get files list for abstract object
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOwnerFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOwnerFiles(params: {
    objectId: string;
  }): Observable<void> {

    return this.getOwnerFiles$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
