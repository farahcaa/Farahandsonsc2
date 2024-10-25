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
import Courses from "./Pages/Courses.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
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
  {
    path: "/Courses",
    element: <Courses />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
