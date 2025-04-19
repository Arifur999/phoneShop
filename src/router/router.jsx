import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import App from "../App";
import AllPages from "../pages/AllPages";
import PhoneDetails from "../pages/PhoneDetails";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: AllPages,
        hydrateFallbackElement: <p>loading...</p>,
        loader: () => fetch("phones.json"),
      },
      {
        path: "/About",
        Component: About,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/phone-details/:id",
        Component: PhoneDetails,
        hydrateFallbackElement: <p>loading...</p>,
        loader: () => fetch("./phones.json"),
      },
      {
        path: "/favorite",
        Component: Favorite,
      },
    ],
  },
]);

export default router;
