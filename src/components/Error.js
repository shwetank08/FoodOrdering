import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">OOPS!</h1>
      <h2 className="text-2xl text-gray-800">
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
