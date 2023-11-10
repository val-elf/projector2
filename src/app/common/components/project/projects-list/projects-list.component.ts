import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EIconTypes } from '../../preview/preview-image.component';
import { ProjectsService } from '~/services/api/services';
import { IProject } from '~/services/api/models';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {

    private destroy$: Subject<void> = new Subject<void>();
    public projects$: Observable<{ result?: IProject[], options?: { [key: string]: any } }> = this.projectsService.getProjects();
    public iconTypes = EIconTypes;

    constructor(
        private projectsService: ProjectsService
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