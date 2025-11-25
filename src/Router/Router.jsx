import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import CardDetails from "../Pages/CardDetails";
import PrivateRouter from "../Provider/PrivateRouter";
import Error from "../Pages/Error";
import Loading from "../Pages/Loading";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/petCareServices.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/petCareServices.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/card-details/:id",
        element: (
          <PrivateRouter>
            <CardDetails />
          </PrivateRouter>
        ),
        loader: () => fetch("/petCareServices.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
