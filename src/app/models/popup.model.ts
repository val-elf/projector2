import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

export enum EPopupActions {
    Save = 'save',
    Cancel = 'cancel',
}

export interface IPopupOptions {
    title: string | TemplatePortal;
    actions: EPopupActions[];
}

export interface IPopupDataProcessor {
    beforeClose: Subject<{ action: EPopupActions, result$: Subject<boolean> }>;
    setActionState(action: EPopupActions, state: boolean): void;
}