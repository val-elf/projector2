import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthorizationService } from './auth.service';
import { ProjectsService } from './projects.service';
import { ApiModule } from './api/api.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule, ApiModule],
    providers: [
        AuthorizationService,
        ProjectsService,
    ]
})
export class ServicesModule {}