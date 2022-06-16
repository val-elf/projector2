import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonSharedModule } from "~/common/common.module";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        CommonSharedModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}