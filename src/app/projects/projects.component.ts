import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { TranslationService } from '~/services/translation.service';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

    constructor(
        breadcrumbService: BreadcrumbService,
        translateService: TranslationService,
    ) {
    }
}