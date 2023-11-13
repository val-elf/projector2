import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '~/common/components/popup/popup.component';
import { IPopupOptions } from '~/models/popup.model';


@Injectable({ providedIn: 'root' })
export class PopupService {
    constructor(
        private dialog: MatDialog
    ) {

    }

    showPopup<T>(
        Component: ComponentType<T>,
        options: IPopupOptions,
        data: T
    ) {
        this.dialog.open(PopupComponent, {
            width: 'auto',
            data: {
                component: Component,
                title: options.title,
                actions: options.actions,
                data
            }
        });
    }
}