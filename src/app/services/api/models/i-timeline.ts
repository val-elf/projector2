/* tslint:disable */
/* eslint-disable */
import { TObjectId } from './t-object-id';

/**
 * Timeline interface
 */
export interface ITimeline {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  description?: string;
  endDate: string;
  locked?: boolean;
  name: string;
  startDate: string;
}
