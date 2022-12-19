import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import curatedPhotosReducer from "./photos/curated/reducer";
import searchPhotosReducer from "./photos/search/reducer";

const initial = {};

export function appReducer(state = initial, action: AnyAction) {
  return state;
}

const rootReducer = combineReducers({
  app: appReducer,
  curatedPhotos: curatedPhotosReducer,
  searchPhotos: searchPhotosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
