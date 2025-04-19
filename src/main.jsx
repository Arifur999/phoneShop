import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/Router";
import CardProvider from "./provider/CardProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </CardProvider>
  </StrictMode>
);
