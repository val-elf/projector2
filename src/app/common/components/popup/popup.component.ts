import { CommonModule, NgComponentOutlet } from '@angular/common';
import { AfterViewInit, Component, Inject, ViewChild, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    standalone: true,
    imports: [NgComponentOutlet, CommonModule, MatDialogModule]
})
export class PopupComponent<T> implements AfterViewInit {
    public show: boolean = false;
    public component: any;
    public parameters: T;

    @ViewChild('body') bodyRef: TemplateRef<any>;

    constructor(
        public dialogRef: MatDialogRef<PopupComponent<T>>,
        @Inject(MAT_DIALOG_DATA) public data: { component: any, data: T },
    ) {
        console.log('Data:', data.component);
        this.component = data.component;
        this.parameters = data.data;
    }

    ngAfterViewInit() {
        console.log('VF', this.parameters);
    }
}
