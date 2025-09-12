import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThreeJSMonastery from './ThreeJSMonastery'

const VRTour = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [vrMode, setVrMode] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleVrMode = () => {
    setVrMode(!vrMode)
  }

  return (
    <div className={`fixed inset-0 z-50 bg-[#1d1903] ${isFullscreen ? 'p-0' : 'p-4'}`}>
      {/* Header */}
      <div className='absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#1d1903]/90 to-transparent p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Link 
              to='/' 
              className='px-4 py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg flex items-center gap-2'
            >
              <i className='ri-arrow-left-line'></i>
              <span>Back to Home</span>
            </Link>
            <h1 className='prata text-2xl text-amber-200'>VR Monastery Tour</h1>
          </div>
          
          <div className='flex items-center gap-3'>
            <button 
              onClick={togglePlayPause}
              className='px-4 py-2 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg flex items-center gap-2'
            >
              <i className={isPlaying ? 'ri-pause-line' : 'ri-play-line'}></i>
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button 
              onClick={toggleFullscreen}
              className='px-4 py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg flex items-center gap-2'
            >
              <i className={isFullscreen ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'}></i>
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3D VR Experience */}
      <div className='w-full h-full flex items-center justify-center'>
        <div className={`${isFullscreen ? 'w-full h-full' : 'w-full max-w-4xl h-full max-h-3xl'} rounded-lg shadow-2xl border border-amber-200/20 overflow-hidden`}>
          <ThreeJSMonastery 
            width={isFullscreen ? window.innerWidth : 800} 
            height={isFullscreen ? window.innerHeight : 600}
            isInteractive={true}
            autoRotate={isPlaying}
            showControls={true}
          />
        </div>
      </div>

      {/* VR Controls Overlay */}
      <div className='absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#1d1903]/90 to-transparent p-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* VR Info */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20'>
              <h3 className='prata text-lg text-amber-200 mb-2'>Rumtek Monastery</h3>
              <p className='text-amber-100/70 text-sm'>The Dharmachakra Centre - Seat of the 16th Karmapa</p>
              <div className='mt-2 flex items-center gap-2 text-xs text-amber-100/70'>
                <i className='ri-calendar-line'></i>
                <span>Founded: 1966</span>
                <i className='ri-mountain-line'></i>
                <span>Altitude: 1,550m</span>
              </div>
            </div>

            {/* VR Stats */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20'>
              <h3 className='prata text-lg text-amber-200 mb-2'>VR Experience</h3>
              <div className='space-y-1 text-sm text-amber-100/70'>
                <div className='flex justify-between'>
                  <span>Resolution:</span>
                  <span className='text-amber-300'>4K</span>
                </div>
                <div className='flex justify-between'>
                  <span>Frame Rate:</span>
                  <span className='text-amber-300'>90 FPS</span>
                </div>
                <div className='flex justify-between'>
                  <span>Status:</span>
                  <span className='text-green-400'>Live</span>
                </div>
              </div>
            </div>

            {/* VR Actions */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20'>
              <h3 className='prata text-lg text-amber-200 mb-2'>Quick Actions</h3>
              <div className='space-y-2'>
                <button 
                  onClick={toggleVrMode}
                  className={`w-full px-3 py-2 ${vrMode ? 'bg-green-600 hover:bg-green-700' : 'bg-red-900 hover:bg-red-800'} transition-colors text-amber-100 rounded-lg text-sm flex items-center gap-2`}
                >
                  <i className={vrMode ? 'ri-vr-cardboard-fill' : 'ri-vr-cardboard-line'}></i>
                  <span>{vrMode ? 'Exit VR Mode' : 'Enter VR Mode'}</span>
                </button>
                <button className='w-full px-3 py-2 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg text-sm flex items-center gap-2'>
                  <i className='ri-share-line'></i>
                  <span>Share Tour</span>
                </button>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg text-sm flex items-center gap-2'>
                  <i className='ri-screenshot-line'></i>
                  <span>Take Screenshot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VR Instructions */}
      <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
        <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20 max-w-xs'>
          <h4 className='prata text-lg text-amber-200 mb-2'>3D Controls</h4>
          <div className='space-y-2 text-sm text-amber-100/70'>
            <div className='flex items-center gap-2'>
              <i className='ri-mouse-line'></i>
              <span>Click & drag to rotate</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-mouse-2-line'></i>
              <span>Scroll to zoom</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-play-line'></i>
              <span>Auto-rotate when playing</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-vr-line'></i>
              <span>VR mode for immersion</span>
            </div>
          </div>
        </div>
      </div>

      {/* VR Mode Overlay */}
      {vrMode && (
        <div className='absolute inset-0 z-20 bg-black/50 backdrop-blur-sm flex items-center justify-center'>
          <div className='bg-[#1d1903] rounded-xl p-8 border border-amber-200/20 max-w-md text-center'>
            <div className='mb-6'>
              <i className='ri-vr-cardboard-line text-6xl text-amber-300 mb-4'></i>
              <h3 className='prata text-2xl text-amber-200 mb-2'>VR Mode Activated</h3>
              <p className='text-amber-100/70'>Put on your VR headset for the full immersive experience</p>
            </div>
            <div className='space-y-3'>
              <button 
                onClick={toggleVrMode}
                className='w-full px-6 py-3 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg'
              >
                Exit VR Mode
              </button>
              <p className='text-xs text-amber-100/50'>
                Compatible with Oculus, HTC Vive, and mobile VR headsets
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VRTour
