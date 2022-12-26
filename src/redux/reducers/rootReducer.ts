import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { PersistConfig } from "redux-persist";
import curatedPhotosReducer from "./photos/curated/reducer";
import favoritePhotosReducer, {
  FavoritePhotosState,
} from "./photos/favorite/reducer";
import searchPhotosReducer from "./photos/search/reducer";
import storage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";

const initial = {};

export function appReducer(state = initial, action: AnyAction) {
  return state;
}

const favoritePersistConfig: PersistConfig<FavoritePhotosState> = {
  key: "favorite",
  storage,
};

const rootReducer = combineReducers({
  app: appReducer,
  curatedPhotos: curatedPhotosReducer,
  searchPhotos: searchPhotosReducer,
  favoritePhotos: persistReducer(favoritePersistConfig, favoritePhotosReducer),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
