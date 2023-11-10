import { Component, Input } from "@angular/core";
import { ICharacter } from "~/services/api/models";
import { EIconTypes } from "../../preview/preview-image.component";

@Component({
    selector: 'app-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
    @Input() character: ICharacter;
    iconTypes = EIconTypes;
}