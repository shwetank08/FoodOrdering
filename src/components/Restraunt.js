import React, { useEffect, useState } from "react";
import { MENULIST } from "../util/constants";
import { useParams } from "react-router-dom";

const Restraunt = () => {
  const { id } = useParams();

  const [banner, setBanner] = useState([]);

  const fetchResData = async () => {
    try {
      const data = await fetch(`${MENULIST}${id}`);
      const res = await data.json();

      console.log(res.data?.cards[2]?.card?.card?.info);

      setBanner(res.data?.cards[2]?.card?.card?.info);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResData();
  }, [id]);

  return (
    <>
      {console.log(banner)}

      {/* Menu header */}
      <div className="flex justify-center pt-6 px-4">
        <div className="w-full max-w-3xl p-4">
          <div className="flex flex-col space-y-3">
            <h1 className="text-lg font-bold">{banner.name}</h1>
            <div className="space-y-1 text-sm border rounded-lg shadow-xl p-4">
              <div>
                ⭐ {banner.avgRating} ({banner.totalRatingsString}) ·{" "}
                {banner.costForTwoMessage}
              </div>
              <div>
                🍔{" "}
                {banner.cuisines.map((cuisine, index) => (
                  <span key={index}>
                    ({cuisine}
                    {index !== banner.cuisines.length - 1 && ","})
                  </span>
                ))}
              </div>
              <div>📍 Outlet - Vasant Kunj</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu item card */}
      <div className="flex justify-center pt-6 px-4">
        <div className="flex w-full max-w-3xl border shadow-lg rounded-lg p-4 gap-4">
          {/* Left part */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-4 h-4 border border-green-600 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
            </div>
            <h2 className="text-md font-semibold">Cheese Pan Pizza</h2>
            <div className="text-sm font-medium">₹350</div>
            <div className="text-sm text-gray-600">⭐ 4.0 (49)</div>
            <p className="text-sm text-gray-700 text-wrap break-words">
              Pizza topped with our herb-infused signature pan sauce and 100%
              mozzarella cheese. A classic treat for all cheese lovers out
              there! (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed
              Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains
              Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.
            </p>
          </div>

          {/* Right part */}
          <div className="flex flex-col justify-between items-center min-w-[100px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10"
              alt="menu item"
              className="rounded-lg w-[120px] h-[90px] object-cover"
            />
            <button className="mt-2 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restraunt;
