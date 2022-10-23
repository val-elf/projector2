import { Component, Input } from '@angular/core';
import { ILayer } from 'picture-editor';

@Component({
    selector: 'pe-layer',
    templateUrl: './layer.component.html',
    styleUrls: ['./layer.component.scss']
})
export class LayerComponent {
    @Input() layer: ILayer;
}