import React from "react";

const Offline = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">OOPS!</h1>
      <h2 className="text-2xl text-gray-800">
        Seems you're offline, Please check your network!
      </h2>
    </div>
  );
};

export default Offline;
