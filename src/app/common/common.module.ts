import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PictureEditorComponent } from "./picture-editor-component/picture-editor.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PictureEditorComponent,
    ],
    exports: [
        PictureEditorComponent,
    ]
})
export class CommonSharedModule {}