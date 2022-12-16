import HeroHeader from "../../components/hero-header/HeroHeader";
import Navbar from "../../components/navbar/Navbar";

function HomePage(): JSX.Element {
    return <>
        <Navbar isHomePage={true} />
        <HeroHeader/>
    </>
}

export default HomePage;