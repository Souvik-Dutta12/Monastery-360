import React from 'react'

const Searchbar = () => {
  return (
    <div className='w-full h-15 mt-5 flex items-center px-6 gap-70'>
      <div className='w-1/2  h-10 bg-[#FFF5E0] border border-red-800 flex items-center'>
      <div className='flex items-center  w-3/4 gap-3 px-5'>
        <i className="ri-search-line text-red-800 text-xl"></i>
        <input className='w-full font-semibold h-full text-xl outline-none prata text-red-800' placeholder='Search Monasteries ...' type="search" name="" id="" />
      </div>
      <button className='w-1/4 h-full cursor-pointer text-amber-50 bg-red-800 prata text-center text-xl'>Search</button>
      </div>
      <div className='bg-amber-50 cursor-pointer w-30 prata h-10 flex items-center justify-center gap-3 text-xl text-red-800 border '><i className="ri-filter-3-line"></i> Filter</div>
    </div>
  )
}

export default Searchbar
