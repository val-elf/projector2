import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from '~/common/resolvers/project.resolver';
import { ProjectsComponent } from './projects.component';
import { ProjectPlotComponent } from './project/plot/project-plot.component';
import { ProjectCharactersComponent } from './project/characters/project-characters.component';
import { ProjectArtifactsComponent } from './project/artifacts/project-artifacts.component';
import { ProjectLocationsComponent } from './project/locations/project-locations.component';
import { ProjectDocumentsComponent } from './project/documents/project-documents.component';
import { ProjectDashboardComponent } from './project/dashboard/project-dashboard.component';

const routing: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        data: { breadcrumb: { alias: 'projects' } },
    },
    {
        path: ':projectId',
        component: ProjectComponent,
        resolve: {
            project: ProjectResolver,
        },
        data: {
            breadcrumb: {
                alias: 'projectName'
            }
        },
        children: [
            {
                path: '',
                component: ProjectDashboardComponent,
            },
            {
                path: 'plot',
                component: ProjectPlotComponent,
                data: { breadcrumb: { alias: 'plot' } },
            },
            {
                path: 'characters',
                component: ProjectCharactersComponent,
                data: { breadcrumb: { alias: 'characters' } },
            },
            {
                path: 'artifacts',
                component: ProjectArtifactsComponent,
                data: { breadcrumb: { alias: 'artifacts' } },
            },
            {
                path: 'locations',
                component: ProjectLocationsComponent,
                data: { breadcrumb: { alias: 'locations' } },
            },
            {
                path: 'documents',
                component: ProjectDocumentsComponent,
                data: { breadcrumb: { alias: 'documents' } },
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routing)]
})
export class ProjectsRoutingModule {}