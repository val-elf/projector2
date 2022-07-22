import { Component, ElementRef, ViewChild } from "@angular/core";
import { BrushTool, PanoramerTool, PictureEditor, TestBrush } from "picture-editor";
import { runTests } from "../test/tests";
import { mockLayers } from "./layers-mock";

@Component({
    selector: 'app-picture-editor',
    templateUrl: './picture-editor.component.html',
    styleUrls: ['./picture-editor.component.scss'],
})
export class PictureEditorComponent {
    @ViewChild('viewport') viewPort: ElementRef;

    private pictureEditor: PictureEditor;

    async ngAfterViewInit() {
        this.pictureEditor = new PictureEditor({
            placeholder: this.viewPort.nativeElement,
            documentConfig: {
                width: 3000,
                height: 2000,
            },
            viewportConfig: {
                //width: 1000,
                //height: 500,
                zoom: 1,
            }
        });

        this.pictureEditor.setActiveTool(BrushTool);
        const brushTool = this.pictureEditor.toolManager.getToolInstance<BrushTool>(BrushTool);
        this.pictureEditor.setActiveColor({ r: 155, g: 0, b: 0, a: 1 });
        brushTool.setBrushSize(120);
        brushTool.setBrushHardness(0.1);
        brushTool.setBrushOpacity(1);
        brushTool.setStepRatio(0.2);
        brushTool.setBrushFlow(0.1);
        brushTool.setBrush(new TestBrush());
        await this.pictureEditor.layersManager.addBulkLayers(mockLayers);
        // pictureEditor.layersManager.setActiveLayer(pictureEditor.layersManager.layers[2]);
        runTests(this.pictureEditor.layersManager);
    }


}