import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { areColorsEqual, ColorSelectorComponent as ColorSelector, IRGBA } from 'picture-editor';

@Component({
    selector: 'app-color-selector',
    templateUrl: './color-selector.component.html',
    styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent implements AfterViewInit {
    public readonly thickness = 11.5;
    private colorSelector: ColorSelector;

    @ViewChild('container') container: ElementRef<HTMLDivElement>;

    @Input() color: IRGBA = { r: 255, g: 0, b: 0 };
    @Output() onChangeColor: EventEmitter<IRGBA> = new EventEmitter<IRGBA>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes.color && this.color) {
            this.colorSelector?.setColor(this.color);
        }
    }

    public ngAfterViewInit() {
        this.colorSelector = new ColorSelector(this.container.nativeElement, {
            thickness: this.thickness,
            initialColor: this.color ?? { r: 255, g: 0, b: 0 },
            onColorSelect: color => {
                if (!areColorsEqual(color, this.color)) {
                    this.color = color;
                    this.onChangeColor.emit({ ...color });
                }
            }
        });
    }
}