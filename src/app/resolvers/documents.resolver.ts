import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IDocument } from "~/services/api/models";
import { DocumentsService } from "~/services/api/services";

interface IFindList<T> {
    result?: T[];
    options?: { [key: string]: string | number | boolean | undefined | null };
}

@Injectable({ providedIn: 'root' })
export class DocumentsResolver 
{
    constructor(
        private documentsService: DocumentsService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<IFindList<IDocument>> {
        return this.documentsService.getOwnerDocuments({ ownerId: route.params.projectId });
    }
}