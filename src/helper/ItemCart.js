import React from "react";
import { IMGURL } from "../util/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../util/cartSlice";

const ItemCart = ({ data, index}) => {
  const itemCard = data;
  console.log("itemCards: ", itemCard);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(data));
  }

  const handleRemoveClick = () => {
    dispatch(removeItem(index))
  }

  return (
    <div className="flex justify-center pt-6 px-4">
      <div className="flex w-full max-w-3xl border shadow-lg rounded-lg p-4 gap-4">
        {/* Left part */}
        <div className="flex-1 flex flex-col gap-2">
          {/* displaying the veg and non-veg symbol on item menu */}
          {itemCard?.itemAttribute?.vegClassifier === "VEG" ? (
            <div className="w-4 h-4 border border-green-600 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
            </div>
          ) : (
            <div className="w-4 h-4 border border-red-600 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            </div>
          )}
          <h2 className="text-md font-semibold">
            {itemCard?.name}
          </h2>
          <div className="text-sm font-medium">
            ₹{itemCard?.defaultPrice?(itemCard?.defaultPrice/ 100):(itemCard?.price/100)}
          </div>
          {itemCard?.ratings?.aggregatedRating?.rating && <div className="text-sm text-gray-600">
            ⭐ {itemCard?.ratings?.aggregatedRating?.rating} (
            {itemCard?.ratings?.aggregatedRating?.ratingCountV2})
          </div>}
          <p className="text-sm text-gray-700 text-wrap break-words">
            {itemCard?.description}
            {console.log(itemCard?.description)}
          </p>
        </div>

        {/* Right part */}
        <div className="flex flex-col justify-between items-center min-w-[100px]">
          {itemCard?.imageId && <img
            src={IMGURL + itemCard?.imageId}
            alt="menu item"
            className="rounded-lg w-[120px] h-[90px] object-cover"
          />
          }
          <button className="mt-2 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700" data-testid="removeBtnCart" onClick={()=>{handleRemoveClick()}}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
