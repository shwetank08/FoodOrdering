import React, { useEffect } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";


const Header = () => {
    const currentUrl = useLocation();
    console.log(currentUrl);

    useEffect(()=>{
      console.log("Route changed", location.pathname);
      
    },[currentUrl])
    
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
    </div>

  );
};

export default Header;
