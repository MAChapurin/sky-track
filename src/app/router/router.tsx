import { createBrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { HomePage } from "@/pages";
import { ErrorPage } from "@/pages/error/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: (
          <div>
            <h1>About</h1>
          </div>
        ),
      },
    ],
  },
]);
