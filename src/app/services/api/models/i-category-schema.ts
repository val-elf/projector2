/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Hyerarchial structure of categories for the Project
 */
export interface ICategorySchema {
  '_coretype': string;
  '_hash': string;
  '_id'?: TObjectId;
  description: string;
  name: string;
}
