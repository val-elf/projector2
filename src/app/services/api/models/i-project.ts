/* tslint:disable */
/* eslint-disable */
import { IPreview } from './i-preview';
import { TObjectId } from './t-object-id';

/**
 * Project entity database schema
 */
export interface IProject {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  description?: string;
  name: string;
  preview?: IPreview;
}
