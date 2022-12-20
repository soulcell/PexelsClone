import { put, fork, takeLeading } from "redux-saga/effects";
import { call } from "typed-redux-saga/macro";
import { fetchSearch } from "../../api/api";
import * as actionTypes from "../actionTypes/searchActionTypes";
import * as actionCreators from "../actionCreators/searchActionCreators";

function* onLoadSearchPhotos({
  searchString,
  page,
}: actionTypes.LoadSearchPhotosAction) {
  try {
    yield put(actionCreators.loadSearchPhotosRequest());
    const data = yield* call(fetchSearch, searchString, page);
    yield put(actionCreators.loadSearchPhotosSuccess(data));
  } catch (error) {
    yield put(actionCreators.loadSearchPhotosFailure(error as Error));
  }
}

function* watchOnLoadSearchPhotos() {
  yield takeLeading(actionTypes.LOAD_SEARCH_PHOTOS, onLoadSearchPhotos);
}

export default function* searchPhotosSaga() {
  yield fork(watchOnLoadSearchPhotos);
}