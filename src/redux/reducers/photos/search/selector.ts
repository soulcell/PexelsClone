import { AppState } from "../../rootReducer";

const selectSearchPhotos = (state: AppState) => state.searchPhotos;

export default selectSearchPhotos;
