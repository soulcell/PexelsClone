import * as actions from "../../../actionTypes/favoriteActionTypes";

export interface FavoritePhotosState {
  photoIds: number[];
}

const initialState: FavoritePhotosState = {
  photoIds: [],
};

export default function favoritePhotosReducer(
  state: FavoritePhotosState = initialState,
  action: actions.FavoritePhotosAction
): FavoritePhotosState {
  switch (action.type) {
    case actions.ADD_FAVORITE:
      return {
        ...state,
        photoIds: [...new Set<number>(state.photoIds).add(action.photo.id)],
      };
    case actions.REMOVE_FAVORITE:
      const tempSet = new Set<number>(state.photoIds);
      tempSet.delete(action.photo.id);
      return {
        ...state,
        photoIds: [...tempSet],
      };
    default:
      return state;
  }
}
