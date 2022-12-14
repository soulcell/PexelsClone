import { call, put, takeLatest, fork } from "redux-saga/effects";
import { fetchCurated } from "../../api/api";
import * as actionTypes from "../actionTypes/curatedActionTypes";
import * as actionCreators from "../actionCreators/curatedActionCreators";

function* onLoadCuratedPhotos({ page }: actionTypes.LoadCuratedPhotosAction) {
  try {
    yield put(actionCreators.loadCuratedPhotos(page));
    const { data } = yield call(fetchCurated, page);
    yield put(actionCreators.loadCuratedPhotosSuccess(data));
  } catch (error) {
    yield put(actionCreators.loadCuratedPhotosFailure(error as Error));
  }
}

function* watchOnLoadCuratedPhotos() {
  yield takeLatest(actionTypes.LOAD_CURATED_PHOTOS, onLoadCuratedPhotos);
}

export default function* curatedPhotosSaga() {
  yield fork(watchOnLoadCuratedPhotos);
}
