import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/Pages/LandingPage";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
            <LandingPage />
        ),
      }
    ],
  },
]);