import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDocument } from '~/services/api/models';

@Component({
    selector: 'app-project-documents',
    templateUrl: './project-documents.component.html',
    styleUrls: ['./project-documents.component.scss'],
})
export class ProjectDocumentsComponent {
    public documents: IDocument[];
    constructor(route: ActivatedRoute) {
        this.documents = route.snapshot.data.documents.result;
    }
}