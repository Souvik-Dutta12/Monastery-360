import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GOOGLE_MAP_KEY = import.meta.env.VITE_GOOGLE_MAP_KEY

const Map = () => {
    useEffect(()=>{
        console.log(GOOGLE_MAP_KEY)
    },[])
  return (


    <div className="w-screen h-screen bg-[#1d1903] relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          to="/"
          className="px-4 py-2 bg-amber-700 hover:bg-amber-600 transition-colors text-amber-100 rounded-lg flex items-center gap-2 shadow-lg shadow-black/30 mt-5 md:mt-0"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back</span>
        </Link>
      </div>
      
      {/* Full Page VR View */}
      <iframe
        title="Monastery VR Experience"
        className="w-screen h-screen pt-20 md:pt-15 pb-5 md:pb-15 px-2 md:px-15 shadow-lg"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer; camera; clipboard-write; web-share"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src={`https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAP_KEY}&q=sikkim+monasteries`}
      />
    </div>

      

  )
}

export default Map
