/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Location image
 */
export interface IImage {
  '_file': TObjectId;
  height: number;
  width: number;
  'x': number;
  'y': number;
  zoom: number;
}
