import { NgModule } from '@angular/core';
import { RoundSliderModule } from './round-slider/round-slider.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        RoundSliderModule
    ],
})
export class SharedComponentsModule {}