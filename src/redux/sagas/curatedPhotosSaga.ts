import { put, fork, takeLeading } from "redux-saga/effects";
import { call } from "typed-redux-saga/macro";
import { fetchCurated } from "../../api/api";
import * as actionTypes from "../actionTypes/curatedActionTypes";
import * as actionCreators from "../actionCreators/curatedActionCreators";

function* onLoadCuratedPhotos({ page }: actionTypes.LoadCuratedPhotosAction) {
  try {
    yield put(actionCreators.loadCuratedPhotosRequest());
    const data = yield* call(fetchCurated, page);
    yield put(actionCreators.loadCuratedPhotosSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actionCreators.loadCuratedPhotosFailure(error as Error));
  }
}

function* watchOnLoadCuratedPhotos() {
  yield takeLeading(actionTypes.LOAD_CURATED_PHOTOS, onLoadCuratedPhotos);
}

export default function* curatedPhotosSaga() {
  yield fork(watchOnLoadCuratedPhotos);
}
