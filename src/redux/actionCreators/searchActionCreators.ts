import { SearchResponse } from "../../api/api";
import * as actions from "../actionTypes/searchActionTypes";

export function loadSearchPhotos(
  searchString: string,
  page?: number,
  perPage?: number,
  locale?: string,
  searchOrientation?: string,
  searchSize?: string
): actions.LoadSearchPhotosAction {
  return {
    type: actions.LOAD_SEARCH_PHOTOS,
    searchString,
    page,
    locale,
    searchOrientation,
    searchSize,
  };
}

export function loadSearchPhotosSuccess(
  response: SearchResponse
): actions.LoadSearchPhotosSuccessAction {
  return {
    type: actions.LOAD_SEARCH_PHOTOS_SUCCESS,
    response,
  };
}

export function loadSearchPhotosFailure(
  error: Error | string
): actions.LoadSearchPhotosFailureAction {
  return {
    type: actions.LOAD_SEARCH_PHOTOS_FAILURE,
    error,
  };
}

export function clearSearchPhotos(): actions.ClearSearchPhotosAction {
  return {
    type: actions.CLEAR_SEARCH_PHOTOS,
  };
}

export function setSearchOrientation(
  searchOrientation: string
): actions.SetSearchOrientationAction {
  return {
    type: actions.SET_SEARCH_ORIENTATION,
    searchOrientation,
  };
}

export function setSearchSize(searchSize: string): actions.SetSearchSizeAction {
  return {
    type: actions.SET_SEARCH_SIZE,
    searchSize,
  };
}
