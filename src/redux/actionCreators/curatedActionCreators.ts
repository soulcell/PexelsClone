import { CuratedResponse } from "../../api/api";
import * as actions from "../actionTypes/curatedActionTypes";

export function loadCuratedPhotos(
  page?: number
): actions.LoadCuratedPhotosAction {
  return {
    type: actions.LOAD_CURATED_PHOTOS,
    page,
  };
}

export function loadCuratedPhotosRequest(): actions.LoadCuratedPhotosRequestAction {
  return {
    type: actions.LOAD_CURATED_PHOTOS_REQUEST,
  };
}

export function loadCuratedPhotosSuccess(
  response: CuratedResponse
): actions.LoadCuratedPhotosSuccessAction {
  return {
    type: actions.LOAD_CURATED_PHOTOS_SUCCESS,
    response,
  };
}

export function loadCuratedPhotosFailure(
  error: Error | string
): actions.LoadCuratedPhotosFailureAction {
  return {
    type: actions.LOAD_CURATED_PHOTOS_FAILURE,
    error,
  };
}
