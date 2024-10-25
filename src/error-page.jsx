import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  useEffect(() => {
    console.error(error);
    const timer = setTimeout(() => {
      navigate("farahandsons.com/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [error, navigate]);

  return (
    <div
      id="error-page"
      className="flex items-center justify-center flex-col h-screen"
    >
      <h1 className="text-8xl p-5">Oops!</h1>
      <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-4xl">
        You will be redirected to the home page shortly.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
