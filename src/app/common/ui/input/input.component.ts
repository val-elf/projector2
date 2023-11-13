import { Component, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: InputComponent
        }
    ]
})
export class InputComponent<T extends string | number> implements ControlValueAccessor, OnInit {
    value: T;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() rows: number | string;
    @Input() required: boolean | string = false;

    private _type: string = 'text';

    get type() {
        return this._type;
    }

    @Input() set type(type: string) {
        this._type = type;
    }

    public disabled: boolean = false;

    private onChange = (value: T) => {};
    private onTouched = () => {};

    public ngControl: NgControl;

    constructor(
        private injector: Injector,
    ) {

    }

    ngOnInit() {
        this.ngControl = this.injector.get(NgControl);
    }

    public handleChange(event: Event) {
        this.onChange(event.target['value']);
    }

    public handleInput(event: Event) {
        // this.onTouched();
        // this.onChange((event as InputEvent).target['value'] as T);
    }

    writeValue(value: T): void {
        this.value = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled
    }
}