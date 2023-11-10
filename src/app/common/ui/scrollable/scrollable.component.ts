import { AfterViewInit, Component, ElementRef, HostBinding, EventEmitter, Input, Output } from '@angular/core';
import { EScrollableOrientation, ScrollableEngine, ScrollableEngine2 } from './scrollable.engine';

@Component({
    selector: 'app-scrollable',
    templateUrl: 'scrollable.component.html',
    styleUrls: ['./scrollable.component.scss'],
})
export class ScrollableComponent implements AfterViewInit {
    private scrollableEngine: ScrollableEngine;
    @Input() orientation: EScrollableOrientation = EScrollableOrientation.Vertical;
    @Input() maxHeight?: number;
    @Input() minHeight?: number;
    @Input() sliderClass?: string;
    @Output() onReachEnd: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding('class') hostClass = 'scrollable';
    @HostBinding('style') get styles() {
        return {
            maxHeight: this.maxHeight ? this.maxHeight + 'px' : undefined,
            minHeight: this.minHeight ? this.minHeight + 'px' : undefined,
        };
    };

    constructor(
        private element: ElementRef,
    ) { }

    ngAfterViewInit() {
        this.scrollableEngine = new ScrollableEngine2(this.element.nativeElement, this.orientation);
        this.scrollableEngine.on('onReachEnd', evt => {
            this.onReachEnd.emit(evt);
        });
    }

}