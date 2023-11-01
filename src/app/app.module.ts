import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonSharedModule } from "~/common/common.module";
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CommonSharedModule,
        MatCommonModule,
        MatButtonModule,
        MatFormFieldModule,
        AppRoutingModule,
        ServicesModule,
        PipesModule,
        BreadcrumbModule,
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