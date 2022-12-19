import { AppState } from "../../rootReducer";

const selectCuratedPhotos = (state: AppState) => state.curatedPhotos;

export default selectCuratedPhotos