import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";



function SearchPage(): JSX.Element {

    const { searchString } = useParams();

    return <>
        <Navbar isHomePage={false} />
        {searchString}
    </>
}

export default SearchPage;