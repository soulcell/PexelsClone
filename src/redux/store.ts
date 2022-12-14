import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { SagaMiddleware } from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
