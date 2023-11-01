import { IBaseServerItem } from './base-server.model';

export interface IPreviewOwner extends IBaseServerItem {
    preview: IPreview;
}

export interface IPreview {
    type: string;
    height: number;
    width: number;
    preview?: string;
}