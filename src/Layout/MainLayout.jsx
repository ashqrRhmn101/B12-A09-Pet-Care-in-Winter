import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const { state } = useState();
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <div className="flex-1">
        {state == "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
