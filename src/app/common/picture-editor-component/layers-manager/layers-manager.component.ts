import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ILayer, PictureEditor } from 'picture-editor';

@Component({
    selector: 'pe-layers-manager',
    templateUrl: './layers-manager.component.html',
    styleUrls: ['./layers-manager.component.scss'],
})
export class LayersManagerComponent {
    @Input() editor: PictureEditor;

    private get layersManager() {
        return this.editor.layersManager;
    }

    public get activeLayer() {
        return this.layersManager.activeLayer;
    }

    public get layers() {
        return this.layersManager.layers;
    }

    constructor(
        private cd: ChangeDetectorRef,
    ) {}

    ngAfterViewChecked() {
        this.cd.markForCheck();
    }

    public createNewLayer() {
        const newLayer = this.layersManager.createNewLayer();
        this.layersManager.setActiveLayer(newLayer);
    }

    public removeLayer(layer: ILayer) {
        const previousLayer = this.layersManager.removeLayer(layer);
        if (previousLayer) {
            this.layersManager.setActiveLayer(previousLayer);
        }
        this.cd.detectChanges();
    }

    public selectLayer(layer: ILayer) {
        this.layersManager.setActiveLayer(layer);
    }
}