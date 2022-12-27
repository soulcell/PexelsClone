import { AnyAction } from "@reduxjs/toolkit";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "../../api/interfaces";
import { PhotosState } from "../../redux/reducers/photos/interfaces";
import { AppState } from "../../redux/reducers/rootReducer";
import PhotoCard from "../photo-card/PhotoCard";
import styles from "./PhotoGrid.module.css";

export interface PhotoGridProps {
  loadActionCreator: (page: number) => AnyAction;
  selector: (state: AppState) => PhotosState;
}

enum ScreenSize {
  Desktop = 1,
  Mobile,
}

export default function PhotoGrid(props: PhotoGridProps): JSX.Element {
  const [screenSize, setScreenSize] = useState<ScreenSize>();
  const [columns, setColumns] = useState<Array<Array<Photo>>>([[], []]);
  const selectPhotos = useSelector(props.selector);
  const dispatch = useDispatch();
  const observedElements = useRef<Array<Element | null>>([]);

  const photos = selectPhotos.photos;

  const handleResize = useCallback(() => {
    if (window.innerWidth > 900 && screenSize !== ScreenSize.Desktop) {
      setScreenSize(ScreenSize.Desktop);
    } else if (window.innerWidth <= 900 && screenSize !== ScreenSize.Mobile) {
      setScreenSize(ScreenSize.Mobile);
    } else {
      setScreenSize(ScreenSize.Desktop);
    }
  }, [screenSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize === ScreenSize.Desktop) {
      setColumns(populateColumns(photos, 3));
    } else {
      setColumns(populateColumns(photos, 2));
    }
  }, [screenSize, photos]);

  function populateColumns(photoArr: Photo[], colNum: number = 3) {
    const tempColumns = new Array<Array<Photo>>(colNum);

    for (let i = 0; i < colNum; i++) {
      tempColumns[i] = [];
    }

    photoArr.forEach((photo, i) => {
      tempColumns[i % tempColumns.length][Math.floor(i / tempColumns.length)] =
        photo;
    });

    return tempColumns;
  }

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

  return (
    <>
      <div
        className={`${styles.grid} ${styles["grid-spacing-desktop-30"]} ${styles["grid-spacing-tablet-15"]} ${styles["grid-spacing-mobile-15"]}`}
      >
        {columns.map((col, colNum) => {
          return (
            <div key={colNum} className={styles.column}>
              {col.map((photo, i, arr) => {
                if (i === arr.length - 1) {
                  return (
                    <>
                      <div
                        key={photo.id}
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
                    <div key={photo.id} className={styles.item}>
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
