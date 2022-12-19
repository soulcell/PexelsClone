import { SearchResponse } from "../../api/api";
import * as actions from "../actionTypes/searchActionTypes";

export function loadSearchPhotos(
  searchString: string,
  page?: number
): actions.LoadSearchPhotosAction {
  return {
    type: actions.LOAD_SEARCH_PHOTOS,
    searchString,
    page,
  };
}

export function loadSearchPhotosRequest(): actions.LoadSearchPhotosRequestAction {
  return {
    type: actions.LOAD_SEARCH_PHOTOS_REQUEST,
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
