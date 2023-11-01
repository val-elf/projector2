import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from '~/models/project.model';
import { ProjectsService } from '~/services/projects.service';

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<IProject>{
    constructor (private projectsService: ProjectsService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<IProject> {
        const projectId = route.params.projectId as string;
        return this.projectsService.getProject(projectId)
    }
}
