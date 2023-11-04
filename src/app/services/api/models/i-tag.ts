/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Tag
 */
export interface ITag {
  '_coretype': string;
  '_hash': string;
  '_id'?: TObjectId;
  name: string;
}
