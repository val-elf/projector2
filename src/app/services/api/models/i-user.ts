/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * User interface
 */
export interface IUser {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  '_roles': Array<TObjectId>;
  email: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}
