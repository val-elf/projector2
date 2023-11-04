/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Init Timespot interface
 */
export interface IInitTimespot {
  '_id'?: TObjectId;
  description?: string;
  endDate?: string;
  endOffsetX?: number;
  locked?: boolean;
  offsetX?: number;
  startDate: string;
  startOffsetX?: number;
  title: string;
}
