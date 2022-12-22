import { Photo } from "../../api/api";
import styles from "./PhotoCard.module.css";

export interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps): JSX.Element {
  return (
    <>
      <article className={`${styles.card} ${styles.overlay}`}>
        <a href={photo.url}>
          <img className={styles.image} src={photo.src.large2x} />
        </a>
        <a className={styles.photographer} href={photo.photographer_url}>
          <span className={styles.name}>{photo.photographer}</span>
        </a>
      </article>
    </>
  );
}
