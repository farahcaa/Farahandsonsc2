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
    path: "farahandsons.com/About-us",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "farahandsons.com/Projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "farahandsons.com/Services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "farahandsons.com/Careers",
    element: <Careers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "farahandsons.com/Courses",
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
