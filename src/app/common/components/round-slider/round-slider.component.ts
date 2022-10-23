import { CdkDrag } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { clearSelection, getAngle, I2DCoordinates } from 'picture-editor';

@Component({
    selector: 'ui-round-slider',
    templateUrl: './round-slider.component.html',
    styleUrls: ['./round-slider.component.scss'],
    providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: forwardRef(() => RoundSliderComponent)
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => RoundSliderComponent),
			multi: true
		}
    ]
})
export class RoundSliderComponent implements AfterViewInit, ControlValueAccessor, OnChanges {
    private ancor!: I2DCoordinates;
    @Input() radius: number = 20;
    @Input() value: number = 0.9;
    @Input() min: number = 0;
    @Input() max: number = 1;
    @Input() step: number = 0.01;
    @Input() label: string;
    @Input() circleWidth: number = 3;
    @Input() disabled: boolean = false;
    @Input() color: string = '#6699EE';

    @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() onValueSelect: EventEmitter<void> = new EventEmitter<void>();
    @Output() onValueSelectEnd: EventEmitter<void> = new EventEmitter<void>();
    @Output() onDragEnd: EventEmitter<I2DCoordinates> = new EventEmitter<I2DCoordinates>();

    public get diameter(): number { return this.radius * 2; }

    @ViewChild('roundCircle') roundCanvasRef: ElementRef<HTMLCanvasElement>;

    public get roundCanvas() {
        return this.roundCanvasRef?.nativeElement;
    }

    public onChange = () => {};
    public onTouch = () => {};

    public ngAfterViewInit() {
        this.renderState();
    }

    public writeValue(value: any): void {
        this.value = Number(value);
        this.renderState();
    }
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    public registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    public setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public get clipPath() {
        const circleWidthP = this.circleWidth / this.radius + 0.01;
        return `
            M 0.5 0 a 0.5 0.5 0 1 0 0.0001 0 Z
            M 0.5 ${circleWidthP} a ${0.5 - circleWidthP} ${0.5 - circleWidthP} 0 1 1 -0.0001 0 Z
        `;
    }

    private get pointerPosition() {
        return (this.value - this.min) / (this.max - this.min);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.value) {
            this.renderState();
        }
    }

    public startMove(event: PointerEvent) {
        this.ancor = { x: event.pageX - event.offsetX, y: event.pageY - event.offsetY };
        document.addEventListener('pointermove', this.move);
        document.addEventListener('pointerup', this.endMove);
        this.onValueSelect.emit()
        event.stopPropagation();
    }

    private move = (event: PointerEvent) => {
        const position = { x: event.pageX - this.ancor.x, y: event.pageY - this.ancor.y };
        this.defineValueByPosition(position);
        clearSelection();
        event.stopPropagation();
    }

    private endMove = (event: PointerEvent) => {
        const position = { x: event.pageX - this.ancor.x, y: event.pageY - this.ancor.y };
        console.log('End move', position, this.value);
        this.defineValueByPosition(position);
        document.removeEventListener('pointermove', this.move);
        document.removeEventListener('pointerup', this.endMove);
        this.onValueSelectEnd.emit();
        event.stopPropagation();
    }

    public endDrag(event: { source: CdkDrag, event: MouseEvent | TouchEvent }) {
        const position = event.source.getFreeDragPosition();
        this.onDragEnd.emit(position);
    }

    private defineValueByPosition(position: I2DCoordinates) {
        const center = { x: this.radius, y: this.radius };
        const angle = getAngle(center, position);
        const prevValue = this.pointerPosition;
        let pvalue = angle / 2 / Math.PI;
        if (prevValue > 0.95 && pvalue < 0.05) pvalue = 1;
        if (prevValue < 0.05 && pvalue > 0.95) pvalue = 0;
        this.setValue(this.min + pvalue * (this.max));
    }

    public uniqueKey: string = Math.random().toString();

    private setValue(value) {
        this.value = value;
        this.valueChange.emit(value);
        this.renderState();
    }

    private renderState() {
        if (!this.roundCanvas) return;

        const ctx = this.roundCanvas.getContext('2d');
        const value = this.pointerPosition;
        ctx.clearRect(0, 0, this.radius * 2, this.radius * 2);
        ctx.lineWidth = this.circleWidth;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.ellipse(this.radius, this.radius, this.radius - this.circleWidth, this.radius - this.circleWidth, 0, 0, 360);
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = this.color;
        const endAngle = Math.PI * 2 * value;
        ctx.lineWidth = this.circleWidth - 3;
        ctx.beginPath();
        ctx.ellipse(this.radius, this.radius, this.radius - this.circleWidth, this.radius - this.circleWidth, 0, -Math.PI / 2, endAngle - Math.PI / 2);
        ctx.stroke();
    }
}