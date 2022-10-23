import { Component, Input } from '@angular/core';
import { PictureEditor } from 'picture-editor';

@Component({
    selector: 'pe-tool-panel',
    templateUrl: './tool-panel.component.html',
    styleUrls: ['./tool-panel.component.scss'],
})
export class ToolPanelComponent {
    @Input() editor: PictureEditor;
}