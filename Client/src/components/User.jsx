import React from 'react'

const User = () => {
  return (
    <div className="w-[97%] mx-auto cursor-pointer prata bg-transparent border-b border-red-800 p-3 hover:shadow-2xl transition flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-4 sm:gap-0">
      {/* Avatar + Name */}
      <div className="flex items-center gap-2 w-full sm:w-1/4">
        <div className="w-8 h-8 rounded-full bg-black"></div>
        <div className="flex flex-col">
          <h1 className="text-base sm:text-xl font-semibold">Tung Tung Sahur</h1>
          <h2 className="text-sm sm:text-base text-gray-700">
            TungtungSaur@gmail123.com
          </h2>
        </div>
      </div>

      {/* Roles */}
      <div className="flex flex-wrap gap-2 items-center text-xs sm:text-sm w-full sm:w-1/4">
        <div className="bg-green-400/30 text-green-800 border rounded-md text-center px-2 py-0.5">
          Admin
        </div>
        <div className="bg-blue-400/30 text-blue-800 border rounded-md text-center px-2 py-0.5">
          Researcher
        </div>
        <div className="bg-red-400/30 text-red-800 border rounded-md text-center px-2 py-0.5">
          Tourist
        </div>
      </div>

      {/* Last Active */}
      <div className="w-full sm:w-1/4 sm:pl-10">
        <span className="text-sm block sm:inline">March 4, 2024</span>
      </div>

      {/* Date Added + More Icon */}
      <div className="w-full sm:w-1/4 flex items-center justify-between sm:pl-10">
        <span className="text-sm">March 4, 2024</span>
        <i className="ri-more-2-line font-bold text-lg"></i>
      </div>
    </div>
  )
}

export default User
