import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IDbObject } from '~/services/api/models';
import { DbObjectsService } from '~/services/api/services';

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
        private ObjectsService: DbObjectsService,
        private activatedRoute: ActivatedRoute,
    ) {
        /*this.ObjectsService.getObject({ limit: 10, order: { _updated: { _dt: -1 }} }, this.project._id).subscribe((documents) => {
            this.documents = documents;
        });*/
    }

}