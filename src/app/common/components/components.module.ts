import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ProjectsListComponent } from './project/projects-list/projects-list.component';
import { ProjectListItemComponent } from './project/project-list-item/project-list-item.component';
import { PreviewImageComponent } from './preview/preview-image.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CharacterCardComponent } from './character/character-card/character-card.component';
import { LocationCardComponent } from './location/location-card/location-card.component';
import { ArtifactCardComponent } from './artifact/artifact-card.component';

import { PipesModule } from '~/pipes/pipes.module';
import { UiModule } from '../ui/ui.module';
import { DocumentCardComponent } from './document/document-card.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeItemComponent } from './tree-view/tree-item/tree-item.component';

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        RouterModule,
        MatIconModule,
        UiModule,
    ],
    declarations: [
        CharacterCardComponent,
        UserProfileComponent,
        ProjectsListComponent,
        ProjectListItemComponent,
        PreviewImageComponent,
        LocationCardComponent,
        ArtifactCardComponent,
        DocumentCardComponent,
        TreeViewComponent,
        TreeItemComponent,
    ],
    exports: [
        CharacterCardComponent,
        UserProfileComponent,
        ProjectsListComponent,
        ProjectListItemComponent,
        PreviewImageComponent,
        LocationCardComponent,
        ArtifactCardComponent,
        DocumentCardComponent,
        TreeViewComponent,
    ],
})
export class ComponentsModule {}