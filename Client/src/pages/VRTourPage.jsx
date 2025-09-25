import React from 'react'
import { Link } from 'react-router-dom'

const VRTourPage = () => {
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
        className="w-screen h-screen"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer; camera; clipboard-write; web-share"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://sketchfab.com/models/d2de6b05accb4a9ebe3681157afe36c3/embed?autospin=1&autostart=1&cardboard=1&preload=1&transparent=1&ui_theme=dark"
      />
    </div>
  )
}

export default VRTourPage
