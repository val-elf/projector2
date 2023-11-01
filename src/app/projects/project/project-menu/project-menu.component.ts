import { Component } from '@angular/core';

@Component({
    selector: 'app-project-menu',
    templateUrl: './project-menu.component.html',
    styleUrls: ['./project-menu.component.scss'],
})
export class ProjectMenuComponent {
    public menuItems = [
        {
            title: 'Plot',
            url: 'plot',
        },
        {
            title: 'Characters',
            url: 'characters',
        },
        {
            title: 'Locations',
            url: 'locations',
        },
        {
            title: 'Artifacts',
            url: 'artifacts',
        },
        {
            title: 'Documents',
            url: 'documents',
        }
    ];
}