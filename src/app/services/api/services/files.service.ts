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

import { IFile } from '../models/i-file';
import { IFileStatus } from '../models/i-file-status';


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
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  upload$Response(params?: {
    body?: {
}
  }): Observable<StrictHttpResponse<IFile>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.UploadPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IFile>;
      })
    );
  }

  /**
   * Upload a file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `upload$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  upload(params?: {
    body?: {
}
  }): Observable<IFile> {

    return this.upload$Response(params).pipe(
      map((r: StrictHttpResponse<IFile>) => r.body as IFile)
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

    /**
     * Id of the file
     */
    fileId: string;
  }): Observable<StrictHttpResponse<IFileStatus>> {

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
        return r as StrictHttpResponse<IFileStatus>;
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

    /**
     * Id of the file
     */
    fileId: string;
  }): Observable<IFileStatus> {

    return this.getTranscoderStatus$Response(params).pipe(
      map((r: StrictHttpResponse<IFileStatus>) => r.body as IFileStatus)
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

    /**
     * Id of the deleted file
     */
    fileId: string;
  }): Observable<StrictHttpResponse<{
'deleted'?: boolean;
}>> {

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
        return r as StrictHttpResponse<{
        'deleted'?: boolean;
        }>;
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

    /**
     * Id of the deleted file
     */
    fileId: string;
  }): Observable<{
'deleted'?: boolean;
}> {

    return this.deleteFile$Response(params).pipe(
      map((r: StrictHttpResponse<{
'deleted'?: boolean;
}>) => r.body as {
'deleted'?: boolean;
})
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

    /**
     * Id of the deleted file
     */
    fileId: string;
  }): Observable<StrictHttpResponse<IFile>> {

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
        return r as StrictHttpResponse<IFile>;
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

    /**
     * Id of the deleted file
     */
    fileId: string;
  }): Observable<IFile> {

    return this.getFileInfo$Response(params).pipe(
      map((r: StrictHttpResponse<IFile>) => r.body as IFile)
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

    /**
     * Id of the deleted file
     */
    fileId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.DownloadFilePath, 'get');
    if (params) {
      rb.path('fileId', params.fileId, {});
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
   * Download file
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `downloadFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadFile(params: {

    /**
     * Id of the deleted file
     */
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

    /**
     * Id of the specified object
     */
    objectId: string;
  }): Observable<StrictHttpResponse<{
'result'?: Array<IFile>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}>> {

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
        return r as StrictHttpResponse<{
        'result'?: Array<IFile>;
        'options'?: {
        [key: string]: (string | number | boolean | null | undefined);
        };
        }>;
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

    /**
     * Id of the specified object
     */
    objectId: string;
  }): Observable<{
'result'?: Array<IFile>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}> {

    return this.getOwnerFiles$Response(params).pipe(
      map((r: StrictHttpResponse<{
'result'?: Array<IFile>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
}>) => r.body as {
'result'?: Array<IFile>;
'options'?: {
[key: string]: (string | number | boolean | null | undefined);
};
})
    );
  }

}
