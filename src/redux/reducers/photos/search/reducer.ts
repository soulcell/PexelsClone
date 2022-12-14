import { Photo } from "../../../../api/interfaces";
import * as actions from "../../../actionTypes/searchActionTypes";

export interface SearchPhotosState {
  loading: boolean;
  error: Error | string | null;
  searchString: string;
  photos: Photo[];
  currentPage: number;
  hasMore: boolean;
  searchOrientation?: string;
  searchSize?: string;
  searchColor?: string;
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
        loading: true,
        searchString: action.searchString,
      };
    case actions.LOAD_SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        photos: [...state.photos, ...action.response.photos],
        currentPage: action.response.page,
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
    case actions.SET_SEARCH_ORIENTATION:
      return {
        ...state,
        searchOrientation: action.searchOrientation,
      };
    case actions.SET_SEARCH_SIZE:
      return {
        ...state,
        searchSize: action.searchSize,
      };
    default:
      return state;
  }
}
