import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PictureEditorModule } from './picture-editor-component/picture-editor.module';

@NgModule({
    imports: [
        CommonModule,
        PictureEditorModule,
    ],
    exports: [
        PictureEditorModule
    ]
})
export class CommonSharedModule {}