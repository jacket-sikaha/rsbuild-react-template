import { App as AntdApp } from "antd";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { defaultRouter } from "./routes";

const router = createBrowserRouter(defaultRouter);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AntdApp>
    <RouterProvider router={router} />
  </AntdApp>
);
