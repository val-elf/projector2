import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { EIconTypes } from '~/common/components/preview/preview-image.component';
import { IProject } from '~/models/project.model';
import { TranslationService } from '~/services/translation.service';

@Component({
    selector: 'app-project',
    templateUrl: 'project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
    public project: IProject;
    public circle: EIconTypes = EIconTypes.circle;

    constructor(
        private activeRoute: ActivatedRoute,
        private breadcrumbService: BreadcrumbService,
        private translationService: TranslationService,
        private router: Router,
    ) { }

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

    ngOnInit() {
        this.activeRoute.data.subscribe(data => {
            this.project = data.project;
            this.breadcrumbService.set('@projects', this.translationService.get('APP_PROJECTS-LIST'));
            this.breadcrumbService.set('@projectName', this.project.name);
            this.breadcrumbService.set('@plot', this.translationService.get('APP_PROJECT_MENU_PLOT'));
            this.breadcrumbService.set('@characters', this.translationService.get('APP_PROJECT_MENU_CHARACTERS'));
            this.breadcrumbService.set('@artifacts', this.translationService.get('APP_PROJECT_MENU_ARTIFACTS'));
            this.breadcrumbService.set('@locations', this.translationService.get('APP_PROJECT_MENU_LOCATIONS'));
            this.breadcrumbService.set('@documents', this.translationService.get('APP_PROJECT_MENU_DOCUMENTS'));
        });
    }
}