import React, { useEffect, useState } from "react";
import RestaurantCard from "../helper/RestaurantCard";
import SearchBar from "../helper/SearchBar";
import { URL, URL2 } from "../util/constants";
import Shimmer from "../helper/Shimmer";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [search, setSearch] = useState("");
  const [food, setFood] = useState([]);
  const fetchData = async () => {
    const apicall = await fetch(URL2);
    const res = await apicall.json();
    // console.log(
    //   res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // console.log("res->",res);

    setResList((prevList) => {
      const newRestaurants = res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // Merge with previous list and remove duplicates using a Set 
      const mergedList = [...prevList, ...newRestaurants];
    
      // Remove duplicates based on name
      const uniqueRestaurants = Array.from(new Map(mergedList.map(item => [item?.info?.name, item])).values());

      // console.log("uniqueRestaurants", uniqueRestaurants);
      
    
      return uniqueRestaurants;
  });
  };
  useEffect(() => {
    fetchData();
  }, []);
  fetchData();

  if (resList && resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="container flex mx-auto mb-2">
        <input
          className="w-5/12 p-1 border-none placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 shadow-md rounded-lg mx-auto"
          placeholder="Search for restraunts"
          value = {search}
          onChange={(e)=>{
            e.preventDefault();
            setSearch(e.target.value)
            console.log(e.target.value, search)
          }}
        >
        </input>
        <button onClick={()=>{
            const filtered = resList.filter((res)=>{
              return res.info?.name.toLowerCase().includes(search.toLowerCase()); 
            });
            setFood(filtered);
          }}>
            Search
          </button>
      </div> 
      <div className="p-3 grid grid-cols-4 gap-4">
        {/* {console.log(resList, "FOOD", food)} */}
        {/* {console.log(resList)} */}

        {food &&
          food.map((restraunt, index) => {
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
