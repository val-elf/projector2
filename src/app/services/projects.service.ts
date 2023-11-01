import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProject } from '~/models/project.model';

@Injectable()
export class ProjectsService {
    constructor(private http: HttpClient) {}

    public getProjects(): Observable<IProject[]> {
        return this.http.get<{ result: IProject[] }>('/api/projects').pipe(
            map(data => data.result),
            // map((projects: IProject[]) => [projects[1]])
        );
    }

    public getProject(projectId: string): Observable<IProject> {
        return this.http.get<IProject>(`/api/projects/${projectId}`);
    }
}