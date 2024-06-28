import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import App from "./App.jsx";
import "./index.css";
import Aboutus from "./Pages/Aboutus";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/About-us",
    element: <Aboutus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
