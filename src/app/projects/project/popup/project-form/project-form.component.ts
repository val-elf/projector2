import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { IProject } from '~/services/api/models';
import { ProjectSettingsComponent } from '../project-settings/project-settings.component';
import { MatDialogRef } from '@angular/material/dialog';
import { EPopupActions, IPopupDataProcessor } from '~/models/popup.model';
import { ProjectsService } from '~/services/api/services';

interface IProjectForm {
    name: AbstractControl<string>;
    description: AbstractControl<string>;
}



@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
    @Input() public project: IProject;
    @Input() public dialog: MatDialogRef<ProjectSettingsComponent>;
    @Input() public processor: IPopupDataProcessor;

    public formGroup = new FormGroup<IProjectForm>({
        name: new FormControl<string>('', [Validators.required]),
        description: new FormControl<string>(''),
    });

    constructor(
        private projectsService: ProjectsService,
    ) { }

    ngOnInit() {
        this.formGroup.valueChanges.subscribe((value) => {
            this.processor.setActionState(EPopupActions.Save, this.formGroup.valid);
        });
        this.processor.beforeClose
            .pipe(
                filter((data) => data.action === EPopupActions.Save),
                switchMap(({ action, result$ }) => {
                    return this.save()
                        .pipe(
                            switchMap(() => of(result$))
                        );
                })
            )
            .subscribe((result$) => {
                result$.next(true);
            });

        this.populateData();
    }

    private populateData() {
        const { name, description } = this.formGroup.controls;
        name.setValue(this.project.name);
        description.setValue(this.project.description);
    }

    private save() {
        const { name, description } = this.formGroup.controls;
        this.project.name = name.value;
        this.project.description = description.value;
        const { preview, ...updateProject } = this.project;
        console.log('try to save', updateProject);
        return this.projectsService.updateProject({ projectId: this.project._id, body: updateProject });
    }
}