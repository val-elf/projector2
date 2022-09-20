import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { PictureEditorComponent } from './picture-editor.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PictureEditorComponent,
        ColorSelectorComponent,
    ],
    exports: [
        PictureEditorComponent,
    ],
})
export class PictureEditorModule {}