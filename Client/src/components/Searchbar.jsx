import React from 'react'

const Searchbar = () => {
  return (
    <div className="w-full mt-5 flex flex-col sm:flex-row items-center px-4 sm:px-6 gap-4 sm:gap-6">
      {/* Search Box */}
      <div className="w-full sm:w-1/2 h-10 bg-[#FFF5E0] border border-red-800 flex items-center  overflow-hidden">
        <div className="flex items-center w-3/4 gap-2 sm:gap-3 px-3 sm:px-5">
          <i className="ri-search-line text-red-800 text-lg sm:text-xl"></i>
          <input
            className="w-full font-semibold h-full text-base sm:text-xl outline-none prata text-red-800 bg-transparent"
            placeholder="Search Monasteries ..."
            type="search"
          />
        </div>
        <button className="w-1/4 h-full cursor-pointer text-amber-50 bg-red-800 prata text-center text-sm sm:text-xl">
          Search
        </button>
      </div>

      {/* Filter Button */}
      <div className="w-full sm:w-auto bg-amber-50 cursor-pointer h-10 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-xl text-red-800 border  prata px-4 sm:px-6">
        <i className="ri-filter-3-line"></i> Filter
      </div>
    </div>
  )
}

export default Searchbar
