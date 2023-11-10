import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHierarchyCategorySchemaItem, IProject } from '~/services/api/models';
import { CategorySchemasService } from '~/services/api/services';

@Component({
    selector: 'app-project-plot',
    templateUrl: './project-plot.component.html',
    styleUrls: ['./project-plot.component.scss'],
})
export class ProjectPlotComponent {
    public projectSchema: IHierarchyCategorySchemaItem;

    constructor(
        private activeRoute: ActivatedRoute,
        private categorySchemaService: CategorySchemasService,
    ) {
        const project = this.activeRoute.snapshot.data.project as IProject;
        this.categorySchemaService.getProjectSchema({ projectId: project._id }).subscribe((schema) => {
            this.projectSchema = schema;
        });
    }

}