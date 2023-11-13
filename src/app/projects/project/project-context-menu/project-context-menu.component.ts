import { Component, TemplateRef, HostBinding, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '~/services/api/models';
import { PopupService } from '~/services/popup/popup.service';
import { ProjectSettingsComponent } from '../popup/project-settings/project-settings.component';
import { EPopupActions } from '~/models/popup.model';
import { ProjectFormComponent } from '../popup/project-form/project-form.component';
import { TemplatePortal } from '@angular/cdk/portal';

interface IPopupData {
    project: IProject;
}

@Component({
    selector: 'app-project-context-menu',
    templateUrl: './project-context-menu.component.html',
    styleUrls: ['./project-context-menu.component.scss']
})
export class ProjectContextMenuComponent {
    private isOpened: boolean = false;
    public project: IProject;

    @ViewChild('popupEditHeader') popupEditHeader: TemplateRef<any>;
    @ViewChild('popupSettingsHeader') popupSettingsHeader: TemplateRef<any>;

    private runToFlightOut: NodeJS.Timeout;

    @HostListener('mouseover') onMouseOver() {
        clearTimeout(this.runToFlightOut);
        this.isOpened = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.runToFlightOut = setTimeout(() => {
            this.isOpened = false;
        }, 400);
    }

    @HostBinding('class.open') get isOpen() {
        return this.isOpened;
    }

    constructor(
        private activeRoute: ActivatedRoute,
        private popupService: PopupService,
        private _viewContainerRef: ViewContainerRef,
    ) {
        this.activeRoute.data.subscribe(data => {
            this.project = data.project;
        });
    }

    public showEditForm() {
        this.popupService.showPopup<IPopupData>(ProjectFormComponent, {
            title: new TemplatePortal(this.popupEditHeader, this._viewContainerRef),
            actions: [EPopupActions.Cancel, EPopupActions.Save]
        }, {
            project: this.project,
        });
    }

    public showProjectSettings() {
        this.popupService.showPopup<IPopupData>(ProjectSettingsComponent, {
            title: new TemplatePortal(this.popupSettingsHeader, this._viewContainerRef),
            actions: [EPopupActions.Cancel, EPopupActions.Save]
        },{
            project: this.project,
        });
    }
}