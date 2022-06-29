import { Component, ElementRef, ViewChild } from "@angular/core";
import { BrushTool, PanoramerTool, PictureEditor } from "picture-editor";
import { mockLayers } from "./layers-mock";

@Component({
    selector: 'app-picture-editor',
    templateUrl: './picture-editor.component.html',
    styleUrls: ['./picture-editor.component.scss'],
})
export class PictureEditorComponent {
    @ViewChild('viewport') viewPort: ElementRef;

    ngAfterViewInit() {
        const pictureEditor = new PictureEditor({
            placeholder: this.viewPort.nativeElement,
            documentConfig: {
                width: 3000,
                height: 2000,
            },
            viewportConfig: {
            }
        });
        // const brushTool = new BrushTool();
        // const panTool = new PanoramerTool();
        pictureEditor.setActiveTool(PanoramerTool);
        pictureEditor.layersManager.addBulkLayers(mockLayers);
    }

}