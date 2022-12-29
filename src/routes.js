import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

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
      {
        path: "/dashboard",
        element: (
            <DashBoard />
        ),
      },
      {
        path: "/forgotPassword",
        element: (
            <ForgotPassword />
        ),
      },
      {
        path: "/resetPassword",
        element: (
            <ResetPassword />
        ),
      },
    ],
  },
]);