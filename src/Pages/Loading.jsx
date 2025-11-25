import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <ClimbingBoxLoader color="#303082" />
    </div>
  );
};

export default Loading;
