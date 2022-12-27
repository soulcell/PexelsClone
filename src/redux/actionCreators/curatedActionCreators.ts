import { CuratedResponse } from "../../api/interfaces";
import * as actions from "../actionTypes/curatedActionTypes";

export function loadCuratedPhotos(
  page?: number
): actions.LoadCuratedPhotosAction {
  return {
    type: actions.LOAD_CURATED_PHOTOS,
    page,
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
