/* tslint:disable */
/* eslint-disable */
import { ELocationType } from './e-location-type';
import { ICoord2D } from './i-coord-2-d';
import { IImage } from './i-image';
import { IPreview } from './i-preview';
import { TObjectId } from './t-object-id';
import { TShape } from './t-shape';

/**
 * Main output Location interface
 */
export interface ILocation {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  '_mapFile'?: TObjectId;
  description: string;
  locationType: ELocationType;
  map: Array<{
'shape'?: TShape;
'image'?: IImage;
}>;
  name: string;
  parent?: {
'position'?: ICoord2D;
'scale'?: number;
'_location'?: TObjectId;
};
  position: ICoord2D;
  preview?: IPreview;
  scale?: number;
}
