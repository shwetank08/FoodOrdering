import React from 'react'
import RestaurantCard from '../helper/RestaurantCard'
import SearchBar from '../helper/SearchBar'

const Body = () => {
  return (
    <div className='p-3'>
      <SearchBar/>
      <RestaurantCard/>
    </div>
  )
}

export default Body