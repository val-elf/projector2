import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthorizationService } from './auth.service';
import { PopupService } from './popup/popup.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        MatDialogModule,
    ],
    providers: [
        AuthorizationService,
        PopupService,
    ]
})
export class ServicesModule {}