import { Photo } from "../../../../api/api";
import * as actions from "../../../actionTypes/searchActionTypes";

export interface SearchPhotosState {
  loading: boolean;
  error: Error | string | null;
  searchString: string;
  photos: Photo[];
  currentPage: number;
  hasMore: boolean;
}

const initialState: SearchPhotosState = {
  loading: false,
  error: null,
  searchString: "",
  photos: [],
  currentPage: 1,
  hasMore: true,
};

export default function searchPhotosReducer(
  state: SearchPhotosState = initialState,
  action: actions.SearchPhotosAction
): SearchPhotosState {
  switch (action.type) {
    case actions.LOAD_SEARCH_PHOTOS:
      return {
        ...state,
        searchString: action.searchString,
      };
    case actions.LOAD_SEARCH_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.LOAD_SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: action.response.page,
        photos: [...state.photos, ...action.response.photos],
        hasMore: Boolean(action.response.next_page),
      };
    case actions.LOAD_SEARCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.CLEAR_SEARCH_PHOTOS:
      return initialState;
    default:
      return state;
  }
}
