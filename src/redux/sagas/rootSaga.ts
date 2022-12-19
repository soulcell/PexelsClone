import { all, spawn } from "redux-saga/effects";
import { Saga } from "redux-saga";
import curatedPhotosSaga from "./curatedPhotosSaga";
import searchPhotosSaga from "./searchPhotosSaga";

export default function* rootSaga() {
  const sagas: Saga[] = [curatedPhotosSaga, searchPhotosSaga];

  yield all(sagas.map((s) => spawn(s)));
}
