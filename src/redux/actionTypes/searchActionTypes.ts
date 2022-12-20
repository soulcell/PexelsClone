import { SearchResponse } from "../../api/api";

export const LOAD_SEARCH_PHOTOS = "LOAD_SEARCH_PHOTOS";
export interface LoadSearchPhotosAction {
  type: typeof LOAD_SEARCH_PHOTOS;
  searchString: string;
  page?: number;
  perPage?: number;
  locale?: string;
}

export const LOAD_SEARCH_PHOTOS_REQUEST = "LOAD_SEARCH_PHOTOS_REQUEST";
export interface LoadSearchPhotosRequestAction {
  type: typeof LOAD_SEARCH_PHOTOS_REQUEST;
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

export type SearchPhotosAction =
  | LoadSearchPhotosAction
  | LoadSearchPhotosRequestAction
  | LoadSearchPhotosSuccessAction
  | LoadSearchPhotosFailureAction
  | ClearSearchPhotosAction;
