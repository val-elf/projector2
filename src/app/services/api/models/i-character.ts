/* tslint:disable */
/* eslint-disable */
import { IPreview } from './i-preview';
import { TObjectId } from './t-object-id';

/**
 * Main Character interface
 */
export interface ICharacter {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  description: string;
  name: string;
  preview?: IPreview;
  role: string;
}
