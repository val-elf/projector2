/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Initial and update character interface (sends from client side)
 */
export interface IInitCharacter {
  '_id'?: TObjectId;
  description: string;
  name: string;
  preview?: string;
  role: string;
}
