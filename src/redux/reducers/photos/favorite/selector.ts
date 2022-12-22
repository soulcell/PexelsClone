import { AppState } from "../../rootReducer";

const selectFavoritePhotos = (state: AppState) => state.favoritePhotos;

export default selectFavoritePhotos;
