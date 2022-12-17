import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";



function SearchPage(): JSX.Element {

    const params = useParams();
    const searchString = params["*"]?.split('/')[0]


    return <>
        <Navbar isHomePage={false} />
        {searchString}
    </>
}

export default SearchPage;