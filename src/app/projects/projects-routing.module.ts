import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from '~/resolvers/project.resolver';
import { ProjectsComponent } from './projects.component';
import { ProjectPlotComponent } from './project/plot/project-plot.component';
import { ProjectCharactersComponent } from './project/characters/project-characters.component';
import { ProjectArtifactsComponent } from './project/artifacts/project-artifacts.component';
import { ProjectLocationsComponent } from './project/locations/project-locations.component';
import { ProjectDocumentsComponent } from './project/documents/project-documents.component';
import { ProjectDashboardComponent } from './project/dashboard/project-dashboard.component';
import { CharactersResolver } from '~/resolvers/characters.resolver';
import { LocationsResolver } from '~/resolvers/locations.resolver';
import { ArtifactsResolver } from '~/resolvers/artifacts.resolver';
import { DocumentsResolver } from '~/resolvers/documents.resolver';

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
                resolve: {
                    characters: CharactersResolver,
                },
                data: { breadcrumb: { alias: 'characters' } },
            },
            {
                path: 'artifacts',
                component: ProjectArtifactsComponent,
                resolve: {
                    artifacts: ArtifactsResolver,
                },
                data: { breadcrumb: { alias: 'artifacts' } },
            },
            {
                path: 'locations',
                component: ProjectLocationsComponent,
                resolve: {
                    locations: LocationsResolver,
                },
                data: { breadcrumb: { alias: 'locations' } },
            },
            {
                path: 'documents',
                component: ProjectDocumentsComponent,
                resolve: {
                    documents: DocumentsResolver,
                },
                data: { breadcrumb: { alias: 'documents' } },
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routing)]
})
export class ProjectsRoutingModule {}