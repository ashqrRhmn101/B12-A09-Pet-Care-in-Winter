import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loading from "../Pages/Loading";
// import Loading from "daisyui/components/loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading/>;
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <div>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </div>
  );
};

export default PrivateRouter;
