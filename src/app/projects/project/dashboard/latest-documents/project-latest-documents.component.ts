import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IDbObject } from '~/models/object.model';
import { ObjectsService } from '~/services/objects.service';

@Component({
    selector: 'app-project-latest-documents',
    templateUrl: './project-latest-documents.component.html',
    styleUrls: ['./project-latest-documents.component.scss'],
})
export class ProjectLatestDocumentsComponent {
    public documents: IDbObject[];

    public get project() {
        return this.activatedRoute.snapshot.data.project;
    }

    constructor(
        private ObjectsService: ObjectsService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.ObjectsService.getObjects({ limit: 10, order: { _updated: { _dt: -1 }} }, this.project._id).subscribe((documents) => {
            this.documents = documents;
        });
    }

}