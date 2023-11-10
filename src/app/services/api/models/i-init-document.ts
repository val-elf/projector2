/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Initial and update document interface (sends from client side)
 */
export interface IInitDocument {
  '_id'?: TObjectId;
  metadata?: {
'size'?: number;
'type'?: string;
'lastModified'?: number;
};
  preview?: string;
  title: string;
}
