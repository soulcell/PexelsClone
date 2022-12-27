import { CuratedResponse } from "../../api/interfaces";

export const LOAD_CURATED_PHOTOS = "LOAD_CURATED_PHOTOS";
export interface LoadCuratedPhotosAction {
  type: typeof LOAD_CURATED_PHOTOS;
  page?: number;
}

export const LOAD_CURATED_PHOTOS_SUCCESS = "LOAD_CURATED_PHOTOS_SUCCESS";
export interface LoadCuratedPhotosSuccessAction {
  type: typeof LOAD_CURATED_PHOTOS_SUCCESS;
  response: CuratedResponse;
}

export const LOAD_CURATED_PHOTOS_FAILURE = "LOAD_CURATED_PHOTOS_FAILURE";
export interface LoadCuratedPhotosFailureAction {
  type: typeof LOAD_CURATED_PHOTOS_FAILURE;
  error: Error | string;
}

export type CuratedPhotosAction =
  | LoadCuratedPhotosAction
  | LoadCuratedPhotosSuccessAction
  | LoadCuratedPhotosFailureAction;
