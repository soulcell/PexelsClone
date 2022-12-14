import { all, spawn } from "redux-saga/effects";
import { Saga } from "redux-saga";
import curatedPhotosSaga from "./curatedPhotosSaga";

export default function* rootSaga() {
  const sagas: Saga[] = [
    curatedPhotosSaga
  ];

  yield all(sagas.map((s) => spawn(s)));
}
