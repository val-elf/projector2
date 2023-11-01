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

import { ICharacter } from '../models/i-character';


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
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
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
    projectId: string;
  }): Observable<void> {

    return this.getCharactersCount$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
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
    projectId: string;
  }): Observable<void> {

    return this.getCharacters$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
   * This method doesn't expect any request body.
   */
  createCharacter$Response(params: {
    projectId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.CreateCharacterPath, 'post');
    if (params) {
      rb.path('projectId', params.projectId, {});
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
   * Get character by its ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCharacter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createCharacter(params: {
    projectId: string;
  }): Observable<void> {

    return this.createCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getCharacter
   */
  static readonly GetCharacterPath = '/characters/{characterId}';

  /**
   * Get character
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCharacter()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacter$Response(params: {
    characterId: string;
  }): Observable<StrictHttpResponse<void>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Get character
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCharacter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCharacter(params: {
    characterId: string;
  }): Observable<void> {

    return this.getCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateCharacter
   */
  static readonly UpdateCharacterPath = '/characters/{characterId}';

  /**
   * Update character
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCharacter()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateCharacter$Response(params: {
    characterId: string;
  }): Observable<StrictHttpResponse<ICharacter>> {

    const rb = new RequestBuilder(this.rootUrl, CharactersService.UpdateCharacterPath, 'put');
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
   * Update character
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCharacter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateCharacter(params: {
    characterId: string;
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
    characterId: string;
  }): Observable<StrictHttpResponse<void>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
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
    characterId: string;
  }): Observable<void> {

    return this.deleteCharacter$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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
    characterId: string;
  }): Observable<StrictHttpResponse<void>> {

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
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
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
    characterId: string;
  }): Observable<void> {

    return this.getCharacterArtifacts$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
