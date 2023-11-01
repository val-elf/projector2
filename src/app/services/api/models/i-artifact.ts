/* tslint:disable */
/* eslint-disable */
import { EArtifactSubtype } from './e-artifact-subtype';
import { EArtifactType } from './e-artifact-type';
import { IPreview } from './i-preview';
import { TObjectId } from './t-object-id';

/**
 * Common artifact entity
 */
export interface IArtifact {
  '_coretype'?: string;
  '_hash'?: string;
  '_id'?: TObjectId;
  name: string;
  preview?: IPreview;
  subtype?: EArtifactSubtype;
  type: EArtifactType;
}
