import { SearchResponse } from "../../api/interfaces";

export const LOAD_SEARCH_PHOTOS = "LOAD_SEARCH_PHOTOS";
export interface LoadSearchPhotosAction {
  type: typeof LOAD_SEARCH_PHOTOS;
  searchString: string;
  page?: number;
  perPage?: number;
  locale?: string;
  searchOrientation?: string;
  searchSize?: string;
}

export const LOAD_SEARCH_PHOTOS_SUCCESS = "LOAD_SEARCH_PHOTOS_SUCCESS";
export interface LoadSearchPhotosSuccessAction {
  type: typeof LOAD_SEARCH_PHOTOS_SUCCESS;
  response: SearchResponse;
}

export const LOAD_SEARCH_PHOTOS_FAILURE = "LOAD_SEARCH_PHOTOS_FAILURE";
export interface LoadSearchPhotosFailureAction {
  type: typeof LOAD_SEARCH_PHOTOS_FAILURE;
  error: Error | string;
}

export const CLEAR_SEARCH_PHOTOS = "CLEAR_SEARCH_PHOTOS";
export interface ClearSearchPhotosAction {
  type: typeof CLEAR_SEARCH_PHOTOS;
}

export const SET_SEARCH_ORIENTATION = "SET_SEARCH_ORIENTATION";
export interface SetSearchOrientationAction {
  type: typeof SET_SEARCH_ORIENTATION;
  searchOrientation: string;
}

export const SET_SEARCH_SIZE = "SET_SEARCH_SIZE";
export interface SetSearchSizeAction {
  type: typeof SET_SEARCH_SIZE;
  searchSize: string;
}

export type SearchPhotosAction =
  | LoadSearchPhotosAction
  | LoadSearchPhotosSuccessAction
  | LoadSearchPhotosFailureAction
  | ClearSearchPhotosAction
  | SetSearchOrientationAction
  | SetSearchSizeAction;
