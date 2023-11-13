import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IHierarchyCategorySchemaItem, IProject } from '~/services/api/models';
import { IPopupDataProcessor } from '~/models/popup.model';
import { CategorySchemasService } from '~/services/api/services';

@Component({
    selector: 'app-project-settings',
    templateUrl: './project-settings.component.html',
    styleUrls: ['./project-settings.component.scss'],
})
export class ProjectSettingsComponent {
    @Input() public project: IProject;
    @Input() public dialog: MatDialogRef<ProjectSettingsComponent>;
    @Input() public processor: IPopupDataProcessor;

    public categorySchemaHierarchy: IHierarchyCategorySchemaItem[];

    public constructor(
        private categorySchemasService: CategorySchemasService,
    ) {
        this.categorySchemasService.getCategorySchemasHierarchy().subscribe(
            (categorySchemaHierarchy) => {
                this.categorySchemaHierarchy = categorySchemaHierarchy;
            },
        );
    }
}