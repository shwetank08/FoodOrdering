import React, { useState } from "react";
import ItemCard from "../components/ItemCard";

const MenuItem = ({regularCards}) => {
  const menuItems = regularCards.itemCards;
  console.log("MenuITEM: ", menuItems);
  
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-center w-full px-4">
      <div className="w-full max-w-xl border border-black rounded-xl shadow mb-4 bg-white text-black">
        <div
          className="flex justify-between items-center px-4 py-3 cursor-pointer bg-white hover:bg-black hover:text-white transition hover:border hover:border-black hover:rounded-xl hover:shadow"
          onClick={handleClick}
        >
          <h2 className="text-lg font-semibold">
            {regularCards.title} ({menuItems.length})
          </h2>
          <span className="text-xl">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        {isOpen && (
          <div className="px-4 py-2 space-y-3">
            {menuItems.map((item, index) => (
              <ItemCard data={item} key={item?.card?.info?.id || index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
