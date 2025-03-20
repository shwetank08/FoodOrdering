import React, { useEffect, useState } from "react";
import RestaurantCard from "../helper/RestaurantCard";
import SearchBar from "../helper/SearchBar";
import { URL, URL2 } from "../util/constants";
import Shimmer from "../helper/Shimmer";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [search, setSearch] = useState("");
  const [food, setFood] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const fetchData = async () => {
    const apicall = await fetch(URL2);
    const res = await apicall.json();
    // console.log(
    //   res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // console.log("res->",res);
    setResList(
      res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  // fetchData();

  if (resList && resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="container flex items-center justify-center mx-auto mb-2">
        <div className="flex w-full max-w-md items-center gap-2 bg-white shadow-md rounded-lg px-3 py-2">
          <input
            className="flex-grow p-2 border-none placeholder-slate-400 outline-none"
            placeholder="Search for restaurants"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all"
            onClick={() => {
              const filtered = resList.filter((res) =>
                res.info?.name.toLowerCase().includes(search.toLowerCase())
              );
              setFood(resList);
              setResList(filtered);
              setIsFiltered(!isFiltered);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {isFiltered && search && (
        <div className="mt-2">
          <button
            className="bg-gray-200 text-black px-3 py-1 rounded text-sm"
            onClick={() => {
              setResList(food); // Reset to original list
              setIsFiltered(false);
              setSearch(""); // Clear the search term
            }}
          >
            {search} ✖
          </button>
        </div>
      )}
      <div className="p-3 grid grid-cols-4 gap-4">
        {/* {console.log(resList, "FOOD", food)} */}
        {/* {console.log(resList)} */}

        {resList &&
          resList.map((restraunt, index) => {
            // {
            //   console.log(restraunt.info);
            // }
            return <RestaurantCard key={index} {...restraunt.info} />;
          })}
      </div>
    </div>
  );
};

export default Body;
