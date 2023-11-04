/* tslint:disable */
/* eslint-disable */
import { IRole } from './i-role';
import { TObjectId } from './t-object-id';

/**
 * User interface for server side
 */
export interface IServerUser {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  '_roles'?: Array<TObjectId>;
  email?: string;
  login?: string;
  password?: string;
  roles: Array<IRole>;
}
