import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { autorun } from 'mobx';
import {
    BrushTool,
    FillBrush,
    PictureEditor,
    StandardBrush,
    SampledTestBrush,
    TestBrush,
    EraserTool,
    IBrush,
    IRGBA,
} from 'picture-editor';
import { runTests } from '../test';
import { KeyController } from './key-controller/key.controller';
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
    public brushTool: BrushTool;
    public initialColor: IRGBA = { r: 0, g: 139, b: 5, a: 1 };
    public brushMode = 'brush';
    public logMode = false;

    private keyController!: KeyController;

    constructor(
        private changeDetectorRef: ChangeDetectorRef
    ) {

        if (typeof Worker !== 'undefined') {
            // Create a new
            // this.brushWorker = new Worker(new URL('~/app.worker', import.meta.url));
          } else {
            // Web Workers are not supported in this environment.
            // You should add a fallback so that your program still executes correctly.
          }
    }

    ngOnInit() {
    }

    async ngAfterViewInit() {
        this.pictureEditor = new PictureEditor({
            placeholder: this.viewPort.nativeElement,
            documentConfig: {
                width: 2000,
                height: 1200,
            },
            viewportConfig: {
                //width: 1000,
                //height: 500,
                zoom: 1,
            },
            workerScript: './picture-worker.js',
        });

        this.keyController = new KeyController(this.pictureEditor, this.viewPort.nativeElement);
        this.pictureEditor.viewport.window.addEventListener('wheel', (evt: WheelEvent) => {
            const direction = evt.deltaY < 0;
            const position = { x: evt.pageX, y: evt.pageY };
            console.log('Position', position);
            this.pictureEditor.page.setZoom(position, direction);
        });

        this.pictureEditor.setActiveTool(BrushTool);
        this.pictureEditor.setActiveColor(this.initialColor);
        this.changeDetectorRef.detectChanges();

        this.brushTool = this.pictureEditor.toolManager.getToolInstance<BrushTool>(BrushTool);
        this.changeDetectorRef.detectChanges();
        this.brushTool.setPointsLog(this.logMode);
        const brush = new StandardBrush();
        // const newBrush = new TestBrush(10, 0.2, 0.2);
        const extendedBrush = new SampledTestBrush(120, 0.01, 0.5);
        // extendedBrush.stepRatio = 0.1;
        // const fillBrush = new FillBrush();

        // const colorPickerTool = this.pictureEditor.toolManager.getToolInstance<ColorPickerTool>(ColorPickerTool);
        autorun(() => {
            this.initialColor = this.pictureEditor.activeColor;
        });

        // this.brush = brush;
        // this.brush = newBrush;
        // this.brush = fillBrush;
        this.brush = extendedBrush;

        brush.setup({
            size: 120,
            hardness: 1,
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

    public changeColor(color: IRGBA) {
        this.pictureEditor?.setActiveColor(color);
        this.changeDetectorRef.detectChanges();
    }

    public toggleLogMode() {
        this.logMode = !this.logMode;
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