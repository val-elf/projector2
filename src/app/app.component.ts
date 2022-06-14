import { Component, ElementRef, HostBinding, ViewChild } from "@angular/core";
import { BrushTool } from "picture-editor/build/tools";
import { PictureEditor } from "./common/picture-editor";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    @ViewChild('viewport') viewPort: ElementRef;

    ngAfterViewInit() {
        const pictureEditor = new PictureEditor({
            placeholder: this.viewPort.nativeElement,
            documentConfig: {
                width: 3000,
                height: 2000,
            },
            viewportConfig: {
                width: 500,
                height: 400,
            }
        });
        const brushTool = new BrushTool();
        pictureEditor.setActiveTool(brushTool);
        pictureEditor.addLayer();
    }
}