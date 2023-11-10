import { AfterViewChecked, Component, Input, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';
import { IPreviewOwner } from '~/models/preview.model';
import { IPreview } from '~/services/api/models';

export enum EIconTypes {
    normal = 'normal',
    circle = 'circle',
};

@Component({
    selector: 'app-preview',
    templateUrl: './preview-image.component.html',
    styleUrls: ['./preview-image.component.scss'],
})
export class PreviewImageComponent implements AfterViewChecked {
    @Input() owner: IPreviewOwner;
    @Input() expandable: boolean = false;
    @Input() type: EIconTypes = EIconTypes.normal;


    private mouseOver: boolean = false;
    private img: HTMLImageElement | null = new Image(); // successfully downloaded image;

    @Output() setPreviewUrl: EventEmitter<string> = new EventEmitter<string>();

    public get previewStyle() {
        return {
            width: `${this.width}px`,
            height: this.height,
            backgroundImage: `url(${this.previewUrl})`,
        };
    }

    @HostListener('mouseover')
    public onMouseOver() {
        this.mouseOver = true;
    }

    @HostListener('mouseleave')
    public onMouseLeave() {
        this.mouseOver = false;
    }

    get commonClass() {
        return {
            expanded: this.expanded,
            [`icon-${this.owner._coretype}`]: true
        }
    }

    @HostBinding('class.circle') get circle() {
        return this.type === EIconTypes.circle;
    }

    public get expanded() {
        return this.expandable && this.mouseOver;
    }

    @HostBinding('class.expandable') get expandableClass() {
        return this.expandable;
    }

    private get preview(): IPreview | undefined {
        return this.owner?.preview;
    }

    @HostBinding('style.width.px')
    public get width(): number {
        return this.preview?.width;
    }

    public get height(): string | undefined {
        if (!this.expanded && this.type === EIconTypes.circle) {
            return;
        }
        return `${this.preview?.height}px`;
    }

    private get previewUrl(): string {
        return this.preview?.preview ?
            `data:image/png;base64,${this.preview.preview}` :
            `/api/dbobjects/${this.owner._id}/preview/${this.owner._coretype}`;
    }

    ngAfterViewChecked(): void {
        if (this.img === null || this.img.src !== '') {
            return;
        }
        this.img.src = this.previewUrl;
        this.img.addEventListener('load', () => {
            this.setPreviewUrl.emit(this.previewUrl);
        });
        this.img.addEventListener('error', () => {
            this.img = null;
        });
    }
}
