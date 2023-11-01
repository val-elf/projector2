import { AfterViewChecked, Component, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import { IPreview, IPreviewOwner } from '~/models/preview.model';

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

    private img: HTMLImageElement | null = new Image(); // successfully downloaded image;

    @Output() setPreviewUrl: EventEmitter<string> = new EventEmitter<string>();

    @HostBinding('style') get style() {
        return {
            width: this.width,
            height: this.height,
        };
    }

    public get previewStyle() {
        return {
            backgroundImage: `url(${this.previewUrl})`,
        };
    }

    @HostBinding('class') get commonClass() {
        return {
            [`icon-${this.owner._coretype}`]: true
        }
    }

    @HostBinding('class.circle') get circle() {
        return this.type === EIconTypes.circle;
    }

    @HostBinding('class.expandable') get expandableClass() {
        return this.expandable;
    }

    private get preview(): IPreview | undefined {
        return this.owner?.preview;
    }

    private get width(): string {
        return this.type === EIconTypes.circle ? '' : `${this.preview?.width}px`;
    }

    private get height(): string {
        return this.type === EIconTypes.circle ? '' : `${this.preview?.height}px`;
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
