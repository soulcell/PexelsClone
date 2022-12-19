import { AnyAction } from "@reduxjs/toolkit";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "../../api/api";
import { PhotosState } from "../../redux/reducers/photos/interfaces";
import { AppState } from "../../redux/reducers/rootReducer";
import PhotoCard from "../photo-card/PhotoCard";
import styles from "./PhotoGrid.module.css";

export interface PhotoGridProps {
  loadActionCreator: (page: number) => AnyAction;
  selector: (state: AppState) => PhotosState;
}

export default function PhotoGrid(props: PhotoGridProps): JSX.Element {
  const selectPhotos = useSelector(props.selector);
  const dispatch = useDispatch();

  const photos = selectPhotos.photos;

  let colNum = 3;
  let columns: Photo[][] = [[], [], []];

  const observedElements = useRef<Array<Element | null>>([]);

  const observerHandler = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entrie) => {
        if (
          entrie.isIntersecting &&
          selectPhotos.hasMore &&
          !selectPhotos.loading
        ) {
          dispatch(props.loadActionCreator(selectPhotos.currentPage + 1));
          observer.disconnect();
        }
      });
    },
    [
      selectPhotos.hasMore,
      selectPhotos.loading,
      selectPhotos.currentPage,
      dispatch,
      props,
    ]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler);

    observedElements.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  });

  photos.forEach((photo, i) => {
    columns[i % colNum][Math.floor(i / colNum)] = photo;
  });

  return (
    <>
      <div
        className={`${styles.grid} ${styles["grid-spacing-desktop-30"]} ${styles["grid-spacing-tablet-15"]} ${styles["grid-spacing-mobile-15"]}`}
      >
        {columns.map((col, colNum) => {
          return (
            <div className={styles.column}>
              {col.map((photo, i, arr) => {
                if (i === arr.length - 1) {
                  return (
                    <>
                      <div
                        className={styles.item}
                        ref={(el) => (observedElements.current[colNum] = el)}
                      >
                        <PhotoCard photo={photo} />
                      </div>
                    </>
                  );
                }
                return (
                  <>
                    <div className={styles.item}>
                      <PhotoCard photo={photo} />
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
