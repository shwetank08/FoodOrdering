import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {

  const cartItem = useSelector((store) => store.cart.items);
    
  return (

    <div className="container flex justify-between items-center p-4 shadow-lg max-w-full">
        <div>
        <Link to="/">
          <h1 className="text-2xl font-semibold">Bee Delivers</h1>
        </Link>
      </div>
        <div className="flex space-x-6 ">
        <Link to="/cart">
          <span className="bg-green-500 text-white pl-2 pr-2 pt-1 pb-1">{cartItem.length}</span> Cart
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>

  );
};

export default Header;
