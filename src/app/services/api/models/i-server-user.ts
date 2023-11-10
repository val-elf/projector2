/* tslint:disable */
/* eslint-disable */
import { IRole } from './i-role';
import { TObjectId } from './t-object-id';

/**
 * User interface for server side
 */
export interface IServerUser {
  '_id'?: TObjectId;
  email: string;
  firstName: string;
  lastName: string;
  roles: Array<IRole>;
}
