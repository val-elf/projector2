import { Component, Input, HostBinding, ViewChild, ElementRef, HostListener, AfterViewInit }  from '@angular/core';
import { IProject } from '~/models/project.model';
import { EIconTypes } from '../../preview/preview-image.component';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
    selector: 'app-project-list-item',
    templateUrl: './project-list-item.component.html',
    styleUrls: ['./project-list-item.component.scss'],
})
export class ProjectListItemComponent implements AfterViewInit{
    @Input() public project: IProject;
    public circle = EIconTypes.circle;
    public backgroundUrl: string = '';
    private maxHeight: string;

    @HostBinding('class.highlight') public isHighlighted: boolean = false;
    @HostBinding('class.expanded') public isExpanded: boolean = false;

    private expandTimeout?: NodeJS.Timeout;

    @ViewChild('mainContainer') public mainContainer: ElementRef<HTMLElement>;
    @HostListener('mouseover') onHover() {
        this.expandTimeout = setTimeout(() => {
            this.mainContainer.nativeElement.style.zIndex = '1';
            this.mainContainer.nativeElement.style.maxHeight = this.maxHeight;
            this.isExpanded = true;
        }, 1000);
    }
    @HostListener('mouseout') onLeave() {
        this.mainContainer.nativeElement.style.maxHeight = '';
        if (this.expandTimeout) {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = undefined;
            this.isExpanded = false;
        }
    }

    setProjectIconUrl(url: string) {
        this.backgroundUrl = `url(${url})`;
    }

    ngAfterViewInit() {
        const { nativeElement } = this.mainContainer;
        const resizeObserver = new ResizeObserver(() => {
            this.maxHeight = (nativeElement.scrollHeight + 10) + 'px';
        });

        resizeObserver.observe(nativeElement);
        nativeElement.style.zIndex = '0';

        nativeElement.addEventListener('transitionend', (transitionInfo) => {
            const { propertyName } = transitionInfo;
            if (propertyName === 'max-height') {
                if (!this.mainContainer.nativeElement.style.maxHeight) {
                    this.mainContainer.nativeElement.style.zIndex = '0';
                    this.isHighlighted = false;
                } else {
                    this.isHighlighted = true;
                }
            }
        });
    }


}