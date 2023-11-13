import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ScrollableComponent } from "./scrollable/scrollable.component";
import { RoundSliderModule } from "./round-slider/round-slider.module";
import { LayoutComponent } from "./layout/layout.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from './input/input.component';
import { InputFormErrorsComponent } from './input/errors/errors.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    declarations: [
        LayoutComponent,
        ScrollableComponent,
        InputComponent,
        InputFormErrorsComponent,
    ],
    exports: [
        LayoutComponent,
        RoundSliderModule,
        ScrollableComponent,
        InputComponent,
    ],
})
export class UiModule {}
