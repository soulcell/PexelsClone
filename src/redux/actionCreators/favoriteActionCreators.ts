import { Photo } from "../../api/api";
import * as actions from "../actionTypes/favoriteActionTypes";

export function addFavoritePhoto(photo: Photo): actions.AddFavoriteAction {
  return {
    type: actions.ADD_FAVORITE,
    photo,
  };
}

export function removeFavoritePhoto(
  photo: Photo
): actions.RemoveFavoriteAction {
  return {
    type: actions.REMOVE_FAVORITE,
    photo,
  };
}
