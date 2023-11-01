/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Preview interface for dbObjects
 */
export interface IPreview {
  '_id'?: TObjectId;
  hash: string;
  height: number;
  preview?: string;
  type: string;
  width: number;
}
