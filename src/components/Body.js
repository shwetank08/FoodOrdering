import React, { useEffect, useState } from 'react'
import RestaurantCard from '../helper/RestaurantCard'
import SearchBar from '../helper/SearchBar'
import { URL, URL2 } from '../util/constants'
import Shimmer from '../helper/Shimmer'
const Body = () => {
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    const apicall = await fetch(URL2);
    const res = await apicall.json();
    console.log(res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log("res->",res);
    
    setResList(
      res.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  fetchData();

  if(resList && resList.length === 0){
    return <Shimmer />
  }

  return (
    <div className='p-3 flex justify-center flex-col'>
      <SearchBar/>
      {console.log(resList)}
      {resList &&
        resList.map((restraunt,index) => {
          {console.log(restraunt.info)}
          return(
            <RestaurantCard key={index} {...restraunt.info}/>
          )
        })
      }
     </div>
  )
}

export default Body