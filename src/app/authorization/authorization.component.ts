import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
        private router: Router,
    ) { }

    public login(): void {
        this.authorizationService.login(
            this.formGroup.value.login,
            this.formGroup.value.password
        ).subscribe(session => {
            console.log('User is', session.userId);
            this.router.navigate(['/']);
        });
    }

}