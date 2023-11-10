import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ILocation } from "~/services/api/models";
import { LocationsService } from "~/services/api/services";

@Injectable({ providedIn: 'root' })
export class LocationsResolver implements Resolve<ILocation[]> {
    constructor(private locationsService: LocationsService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ILocation[]> {
        const projectId = route.params.projectId as string;
        return this.locationsService.getLocationsList({ projectId });
    }
}