import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { PictureEditorModule } from './picture-editor-component/picture-editor.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { ServicesModule } from '~/services/services.module';
import { ComponentsModule } from "./components/components.module";
import { PipesModule } from "~/pipes/pipes.module";
import { UiModule } from "./ui/ui.module";

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        PictureEditorModule,
        PipesModule,
        ComponentsModule,
        UiModule,
    ],
    exports: [
        PictureEditorModule,
        PipesModule,
        ComponentsModule,
        UiModule,
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ]
})
export class CommonAppModule {}