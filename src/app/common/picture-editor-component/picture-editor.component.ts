import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
    BrushTool,
    FillBrush,
    PanoramerTool,
    PictureEditor,
    StandardBrush,
    SampledTestBrush,
    TestBrush,
    EraserTool,
    IBrush,
    ColorSelector,
    IRGBA
} from 'picture-editor';
import { runTests } from '../test';
import { mockLayers } from './layers-mock';

@Component({
    selector: 'app-picture-editor',
    templateUrl: './picture-editor.component.html',
    styleUrls: ['./picture-editor.component.scss'],
})
export class PictureEditorComponent implements AfterViewInit, OnInit{
    @ViewChild('viewport') viewPort: ElementRef;

    public pictureEditor: PictureEditor;

    private brush: IBrush;
    private brushTool: BrushTool;
    public initialColor: IRGBA = { r: 155, g: 0, b: 0, a: 1 };

    constructor(
        private element: ElementRef,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
    }

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
        this.pictureEditor.setActiveColor(this.initialColor);
        this.changeDetectorRef.detectChanges();

        this.brushTool = this.pictureEditor.toolManager.getToolInstance<BrushTool>(BrushTool);
        this.brushTool.setPointsLog(this.logMode);
        const brush = new StandardBrush();
        const newBrush = new TestBrush(10, 0.2, 0.2);
        const extendedBrush = new SampledTestBrush(10, 1, 0.5);
        // extendedBrush.stepRatio = 0.1;
        const fillBrush = new FillBrush();

        // this.brush = brush;
        // this.brush = newBrush;
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

        this.brushTool.brush = this.brush;

        await this.pictureEditor.layersManager.addBulkLayers(mockLayers);
        // this.pictureEditor.layersManager.setActiveLayer(pictureEditor.layersManager.layers[2]);
        runTests(this.pictureEditor);
    }

    brushMode = 'brush';
    logMode = false;

    public changeColor(color: IRGBA) {
        this.pictureEditor?.setActiveColor(color);
        this.changeDetectorRef.detectChanges();
    }

    public toggleLogMode() {
        this.logMode = !this.logMode;
        console.log('Toggle log mode', this.logMode);
        this.brushTool.setPointsLog(this.logMode);
    }

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