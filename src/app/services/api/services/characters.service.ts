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
import { ICharacter } from '../models/i-character';
import { IInitCharacter } from '../models/i-init-character';


/**
 * Project's characters management API
 */
@Injectable({
  providedIn: 'root',
})
export class CharactersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCharactersCount
   */
  static readonly GetCharactersCountPath = '/projects/{projectId}/characters/count';

  /**
   * Get count of characters
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCharactersCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharactersCount$Response(params: {

    /**
     * Id of the Project
     */
    projectId: string;
  }): Observable<StrictHttpResponse<{
'count'?: number;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.GetCharactersCountPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'count'?: number;
        }>;
      })
    );
  }

  /**
   * Get count of characters
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCharactersCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharactersCount(params: {

    /**
     * Id of the Project
     */
    projectId: string;
  }): Observable<{
'count'?: number;
}> {

    return this.getCharactersCount$Response(params).pipe(
      map((r: StrictHttpResponse<{
'count'?: number;
}>) => r.body as {
'count'?: number;
})
    );
  }

  /**
   * Path part for operation getCharacters
   */
  static readonly GetCharactersPath = '/projects/{projectId}/characters';

  /**
   * Get characters list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCharacters()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacters$Response(params: {

    /**
     * Id of the Project
     */
    projectId: string;
  }): Observable<StrictHttpResponse<Array<ICharacter>>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.GetCharactersPath, 'get');
    if (params) {
      rb.path('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ICharacter>>;
      })
    );
  }

  /**
   * Get characters list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCharacters$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacters(params: {

    /**
     * Id of the Project
     */
    projectId: string;
  }): Observable<Array<ICharacter>> {

    return this.getCharacters$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ICharacter>>) => r.body as Array<ICharacter>)
    );
  }

  /**
   * Path part for operation createCharacter
   */
  static readonly CreateCharacterPath = '/projects/{projectId}/characters';

  /**
   * Get character by its ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCharacter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCharacter$Response(params: {

    /**
     * Id of the Project
     */
    projectId: string;
    body?: IInitCharacter
  }): Observable<StrictHttpResponse<ICharacter>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.CreateCharacterPath, 'post');
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
        return r as StrictHttpResponse<ICharacter>;
      })
    );
  }

  /**
   * Get character by its ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCharacter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCharacter(params: {

    /**
     * Id of the Project
     */
    projectId: string;
    body?: IInitCharacter
  }): Observable<ICharacter> {

    return this.createCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<ICharacter>) => r.body as ICharacter)
    );
  }

  /**
   * Path part for operation getCharacter
   */
  static readonly GetCharacterPath = '/characters/{characterId}';

  /**
   * Get particular character by its Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCharacter()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacter$Response(params: {

    /**
     * Id of the character
     */
    characterId: string;
  }): Observable<StrictHttpResponse<ICharacter>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.GetCharacterPath, 'get');
    if (params) {
      rb.path('characterId', params.characterId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ICharacter>;
      })
    );
  }

  /**
   * Get particular character by its Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCharacter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacter(params: {

    /**
     * Id of the character
     */
    characterId: string;
  }): Observable<ICharacter> {

    return this.getCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<ICharacter>) => r.body as ICharacter)
    );
  }

  /**
   * Path part for operation updateCharacter
   */
  static readonly UpdateCharacterPath = '/characters/{characterId}';

  /**
   * Update particular character
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCharacter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCharacter$Response(params: {

    /**
     * Id of the character
     */
    characterId: string;
    body?: IInitCharacter
  }): Observable<StrictHttpResponse<ICharacter>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.UpdateCharacterPath, 'put');
    if (params) {
      rb.path('characterId', params.characterId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ICharacter>;
      })
    );
  }

  /**
   * Update particular character
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCharacter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCharacter(params: {

    /**
     * Id of the character
     */
    characterId: string;
    body?: IInitCharacter
  }): Observable<ICharacter> {

    return this.updateCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<ICharacter>) => r.body as ICharacter)
    );
  }

  /**
   * Path part for operation deleteCharacter
   */
  static readonly DeleteCharacterPath = '/characters/{characterId}';

  /**
   * Delete character
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCharacter()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCharacter$Response(params: {

    /**
     * Id of the character
     */
    characterId: string;
  }): Observable<StrictHttpResponse<{
'deleted'?: boolean;
}>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.DeleteCharacterPath, 'delete');
    if (params) {
      rb.path('characterId', params.characterId, {});
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
   * Delete character
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCharacter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCharacter(params: {

    /**
     * Id of the character
     */
    characterId: string;
  }): Observable<{
'deleted'?: boolean;
}> {

    return this.deleteCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<{
'deleted'?: boolean;
}>) => r.body as {
'deleted'?: boolean;
})
    );
  }

  /**
   * Path part for operation getCharacterArtifacts
   */
  static readonly GetCharacterArtifactsPath = '/characters/{characterId}/involvement';

  /**
   * Get character's artifacts
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCharacterArtifacts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacterArtifacts$Response(params: {

    /**
     * Id of the character
     */
    characterId: string;
  }): Observable<StrictHttpResponse<Array<IArtifact>>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.GetCharacterArtifactsPath, 'get');
    if (params) {
      rb.path('characterId', params.characterId, {});
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
   * Get character's artifacts
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCharacterArtifacts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacterArtifacts(params: {

    /**
     * Id of the character
     */
    characterId: string;
  }): Observable<Array<IArtifact>> {

    return this.getCharacterArtifacts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IArtifact>>) => r.body as Array<IArtifact>)
    );
  }

}
