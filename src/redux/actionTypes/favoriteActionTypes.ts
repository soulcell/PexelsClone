import { Photo } from "../../api/interfaces";

export const ADD_FAVORITE = "ADD_FAVORITE";
export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  photo: Photo;
}

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  photo: Photo;
}

export type FavoritePhotosAction = AddFavoriteAction | RemoveFavoriteAction;
