import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizationService } from '~/services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './authorization.component.html'
})
export class AuthorizationComponent {

    public formGroup: FormGroup = new FormGroup({
        login: new FormControl(),
        password: new FormControl(),
    });

    constructor(
        private authorizationService: AuthorizationService,
        private activeRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.activeRoute.url.subscribe(url => {
            if (url[0].path === 'logout') {
                this.authorizationService.logout();
                this.router.navigate(['/']);
            }
        });
    }

    public login(): void {
        this.authorizationService.login(
            this.formGroup.value.login,
            this.formGroup.value.password
        ).subscribe(session => {
            this.router.navigate(['/']);
        });
    }

}