import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtifact } from '~/services/api/models';

@Component({
    selector: 'app-project-artifacts',
    templateUrl: './project-artifacts.component.html',
    styleUrls: ['./project-artifacts.component.scss'],
})
export class ProjectArtifactsComponent {
    public artifacts: IArtifact[];
    constructor(
        private route: ActivatedRoute,
    ) {
        this.artifacts = this.route.snapshot.data.artifacts;
    }
}