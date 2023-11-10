import { Component, Input } from "@angular/core";
import { IArtifact } from "~/services/api/models";
import { EIconTypes } from "../preview/preview-image.component";

@Component({
    selector: 'app-artifact-card',
    templateUrl: './artifact-card.component.html',
    styleUrls: ['./artifact-card.component.scss'],
})
export class ArtifactCardComponent {
    @Input() artifact: IArtifact;
    iconTypes = EIconTypes;
}