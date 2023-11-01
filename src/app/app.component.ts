import { Component } from "@angular/core";
import { AuthorizationService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public get isAuthorized(): boolean {
        return this.authorizationService.isAuthorized;
    }

    constructor(
        private authorizationService: AuthorizationService,
    ) {}
}