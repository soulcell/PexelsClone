import { Photo } from "../../api/api";
import styles from "./PhotoCard.module.css";

export interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard(props: PhotoCardProps): JSX.Element {
  return (
    <>
      <img className={styles.image} src={props.photo.src.medium}></img>
    </>
  );
}
