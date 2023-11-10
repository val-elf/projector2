/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Category
 */
export interface ICategory {
  '_coretype': string;
  '_hash': string;
  '_id'?: TObjectId;
  description: string;
  name: string;
}
