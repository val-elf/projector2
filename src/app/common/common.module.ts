import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutComponent } from './components/layout/layout.component';
import { ProjectsListComponent } from './components/project/projects-list/projects-list.component';
import { ProjectListItemComponent } from './components/project/project-list-item/project-list-item.component';
import { PreviewImageComponent } from './components/preview/preview-image.component';
import { Scrollable } from './components/scrollable/scrollable.component';
import { AuthGuard } from './guards/auth.guard';
import { PictureEditorModule } from './picture-editor-component/picture-editor.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { ServicesModule } from '~/services/services.module';
import { PipesModule } from '~/pipes/pipes.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        PictureEditorModule,
        RouterModule,
        PipesModule,
    ],
    declarations: [
        LayoutComponent,
        ProjectsListComponent,
        ProjectListItemComponent,
        PreviewImageComponent,
        ProjectListItemComponent,
        UserProfileComponent,
        Scrollable,
    ],
    exports: [
        PictureEditorModule,
        LayoutComponent,
        ProjectsListComponent,
        PreviewImageComponent,
        ProjectListItemComponent,
        UserProfileComponent,
        Scrollable,
        PipesModule,
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
export class CommonSharedModule {}