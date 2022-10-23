import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayersManagerComponent } from './layers-manager.component';
import { LayerComponent } from './layer/layer.component';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule
    ],
    declarations: [
        LayersManagerComponent,
        LayerComponent,
    ],
    exports: [
        LayersManagerComponent
    ]
})
export class LayersManagerModule {}
