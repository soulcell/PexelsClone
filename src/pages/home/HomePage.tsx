import HeroHeader from "../../components/hero-header/HeroHeader";
import Navbar from "../../components/navbar/Navbar";
import PhotoGrid from "../../components/photo-grid/PhotoGrid";
import wrapperStyles from "../../sharedStyles/Wrapper.module.css";

function HomePage(): JSX.Element {
    return <>
        <Navbar isHomePage={true} />
        <HeroHeader/>
        <div className={`${wrapperStyles.maxWidth} ${wrapperStyles.horizontalPadding} mobile-mt-20 tablet-mt-30 desktop-mt-30 mb-30`}>
            <PhotoGrid/>
        </div>
    </>
}

export default HomePage;