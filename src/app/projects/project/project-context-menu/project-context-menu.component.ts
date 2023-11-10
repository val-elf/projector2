import { Component, HostBinding, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '~/services/api/models';
import { PopupService } from '~/services/popup/popup.service';
import { ProjectSettingsComponent } from '../popup/project-settings/project-settings.component';

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
    @HostListener('mouseover') onMouseOver() {
        this.isOpened = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.isOpened = false;
    }

    @HostBinding('class.open') get isOpen() {
        return this.isOpened;
    }

    constructor(
        private activeRoute: ActivatedRoute,
        private popupService: PopupService,
    ) {
        this.activeRoute.data.subscribe(data => {
            this.project = data.project;
        });
    }

    public showProjectSettings() {
        this.popupService.showPopup<IPopupData>(ProjectSettingsComponent, {
            project: this.project,
        });
    }
}