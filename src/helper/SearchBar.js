import React from 'react'

const SearchBar = () => {
  return (
    <div className='container flex justify-center items-center '>
      <input className='w-7/12 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 shadow-md rounded-lg'></input>
      <button className='ml-2 w-1/12 border border-red-400'>search</button>
    </div>
  )
}

export default SearchBar;