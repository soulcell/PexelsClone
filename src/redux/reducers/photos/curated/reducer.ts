import { Photo } from "../../../../api/api";
import * as actions from "../../../actionTypes/curatedActionTypes";

interface CuratedPhotosState {
  loading: boolean;
  error: Error | string | null;
  photos: Photo[];
  currentPage: number;
}

const initialState: CuratedPhotosState = {
  loading: false,
  error: null,
  photos: [],
  currentPage: 1,
};

export default function curatedPhotosReducer(
  state: CuratedPhotosState = initialState,
  action: actions.CuratedPhotosAction
): CuratedPhotosState {
  switch (action.type) {
    case actions.LOAD_CURATED_PHOTOS_SUCCESS:
      return {
        ...state,
        currentPage: action.response.page,
        photos: [...state.photos, ...action.response.photos],
      };
    case actions.LOAD_CURATED_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
