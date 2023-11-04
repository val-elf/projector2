/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Update project entity client schema (create or update)
 */
export interface IInitProject {
  '_id'?: TObjectId;
  description?: string;
  name: string;
  preview?: string;
}
