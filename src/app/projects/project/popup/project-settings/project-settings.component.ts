import { Component, Input } from '@angular/core';
import { IProject } from '~/services/api/models';

@Component({
    selector: 'app-project-settings',
    templateUrl: './project-settings.component.html',
    styleUrls: ['./project-settings.component.scss']
})
export class ProjectSettingsComponent {
    @Input() public project: IProject;
}