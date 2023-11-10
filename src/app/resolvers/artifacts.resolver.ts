import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { IArtifact } from "~/services/api/models";
import { ArtifactsService } from "~/services/api/services";

@Injectable({ providedIn: 'root' })
export class ArtifactsResolver implements Resolve<IArtifact[]>
{
    constructor(
        private artifactsService: ArtifactsService,
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IArtifact[]> {
        return this.artifactsService.getArtifactsList({ projectId: route.params.projectId });
    }
}