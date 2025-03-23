import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    
  return (

    <div className="container flex justify-around shadow-lg p-2 items-center max-w-full">
        <div className="">
          <Link to="/">
            <h1>Bee Delivers</h1>
          </Link>
        </div>
        <div className="flex flex-row">
          <Link to="/cart">
            Cart
          </Link>
        </div>
        {/* Delete later */}
        <div className="flex flex-row">
          <Link to="/ress">
            Res
          </Link>
        </div>
        {/* Delete later */}
    </div>

  );
};

export default Header;
