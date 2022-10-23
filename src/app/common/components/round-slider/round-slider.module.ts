import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { RoundSliderComponent } from './round-slider.component';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
    ],
    declarations: [RoundSliderComponent],
    exports: [RoundSliderComponent],
})
export class RoundSliderModule {}