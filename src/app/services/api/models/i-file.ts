/* tslint:disable */
/* eslint-disable */
import { IFileStatus } from './i-file-status';
import { IPreview } from './i-preview';
import { TObjectId } from './t-object-id';

/**
 * Main output File interface
 */
export interface IFile {
  '_coretype': string;
  '_hash': string;
  '_id'?: TObjectId;
  '_status'?: IFileStatus;
  '_transcode'?: string;
  exif?: {
[key: string]: (string | number | boolean);
};
  file: string;
  name: string;
  preview?: IPreview;
  size: number;
  transcoder?: string;
  type: string;
}
