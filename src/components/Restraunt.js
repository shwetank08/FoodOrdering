import React, { useEffect, useState } from "react";
import { IMGURL} from "../util/constants";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../util/useRestrauntMenu";

import ShimmerMenu from "../helper/ShimmerMenu";
import MenuItem from "../helper/MenuItem";

const Restraunt = () => {
  const { id } = useParams();

  const [banner, setBanner] = useState([]);
  const [items, setItems] = useState([]);
  const [showItem, setShowItem] = useState(-1);
  const { apiData, loading, error } = useRestrauntMenu(id);
  console.log("From RESSS", apiData);

  useEffect(() => {
    console.log("From Res", apiData);
    
    if (apiData) {
      setBanner(apiData.data?.cards[2]?.card?.card?.info);

      const groupedCard = apiData.data?.cards.find(
        (card) => card?.groupedCard
      )?.groupedCard;

      const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))
      console.log("REGULAR CARD", regularCards);
      
      setItems(regularCards);
      console.log(items);
      
    }
  }, [apiData]);

  // console.log(apiData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  

  if (loading==true){
    return (
      <ShimmerMenu/>
    )
  }

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

      {
        items && items.map((item,index)=>{
          console.log("item: ", item?.card?.card);
          
          return <MenuItem key={index} regularCards={item?.card?.card} showItem={showItem===index} setShowItem={()=>{setShowItem(prev => prev===index?-1:index)}}/>
        })
      }
      
    </>
  );
};

export default Restraunt;
