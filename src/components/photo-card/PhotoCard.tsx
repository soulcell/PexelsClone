import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "../../api/interfaces";
import {
  addFavoritePhoto,
  removeFavoritePhoto,
} from "../../redux/actionCreators/favoriteActionCreators";
import selectFavoritePhotos from "../../redux/reducers/photos/favorite/selector";
import SVG from "../svg/SVG";
import styles from "./PhotoCard.module.css";

export interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps): JSX.Element {
  const favoritePhotos = useSelector(selectFavoritePhotos);
  const dispatch = useDispatch();

  const isLiked = useMemo(
    () => favoritePhotos.photoIds.includes(photo.id),
    [favoritePhotos.photoIds, photo.id]
  );

  function handleLikeClick() {
    if (!isLiked) {
      dispatch(addFavoritePhoto(photo));
    } else {
      dispatch(removeFavoritePhoto(photo));
    }
  }

  return (
    <>
      <article className={`${styles.card} ${styles.overlay}`}>
        <img className={styles.image} src={photo.src.large2x} alt={photo.alt} />
        <a
          className={styles.photographer}
          href={photo.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.name}>{photo.photographer}</span>
        </a>
        <div className={styles.info}>
          <a
            className={`${styles.download} ${styles.button} ${styles["button-text-white"]} p-0`}
            href={photo.src.original}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={styles["svg-icon"]}>
              <SVG
                icon="PhotoCardDownload"
                width="100px"
                height="100px"
                viewBox="0 0 100 100"
              />
            </i>
          </a>
          <button
            onClick={handleLikeClick}
            className={`${styles.like} ${styles.button} ${styles["button-like"]} ${styles["button-text-white"]} p-0`}
          >
            <PhotoCardLikeIcon active={isLiked} />
          </button>
        </div>
      </article>
    </>
  );
}

interface PhotoCardLikeIconProps {
  active: boolean;
}

function PhotoCardLikeIcon({ active }: PhotoCardLikeIconProps): JSX.Element {
  return (
    <>
      {!active && (
        <i
          className={`${styles["button-like-not-active-icon"]} ${styles["svg-icon"]}`}
        >
          <SVG
            icon="PhotoCardLike"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
        </i>
      )}
      {active && (
        <i
          className={`${styles["button-like-active-icon"]} ${styles["svg-icon"]}`}
        >
          <SVG
            icon="PhotoCardLikeFilled"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
        </i>
      )}
    </>
  );
}
