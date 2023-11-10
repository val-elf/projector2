import { Component, Input } from '@angular/core';
import { ILocation } from "~/services/api/models";
import { EIconTypes } from '../../preview/preview-image.component';

@Component({
    selector: 'app-location-card',
    templateUrl: './location-card.component.html',
    styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
    @Input() location: ILocation;
    iconTypes = EIconTypes;
}