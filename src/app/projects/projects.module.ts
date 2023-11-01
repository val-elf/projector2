import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { CommonSharedModule } from '~/common/common.module';
import { ProjectsComponent } from './projects.component';
import { ProjectMenuComponent } from './project/project-menu/project-menu.component';
import { ProjectPlotComponent } from './project/plot/project-plot.component';
import { ProjectCharactersComponent } from './project/characters/project-characters.component';
import { ProjectArtifactsComponent } from './project/artifacts/project-artifacts.component';
import { ProjectLocationsComponent } from './project/locations/project-locations.component';
import { ProjectDocumentsComponent } from './project/documents/project-documents.component';
import { ProjectDashboardComponent } from './project/dashboard/project-dashboard.component';
import { ProjectLatestDocumentsComponent } from './project/dashboard/latest-documents/project-latest-documents.component';
import { ProjectScheduleComponent } from './project/dashboard/schedule/project-schedule.component';
import { ProjectMessagesComponent } from './project/dashboard/messages/project-messages.component';
import { ProjectStickersComponent } from './project/dashboard/stickers/project-stickers.component';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ProjectsRoutingModule,
        CommonSharedModule,
        BreadcrumbModule,
    ],
    declarations: [
        ProjectsComponent,
        ProjectComponent,
        ProjectMenuComponent,
        ProjectPlotComponent,
        ProjectCharactersComponent,
        ProjectArtifactsComponent,
        ProjectLocationsComponent,
        ProjectDocumentsComponent,
        ProjectDashboardComponent,
        ProjectLatestDocumentsComponent,
        ProjectScheduleComponent,
        ProjectMessagesComponent,
        ProjectStickersComponent,
    ],
    exports: [
        ProjectComponent,
    ],
})
export class ProjectsModule {}