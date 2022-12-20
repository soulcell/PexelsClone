import { randomInt } from "crypto";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "../../api/api";
import HeroHeader from "../../components/hero-header/HeroHeader";
import Navbar from "../../components/navbar/Navbar";
import PhotoGrid from "../../components/photo-grid/PhotoGrid";
import { loadCuratedPhotos } from "../../redux/actionCreators/curatedActionCreators";
import selectCuratedPhotos from "../../redux/reducers/photos/curated/selector";
import wrapperStyles from "../../sharedStyles/Wrapper.module.css";

function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const photoSelector = useSelector(selectCuratedPhotos);

  const headerPhotoIdx = Math.floor(Math.random() * 12);;

  const [headerPhoto, setHeaderPhoto] = useState<Photo | undefined>(undefined);

  useEffect(() => {
    dispatch(loadCuratedPhotos(1));
  }, [dispatch]);

  useEffect(() => {
    if (!headerPhoto) setHeaderPhoto(photoSelector.photos[headerPhotoIdx]);
  }, [photoSelector.photos[headerPhotoIdx]])

  return (
    <>
      <Navbar isHomePage={true} />
      <HeroHeader photo={headerPhoto}/>
      <div
        className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}
      >
        <PhotoGrid
          selector={selectCuratedPhotos}
          loadActionCreator={loadCuratedPhotos}
        />
      </div>
    </>
  );
}

export default HomePage;
