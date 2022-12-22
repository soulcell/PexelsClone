import * as actions from "../../../actionTypes/favoriteActionTypes";

export interface FavoritePhotosState {
  photoIds: Set<number>;
}

const initialState: FavoritePhotosState = {
  photoIds: new Set<number>(),
};

export default function favoritePhotosReducer(
  state: FavoritePhotosState = initialState,
  action: actions.FavoritePhotosAction
): FavoritePhotosState {
  switch (action.type) {
    case actions.ADD_FAVORITE:
      state.photoIds.add(action.photo.id);
      return {
        ...state,
      };
    case actions.REMOVE_FAVORITE:
      state.photoIds.delete(action.photo.id);
      return {
        ...state,
      };
    default:
      return state;
  }
}
