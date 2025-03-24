import React, { useEffect, useState } from "react";
import { IMGURL, IMGURL2, MENULIST } from "../util/constants";
import { useParams } from "react-router-dom";

const Restraunt = () => {
  const { id } = useParams();

  const [banner, setBanner] = useState([]);
  const [items, setItems] = useState([]);

  const fetchResData = async () => {
    try {
      const data = await fetch(`${MENULIST}${id}`);
      const res = await data.json();

      setBanner(res.data?.cards[2]?.card?.card?.info);

      // Data coming from this path
      // data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

      const groupedCard = res.data?.cards.find(
        (card) => card?.groupedCard
      )?.groupedCard;
      const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards;
      const itemCards = regularCards?.find(
        (card) => card?.card?.card?.itemCards
      )?.card?.card?.itemCards;
      setItems(itemCards);
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
                {/* {console.log(banner.cuisines.join(','))} */}

                {banner.cuisines?.join(", ")}
              </div>
              <div>📍 Outlet - {banner.areaName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu item card */}
      {items &&
        items.map((item) => {
          return (
            <div
              key={item.card?.info?.id}
              className="flex justify-center pt-6 px-4"
            >
              <div className="flex w-full max-w-3xl border shadow-lg rounded-lg p-4 gap-4">
                {/* Left part */}
                <div className="flex-1 flex flex-col gap-2">
                  {/* displaying the veg and non-veg symbol on item menu */}
                  {item.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                    <div className="w-4 h-4 border border-green-600 rounded-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 border border-red-600 rounded-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    </div>
                  )}
                  <h2 className="text-md font-semibold">
                    {item.card?.info?.name}
                  </h2>
                  <div className="text-sm font-medium">
                    ₹{item.card?.info?.defaultPrice / 100}
                  </div>
                  <div className="text-sm text-gray-600">
                    ⭐ {item.card?.info?.ratings?.aggregatedRating?.rating} (
                    {item.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                  </div>
                  <p className="text-sm text-gray-700 text-wrap break-words">
                    {item.card?.info?.description}
                  </p>
                </div>

                {/* Right part */}
                <div className="flex flex-col justify-between items-center min-w-[100px]">
                  <img
                    src={IMGURL + item.card?.info?.imageId}
                    alt="menu item"
                    className="rounded-lg w-[120px] h-[90px] object-cover"
                  />
                  <button className="mt-2 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Restraunt;
