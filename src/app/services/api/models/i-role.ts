/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * User Role interface
 */
export interface IRole {
  '_coretype': string;
  '_hash': string;
  '_id'?: TObjectId;
  name: string;
  permissions: Array<TObjectId>;
}
