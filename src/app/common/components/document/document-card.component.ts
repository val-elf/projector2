import { Component, Input } from "@angular/core";
import { IDocument } from "~/services/api/models";
import { EIconTypes } from "../preview/preview-image.component";

@Component({
    selector: 'app-document-card',
    templateUrl: './document-card.component.html',
    styleUrls: ['./document-card.component.scss'],
})
export class DocumentCardComponent {
    @Input() document: IDocument;
    iconTypes = EIconTypes;
}