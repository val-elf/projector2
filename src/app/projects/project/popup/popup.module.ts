import { NgModule } from '@angular/core';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectFormComponent } from './project-form/project-form.component';
import { CommonModule } from '@angular/common';
import { CommonAppModule } from '~/common/common.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatSidenavModule,
        MatCheckboxModule,
        CommonAppModule,
    ],
    declarations: [
        ProjectSettingsComponent,
        ProjectFormComponent,
    ],
    exports: [
        ProjectSettingsComponent,
        ProjectFormComponent,
    ],
    providers: [],
})
export class PopupModule {}