import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HeroHeader from "../../components/hero-header/HeroHeader";
import Navbar from "../../components/navbar/Navbar";
import PhotoGrid from "../../components/photo-grid/PhotoGrid";
import { loadCuratedPhotos } from "../../redux/actionCreators/curatedActionCreators";
import selectCuratedPhotos from "../../redux/reducers/photos/curated/selector";
import wrapperStyles from "../../sharedStyles/Wrapper.module.css";

function HomePage(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCuratedPhotos(1));
  }, [dispatch]);

  return (
    <>
      <Navbar isHomePage={true} />
      <HeroHeader />
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
