import Searchbar from "../searchbar/Searchbar";
import styles from "./HeroHeader.module.css";
import textStyles from "../../sharedStyles/Text.module.css";
import { Photo } from "../../api/api";

export interface HeroHeaderProps {
  photo?: Photo;
}

export default function HeroHeader({ photo }: HeroHeaderProps): JSX.Element {
  return (
    <>
      <header className={`${styles["hero"]} flex m-0 py-80 px-15`}>
        <div
          className={`${styles["content"]} flex flex-direction-column m-0 pt-50`}
        >
          <h1 className={`${textStyles["text"]} ${textStyles["size-h33"]} ${textStyles["color-whiteFFFFFF"]} m-0 mb-30`}>
            Лучшие бесплатные стоковые фото, изображения без роялти и видео от
            талантливых авторов.
          </h1>
          <Searchbar></Searchbar>
        </div>
        {photo && <><img
          className={`${styles.img} m-0`}
          src={photo.src.landscape}
        ></img>
        <HeroHeaderAttribution authorName={photo.photographer} authorUrl={photo.photographer_url}/></>}
      </header>
    </>
  );
}

interface HeroHeaderAttributionProps {
  authorName: string;
  authorUrl: string;
}

function HeroHeaderAttribution({authorName, authorUrl}: HeroHeaderAttributionProps): JSX.Element {
  return <>
    <a className={`${textStyles["text"]} ${textStyles["size-p14"]} ${textStyles["weight-semibold"]}
     ${textStyles["color-whiteFFFFFF"]} ${styles["attribution"]} ${textStyles["inline"]} clickable m-0`}
     href={authorUrl}
     >
      <p className={`${textStyles["text"]} ${textStyles["size-inherit"]} ${textStyles["size-inherit-mobile"]}
       ${textStyles["weight-inherit"]} ${textStyles["color-inherit"]} m-0 ${textStyles["inline"]}`}>
        <span className={`${styles["attributionLabel"]}`}>
          Photo by
        </span>
        &nbsp;
        <span>
          {authorName}
        </span>
      </p>
    </a>
  </>
}
