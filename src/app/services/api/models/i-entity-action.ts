/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Entity historical action
 */
export interface IEntityAction {
  '_dt': string;
  '_user': TObjectId;
}
