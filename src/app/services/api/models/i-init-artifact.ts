/* tslint:disable */
/* eslint-disable */
import { EArtifactSubtype } from './e-artifact-subtype';
import { EArtifactType } from './e-artifact-type';
import { TObjectId } from './t-object-id';

/**
 * Update artifact entity client schema (create or update)
 */
export interface IInitArtifact {
  '_id'?: TObjectId;
  name: string;
  preview?: string;
  subtype?: EArtifactSubtype;
  type: EArtifactType;
}
