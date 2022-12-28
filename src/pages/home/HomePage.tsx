import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Photo } from "../../api/interfaces";
import HeroHeader from "../../components/hero-header/HeroHeader";
import Navbar from "../../components/navbar/Navbar";
import PhotoGrid from "../../components/photo-grid/PhotoGrid";
import { loadCuratedPhotos } from "../../redux/actionCreators/curatedActionCreators";
import selectCuratedPhotos from "../../redux/reducers/photos/curated/selector";
import wrapperStyles from "../../sharedStyles/Wrapper.module.css";
import textStyles from "../../sharedStyles/Text.module.css";
import Loading from "../../components/loader/Loading";

function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const photoSelector = useSelector(selectCuratedPhotos);
  const { t } = useTranslation();

  const headerPhotoIdx = useMemo(() => Math.floor(Math.random() * 12), []);

  const [headerPhoto, setHeaderPhoto] = useState<Photo | undefined>(undefined);

  const dispatchLoad = useCallback(
    (page: number) => dispatch(loadCuratedPhotos(page)),
    [dispatch]
  );

  useEffect(() => {
    dispatchLoad(1);
  }, [dispatchLoad]);

  useEffect(() => {
    if (!headerPhoto) setHeaderPhoto(photoSelector.photos[headerPhotoIdx]);
  }, [photoSelector.photos, headerPhoto, headerPhotoIdx]);

  return (
    <>
      <Navbar isHomePage />
      <HeroHeader photo={headerPhoto} />
      <main
        className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}
      >
        <h4
          className={`${textStyles["text"]} ${textStyles["size-h23"]} ${textStyles["color-midnight2C343E"]} mt-15 mb-30 ${textStyles["noLineHeight"]}`}
        >
          {t("pages.home.mainHeader")}
        </h4>
        <PhotoGrid selector={selectCuratedPhotos} dispatchLoad={dispatchLoad} />
        {photoSelector.loading && <Loading />}
      </main>
    </>
  );
}

export default HomePage;
