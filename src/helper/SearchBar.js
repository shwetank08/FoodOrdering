import React from 'react'

const SearchBar = () => {
  return (
    <div className='container flex mx-auto mb-2 border border-red-500'>
      <input className='w-5/12 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 shadow-md rounded-lg mx-auto' placeholder='Search for restraunts'></input>
    </div>
  )
}


export default SearchBar;