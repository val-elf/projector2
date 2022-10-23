import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BrushTool, I2DCoordinates, PictureEditor, RGB2rgba } from 'picture-editor';

@Component({
    selector: 'pe-brush-settings',
    templateUrl: './brush.component.html',
    styleUrls: ['./brush.component.scss'],
})
export class BrushSettingsComponent implements OnChanges{
    @Input() editor: PictureEditor;
    @Input() brushTool: BrushTool;
    public brushSizeShow = false;
    public brushSizerPosition = { x: 0, y: 0 };

    public showSizeSlider = true;
    public showFlowSlider = true;
    public showHardnessSlider = true;

    public brushSize: number = 20;
    public brushFlow: number = 0.5;
    public brushHardness: number = 1;

    public get currentColor() {
        return RGB2rgba(this.editor.activeColor);
    }

    public showBrushSizer() {
        this.brushSizeShow = true;
    }

    public setBrushSizerPosition(newPosition: I2DCoordinates) {
        this.brushSizerPosition = newPosition;
    }

    public hideBrushSizer() {
        this.brushSizeShow = false;
    }

    public setBrushSize() {
        (this.brushTool.brush.brushSettings as any).size = this.brushSize;
    }

    public setBrushFlow() {
        (this.brushTool.brush.brushSettings as any).flow = this.brushFlow;
    }

    public setBrushHardness() {
        (this.brushTool.brush.brushSettings as any).hardness = this.brushHardness;
    }


    ngOnChanges(changes: SimpleChanges) {
        if (changes.brushTool && this.brushTool) {
            console.log('Brush tool', this.brushTool);
            const brush = this.brushTool.brush;
            if (brush) {
                this.brushSize = (brush.brushSettings as any).size;
            }
        }
    }

}