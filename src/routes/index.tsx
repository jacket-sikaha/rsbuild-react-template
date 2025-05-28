import { RouteObject } from "react-router-dom";
import Index from "../pages";
import ErrorPage from "../pages/error";
import App from "../pages/App";
import Test from "../pages/test";

export const defaultRouter: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        // renders at "/"
        index: true,
        element: <App />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
];
