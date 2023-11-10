/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Hyerarchial structure of categories schemas for the Project
 */
export interface IHierarchyCategorySchemaItem {
  '_coretype': string;
  '_hash': string;
  '_id'?: TObjectId;
  children?: Array<IHierarchyCategorySchemaItem>;
  description: string;
  name: string;
}
