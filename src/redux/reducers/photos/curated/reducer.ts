import { Photo } from "../../../../api/interfaces";
import * as actions from "../../../actionTypes/curatedActionTypes";

export interface CuratedPhotosState {
  loading: boolean;
  error: Error | string | null;
  photos: Photo[];
  currentPage: number;
  hasMore: boolean;
}

const initialState: CuratedPhotosState = {
  loading: false,
  error: null,
  photos: [],
  currentPage: 1,
  hasMore: true,
};

export default function curatedPhotosReducer(
  state: CuratedPhotosState = initialState,
  action: actions.CuratedPhotosAction
): CuratedPhotosState {
  switch (action.type) {
    case actions.LOAD_CURATED_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case actions.LOAD_CURATED_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: action.response.page,
        photos: [...state.photos, ...action.response.photos],
        hasMore: Boolean(action.response.next_page),
      };
    case actions.LOAD_CURATED_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.toString(),
      };
    default:
      return state;
  }
}
