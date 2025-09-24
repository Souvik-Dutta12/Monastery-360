import React from 'react'
import { Link } from 'react-router-dom'

const VRTour = () => {
  return (
    <div className='fixed inset-0 z-50 bg-[#1d1903] p-2 sm:p-4'>
      {/* Header */}
      <div className='absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#1d1903]/90 to-transparent p-2 sm:p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 sm:gap-4'>
            <Link
              to='/'
              className='px-2 sm:px-4 py-1 sm:py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm'
            >
              <i className='ri-arrow-left-line text-sm sm:text-base'></i>
              <span className='hidden sm:inline'>Back to Home</span>
              <span className='sm:hidden'>Back</span>
            </Link>
            <h1 className='prata text-lg sm:text-xl lg:text-2xl text-amber-200 truncate'>VR Monastery Tour - Rumtek</h1>
          </div>
        </div>
      </div>

      {/* Sketchfab VR Experience */}
      <div className='w-full h-full flex items-center justify-center pt-12 sm:pt-16 pb-20 sm:pb-24'>
        <div className='w-full max-w-6xl h-full max-h-4xl rounded-lg shadow-2xl border border-amber-200/20 overflow-hidden'>
          <div className='sketchfab-embed-wrapper' style={{ width: '100%', height: '100%' }}>
            <iframe
              title="Rumtek Monastery"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer; camera; clipboard-write; web-share"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/models/d2de6b05accb4a9ebe3681157afe36c3/embed?autospin=1&autostart=1&preload=1&transparent=1"
              style={{ width: '100%', height: '100%', border: 'none' }}
            />

          </div>
        </div>
      </div>

      {/* VR Info Overlay */}
      <div className='absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#1d1903]/90 to-transparent p-2 sm:p-4 lg:p-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4'>
            {/* VR Info */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-amber-200/20'>
              <h3 className='prata text-sm sm:text-lg text-amber-200 mb-1 sm:mb-2'>Rumtek Monastery</h3>
              <p className='text-amber-100 text-xs sm:text-sm'>The Dharmachakra Centre - Interactive 3D model by Abhi suresh on Sketchfab</p>
              <div className='mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2 text-xs text-amber-100'>
                <i className='ri-vr-line'></i>
                <span>VR Compatible</span>
                <i className='ri-fullscreen-line'></i>
                <span className='hidden sm:inline'>Fullscreen Available</span>
                <span className='sm:hidden'>Fullscreen</span>
              </div>
            </div>

            {/* VR Stats */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-amber-200/20'>
              <h3 className='prata text-sm sm:text-lg text-amber-200 mb-1 sm:mb-2'>3D Experience</h3>
              <div className='space-y-1 text-xs sm:text-sm text-amber-100'>
                <div className='flex justify-between'>
                  <span>Model:</span>
                  <span className='text-amber-300'>Interactive</span>
                </div>
                <div className='flex justify-between'>
                  <span>Controls:</span>
                  <span className='text-amber-300'>Mouse/Touch</span>
                </div>
                <div className='flex justify-between'>
                  <span>Status:</span>
                  <span className='text-green-400'>Live</span>
                </div>
              </div>
            </div>

            {/* VR Actions */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-amber-200/20 sm:col-span-2 lg:col-span-1'>
              <h3 className='prata text-sm sm:text-lg text-amber-200 mb-1 sm:mb-2'>Quick Actions</h3>
              <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-1 sm:gap-2'>
                <button
                  onClick={() => {
                    window.location.href = 'https://sketchfab.com/3d-models/chinese-monastery-8764231d188a464497d27293dbe5031f';
                  }}
                  className='w-full px-2 sm:px-3 py-1 sm:py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2'
                >
                  <i className='ri-external-link-line'></i>
                  <span className='hidden sm:inline'>View on Sketchfab</span>
                  <span className='sm:hidden'>Sketchfab</span>
                </button>

                <button
                  onClick={() => {
                    window.location.href = 'https://sketchfab.com/Abhisuresh';
                  }}
                  className='w-full px-2 sm:px-3 py-1 sm:py-2 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2'
                >
                  <i className='ri-user-line'></i>
                  <span className='hidden sm:inline'>View Creator</span>
                  <span className='sm:hidden'>Creator</span>
                </button>
                <button
                  onClick={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe) {
                      iframe.requestFullscreen?.() || iframe.webkitRequestFullscreen?.() || iframe.mozRequestFullScreen?.();
                    }
                  }}
                  className='w-full px-2 sm:px-3 py-1 sm:py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2'
                >
                  <i className='ri-fullscreen-line'></i>
                  <span>Fullscreen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default VRTour
