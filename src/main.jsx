import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import "./index.css";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services.jsx";
import Careers from "./Pages/Careers.jsx";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home img="" />, errorElement: <ErrorPage /> },
  {
    path: "/About-us",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Careers",
    element: <Careers />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
