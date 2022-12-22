import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "../../api/api";
import { addFavoritePhoto, removeFavoritePhoto } from "../../redux/actionCreators/favoriteActionCreators";
import selectFavoritePhotos from "../../redux/reducers/photos/favorite/selector";
import styles from "./PhotoCard.module.css";

export interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps): JSX.Element {
  const favoritePhotos = useSelector(selectFavoritePhotos);
  const dispatch = useDispatch();

  let isLiked = favoritePhotos.photoIds.has(photo.id);


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
        <a className={styles.photographer} href={photo.photographer_url} target="_blank" rel="noopener noreferrer">
          <span className={styles.name}>{photo.photographer}</span>
        </a>
        <div className={styles.info}>
          <a className={`${styles.download} ${styles.button} ${styles["button-text-white"]} p-0`} href={photo.src.original} target="_blank" rel="noopener noreferrer">
            <PhotoCardDownloadIcon/>
          </a>
          <button onClick={handleLikeClick} className={`${styles.like} ${styles.button} ${styles["button-like"]} ${styles["button-text-white"]} p-0`}>
            <PhotoCardLikeIcon active={isLiked}/>
          </button>
        </div>
      </article>
    </>
  );
}

function PhotoCardDownloadIcon(): JSX.Element {
  return <>
    <i className={styles["svg-icon"]}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="100px" width="100px" fill="#000000" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
        <g>
          <path d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path><path d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path>
        </g>
      </svg>
    </i>
  </>
}

interface PhotoCardLikeIconProps {
  active: boolean;
}

function PhotoCardLikeIcon( { active }: PhotoCardLikeIconProps ): JSX.Element {
  return <>
    {!active && <i className={`${styles["button-like-not-active-icon"]} ${styles["svg-icon"]}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
      </svg>
    </i>}
    {active && <i className={`${styles["button-like-active-icon"]} ${styles["svg-icon"]}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
      </svg>
    </i>}
  </>
}
