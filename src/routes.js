import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/Landing-page/LandingPage";

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