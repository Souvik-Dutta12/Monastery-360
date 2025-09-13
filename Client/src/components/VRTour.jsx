import React from 'react'
import { Link } from 'react-router-dom'

const VRTour = () => {
  return (
    <div className='fixed inset-0 z-50 bg-[#1d1903] p-4'>
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
            <h1 className='prata text-2xl text-amber-200'>VR Monastery Tour - Rumtek</h1>
          </div>
        </div>
      </div>

      {/* Sketchfab VR Experience */}
      <div className='w-full h-full flex items-center justify-center pt-16 pb-4'>
        <div className='w-full max-w-6xl h-full max-h-4xl rounded-lg shadow-2xl border border-amber-200/20 overflow-hidden'>
          <div className='sketchfab-embed-wrapper' style={{ width: '100%', height: '100%' }}>
            <iframe 
              title="Rumtek Monastery" 
              frameBorder="0" 
              allowFullScreen 
              mozAllowFullScreen="true" 
              webkitAllowFullScreen="true" 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              xr-spatial-tracking 
              execution-while-out-of-viewport 
              execution-while-not-rendered 
              web-share 
              src="https://sketchfab.com/models/8764231d188a464497d27293dbe5031f/embed?autospin=1&autostart=1&preload=1"
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
            <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
              <a 
                href="https://sketchfab.com/3d-models/chinese-monastery-8764231d188a464497d27293dbe5031f?utm_medium=embed&utm_campaign=share-popup&utm_content=8764231d188a464497d27293dbe5031f" 
                target="_blank" 
                rel="nofollow" 
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
              >
                Rumtek Monastery
              </a> by <a 
                href="https://sketchfab.com/Abhisuresh?utm_medium=embed&utm_campaign=share-popup&utm_content=8764231d188a464497d27293dbe5031f" 
                target="_blank" 
                rel="nofollow" 
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
              >
                Abhi suresh
              </a> on <a 
                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8764231d188a464497d27293dbe5031f" 
                target="_blank" 
                rel="nofollow" 
                style={{ fontWeight: 'bold', color: '#1CAAD9' }}
              >
                Sketchfab
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* VR Info Overlay */}
      <div className='absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#1d1903]/90 to-transparent p-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* VR Info */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20'>
              <h3 className='prata text-lg text-amber-200 mb-2'>Rumtek Monastery</h3>
              <p className='text-amber-100 text-sm'>The Dharmachakra Centre - Interactive 3D model by Abhi suresh on Sketchfab</p>
              <div className='mt-2 flex items-center gap-2 text-xs text-amber-100'>
                <i className='ri-vr-line'></i>
                <span>VR Compatible</span>
                <i className='ri-fullscreen-line'></i>
                <span>Fullscreen Available</span>
              </div>
            </div>

            {/* VR Stats */}
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20'>
              <h3 className='prata text-lg text-amber-200 mb-2'>3D Experience</h3>
              <div className='space-y-1 text-sm text-amber-100'>
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
            <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20'>
              <h3 className='prata text-lg text-amber-200 mb-2'>Quick Actions</h3>
              <div className='space-y-2'>
                <button 
                  onClick={() => window.open('https://sketchfab.com/3d-models/chinese-monastery-8764231d188a464497d27293dbe5031f', '_blank')}
                  className='w-full px-3 py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg text-sm flex items-center gap-2'
                >
                  <i className='ri-external-link-line'></i>
                  <span>View on Sketchfab</span>
                </button>
                <button 
                  onClick={() => window.open('https://sketchfab.com/Abhisuresh', '_blank')}
                  className='w-full px-3 py-2 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg text-sm flex items-center gap-2'
                >
                  <i className='ri-user-line'></i>
                  <span>View Creator</span>
                </button>
                <button 
                  onClick={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe) {
                      iframe.requestFullscreen?.() || iframe.webkitRequestFullscreen?.() || iframe.mozRequestFullScreen?.();
                    }
                  }}
                  className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg text-sm flex items-center gap-2'
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
