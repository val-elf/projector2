import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProject } from '~/models/project.model';
import { ProjectsService } from '~/services/projects.service';
import { EIconTypes } from '../../preview/preview-image.component';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {

    private destroy$: Subject<void> = new Subject<void>();
    public projects$: Observable<IProject[]> = this.projectsService.getProjects();
    public iconTypes = EIconTypes;

    constructor(
        private projectsService: ProjectsService,
    ) {}

    ngOnInit() {
        /*this.projects$.subscribe(projects => {
            console.log('Getting projects', projects);
        });*/
    }

    ngOnDestroy():void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}