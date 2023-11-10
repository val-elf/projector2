import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EIconTypes } from '~/common/components/preview/preview-image.component';
import { IProject } from '~/services/api/models';

@Component({
    selector: 'app-project-header',
    templateUrl: './project-header.component.html',
    styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent {
    @Input() public project: IProject;
    public iconTypes = EIconTypes;

    public get isActive(): boolean {
        return this.router.isActive(
            `/projects/${this.project?._id}`,
            {
                paths: 'exact',
                queryParams: 'exact',
                fragment: 'ignored',
                matrixParams: 'ignored'
            }
        );
    }


    constructor(
        private router: Router,
    ) {}
}