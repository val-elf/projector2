import { IPreview } from '~/services/api/models';
import { IDbObjectBase } from './base-server.model';

export interface IPreviewOwner extends IDbObjectBase {
    preview?: IPreview;
}
