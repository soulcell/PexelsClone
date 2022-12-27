import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Page from "./pages/Page";
import SearchPage from "./pages/search/SearchPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Page type="Home" />,
  },
  {
    path: "/search/*",
    element: <Page type="Search" />,
  },
];

const router = createBrowserRouter(routes);

export default router;
