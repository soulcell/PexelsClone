import { useEffect } from "react";
import { Photo } from "../../api/api";
import curatedResult from "../../api/mockResults/curated"
import PhotoCard from "../photo-card/PhotoCard";
import styles from "./PhotoGrid.module.css";

export default function PhotoGrid(): JSX.Element {

    let colNum = 3;

    let photos: Photo[] = curatedResult.photos;

    let columns: Photo[][] = [
        [], [], []
    ]

    let photoCards = photos.map(photo => {
        return <PhotoCard photo={photo} />
    })

    photos.forEach((photo, i) => {
        columns[i % colNum][Math.floor(i / colNum)] = photo
    })

    return <>
    <div className={`${styles.grid} ${styles["grid-spacing-desktop-30"]} ${styles["grid-spacing-tablet-15"]} ${styles["grid-spacing-mobile-15"]}`}>
        {columns.map(col => {
            return <div className={styles.column}>
                {col.map(photo => {
                    return <>
                    <div className={styles.item}>
                        <PhotoCard photo={photo}/>
                    </div>
                    </>
                })}
            </div>
        })}
    </div>
    </>
}