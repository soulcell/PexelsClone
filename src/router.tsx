import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/search/:searchString",
        element: <SearchPage />
    }
]

const router = createBrowserRouter(routes);

export default router;