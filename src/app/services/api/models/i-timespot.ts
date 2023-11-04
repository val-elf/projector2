/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Timespot interface
 */
export interface ITimespot {
  '_coretype'?: string;
  '_hash'?: string;
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
