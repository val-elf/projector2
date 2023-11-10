import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILocation } from '~/services/api/models';

@Component({
    selector: 'app-project-locations',
    templateUrl: './project-locations.component.html',
    styleUrls: ['./project-locations.component.scss'],
})
export class ProjectLocationsComponent {
    public locations: ILocation[];
    constructor(private route: ActivatedRoute) {
        this.locations = this.route.snapshot.data.locations;
    }
}