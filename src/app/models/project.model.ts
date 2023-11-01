import { IBaseServerItem } from './base-server.model';
import { IPreview, IPreviewOwner } from './preview.model';

export interface IProject extends IBaseServerItem, IPreviewOwner {
    name: string;
    description: string;
}