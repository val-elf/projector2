/* tslint:disable */
/* eslint-disable */
import { IFile } from './i-file';
import { IPreview } from './i-preview';
import { TObjectId } from './t-object-id';

/**
 * Output document interface (sends from client side)
 */
export interface IDocument {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  file?: IFile;
  metadata?: {
'size'?: number;
'type'?: string;
'lastModified'?: number;
};
  preview?: IPreview;
  title: string;
}
