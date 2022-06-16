import { Component, ElementRef, ViewChild } from "@angular/core";
import { BrushTool, PictureEditor } from "picture-editor";
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
                width: 1500,
                height: 900,
            }
        });
        const brushTool = new BrushTool();
        pictureEditor.setActiveTool(brushTool);
        const createdLayers = pictureEditor.layersManager.addBulkLayers(mockLayers);
        // const layer = pictureEditor.addLayer();
        console.log("Layers created", createdLayers);
    }

}