import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '~/common/components/popup/popup.component';

@Injectable({ providedIn: 'root' })
export class PopupService {
    constructor(
        private dialog: MatDialog
    ) {

    }

    showPopup<T>(component, data: T) {
        console.log('COmponent', component);
        this.dialog.open(PopupComponent, {
            width: '250px',
            data: { component, data }
        });
    }
}