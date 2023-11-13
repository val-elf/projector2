import { Component, ChangeDetectorRef, Inject, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { EPopupActions, IPopupDataProcessor } from '~/models/popup.model';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';

class ActionsProcessor implements IPopupDataProcessor {
    constructor(private popup: PopupComponent<unknown>) {

    }

    public beforeClose = new Subject<{
        action: EPopupActions,
        result$: Subject<boolean>
    } | undefined>();

    setActionState(action: EPopupActions, state: boolean): void {
        this.popup.actionStates[action] = state;
    }

}

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    standalone: true,
    imports: [
        NgComponentOutlet,
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        PortalModule,
    ],
})
export class PopupComponent<T extends { [key: string]: any }> {
    public show: boolean = false;
    public component: any;
    public parameters: T;

    public actionTypes = EPopupActions;

    public title: string | TemplatePortal;

    public titlePortal: TemplatePortal;

    public actions?: EPopupActions[];
    public processor: IPopupDataProcessor = new ActionsProcessor(this);

    @ViewChild('defaultTitle') defaultTitle: TemplateRef<any>;

    public actionStates = {
        [EPopupActions.Save]: true,
        [EPopupActions.Cancel]: true,
    }

    constructor(
        public dialogRef: MatDialogRef<PopupComponent<T>>,
        private viewContainerRef: ViewContainerRef,
        private cd: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: {
            component: any,
            title: string,
            actions?: EPopupActions[],
            data: T,
        },
    ) {
        this.component = data.component;
        this.parameters = { ...data.data, dialog: dialogRef, processor: this.processor };
        this.title = data.title;
        this.actions = data.actions;
        this.dialogRef.disableClose = true;
        this.dialogRef.addPanelClass('popup-dialog');
    }

    ngAfterViewInit() {
        this.titlePortal = this.title instanceof TemplatePortal ? this.title : new TemplatePortal(this.defaultTitle, this.viewContainerRef);
        this.cd.detectChanges();
    }

    onSave() {
        if (this.processor.beforeClose.observed) {
            const result$ = new Subject<boolean>();
            result$.subscribe((result: boolean) => {
                if (result) {
                    this.dialogRef.close(this.actionTypes.Save);
                }
            });
            this.processor.beforeClose.next({ action: EPopupActions.Save, result$ });
        } else {
            this.dialogRef.close(this.actionTypes.Save);
        }
    }
}
