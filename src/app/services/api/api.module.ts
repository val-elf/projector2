/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ArtifactsService } from './services/artifacts.service';
import { CategoriesService } from './services/categories.service';
import { CharactersService } from './services/characters.service';
import { DocumentsService } from './services/documents.service';
import { FilesService } from './services/files.service';
import { LocationsService } from './services/locations.service';
import { DbObjectsService } from './services/db-objects.service';
import { ProjectsService } from './services/projects.service';
import { TagsService } from './services/tags.service';
import { TimelinesService } from './services/timelines.service';
import { TimespotsService } from './services/timespots.service';
import { UsersService } from './services/users.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ArtifactsService,
    CategoriesService,
    CharactersService,
    DocumentsService,
    FilesService,
    LocationsService,
    DbObjectsService,
    ProjectsService,
    TagsService,
    TimelinesService,
    TimespotsService,
    UsersService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
