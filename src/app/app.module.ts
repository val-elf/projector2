import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonAppModule } from "~/common/common.module";
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { ApiModule } from './services/api/api.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        CommonAppModule,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        AppRoutingModule,
        ServicesModule,
        PipesModule,
        BreadcrumbModule,
        ApiModule.forRoot({ rootUrl: 'api' }),
    ],
    declarations: [
        AppComponent,
        AuthorizationComponent,
        DashboardComponent,
    ],
    providers: [
        BreadcrumbService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}