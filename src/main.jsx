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
import Test from "./Pages/Test.jsx";

const router = createBrowserRouter([
  { path: "/farahandsonsv2/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/farahandsonsv2/About-us",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/farahandsonsv2/Projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/farahandsonsv2/Services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/farahandsonsv2/Careers",
    element: <Careers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/farahandsonsv2/Courses",
    element: <Courses />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/farahandsonsv2/Test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
