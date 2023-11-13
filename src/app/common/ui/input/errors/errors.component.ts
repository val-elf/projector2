import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-input-form-errors',
    templateUrl: './errors.component.html',
})
export class InputFormErrorsComponent {
    @Input() public errors: ValidationErrors = {};

    public get errorKeys() {
        return this.errors ? Object.keys(this.errors) : [];
    }
}