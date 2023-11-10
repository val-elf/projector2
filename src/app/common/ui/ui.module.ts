import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ScrollableComponent } from "./scrollable/scrollable.component";
import { RoundSliderModule } from "./round-slider/round-slider.module";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LayoutComponent,
        ScrollableComponent
    ],
    exports: [
        LayoutComponent,
        RoundSliderModule,
        ScrollableComponent,
    ],
})
export class UiModule {}