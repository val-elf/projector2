/* tslint:disable */
/* eslint-disable */
import { EDbObjectStatuses } from './e-db-object-statuses';
import { IDbObjectPermission } from './i-db-object-permission';
import { IEntityAction } from './i-entity-action';
import { TObjectId } from './t-object-id';

/**
 * Common object interface for all entities
 */
export interface IDbObject {
  '_created': IEntityAction;
  '_deleted'?: IEntityAction;
  '_id'?: TObjectId;
  '_owner'?: TObjectId;
  '_owners'?: Array<TObjectId>;
  '_owners_permissions'?: {
[key: string]: Array<IDbObjectPermission>;
};
  '_tags'?: Array<TObjectId>;
  '_updated'?: IEntityAction;
  status: EDbObjectStatuses;
  type: string;
}
