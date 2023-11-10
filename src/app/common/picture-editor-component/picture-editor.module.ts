import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { PictureEditorComponent } from './picture-editor.component';
import { ToolPanelComponent } from './tool-panel/too-panel.component';
import { BrushSettingsComponent } from './tool-panel/brush/brush.component';
import { LayersManagerModule } from './layers-manager/layers-manager.module';
import { RoundSliderModule } from '../ui/round-slider/round-slider.module';

@NgModule({
    imports: [
        CommonModule,
        MatSliderModule,
        MatFormFieldModule,
        RoundSliderModule,
        LayersManagerModule,
    ],
    declarations: [
        PictureEditorComponent,
        ColorSelectorComponent,
        ToolPanelComponent,
        BrushSettingsComponent,
    ],
    exports: [
        PictureEditorComponent,
    ],
})
export class PictureEditorModule {}