import { Component, ElementRef, ViewChild } from "@angular/core";
import { BrushTool, FillBrush, PanoramerTool, PictureEditor, StandardBrush, SampledTestBrush, TestBrush, EraserTool, IBrush } from "picture-editor";
import { runTests } from "../test";
import { mockLayers } from "./layers-mock";

@Component({
    selector: 'app-picture-editor',
    templateUrl: './picture-editor.component.html',
    styleUrls: ['./picture-editor.component.scss'],
})
export class PictureEditorComponent {
    @ViewChild('viewport') viewPort: ElementRef;

    private pictureEditor: PictureEditor;

    private brush: IBrush;

    async ngAfterViewInit() {
        const a = 0;
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
        this.pictureEditor.setActiveColor({ r: 155, g: 0, b: 0, a: 1 });

        const brushTool = this.pictureEditor.toolManager.getToolInstance<BrushTool>(BrushTool);
        const brush = new StandardBrush();
        const testBrush = new TestBrush(10, 0.9, 0.2);
        const extendedBrush = new SampledTestBrush(30, 1, 0.5);
        const fillBrush = new FillBrush();

        // this.brush = brush;
        // this.brush = testBrush;
        // this.brush = fillBrush;
        this.brush = extendedBrush;

        brush.setup({
            size: 120,
            hardness: 0.3,
            opacity: 1,
            stepRatio: 0.1,
            flow: 0.2,
            minSize: "1%",
            maxSize: "100%",
        });

        brushTool.brush = this.brush;

        await this.pictureEditor.layersManager.addBulkLayers(mockLayers);
        // pictureEditor.layersManager.setActiveLayer(pictureEditor.layersManager.layers[2]);
        // runTests(this.pictureEditor);
    }

    brushMode = 'brush';

    public toggleBrushMode() {
        if (this.brushMode === 'brush') {
            this.brushMode = 'eraser';
        } else this.brushMode = 'brush';

        switch(this.brushMode) {
            case 'eraser':
                const toolInstance = this.pictureEditor.setActiveTool(EraserTool);
                toolInstance.setBrush(this.brush);
                break;
            case 'brush':
                this.pictureEditor.setActiveTool(BrushTool);
                break;
        }
    }


}