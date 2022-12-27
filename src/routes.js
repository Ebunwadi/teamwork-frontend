import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
            <LandingPage />
        ),
      },
      {
        path: "/login",
        element: (
            <Login />
        ),
      },
    ],
  },
]);