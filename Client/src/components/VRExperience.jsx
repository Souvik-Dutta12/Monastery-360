import React from 'react'

const VRExperience = () => {
  return (
    <section className='w-full relative text-amber-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#1d1903] via-[#2d1a0a] to-[#1d1903]'></div>
      <div className='absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-red-900/30'></div>
      <div className='absolute inset-0 bg-gradient-to-bl from-transparent via-amber-800/10 to-transparent'></div>
      
      {/* Animated Background Elements */}
      <div className='absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-amber-300/10 rounded-full blur-xl animate-pulse'></div>
      <div className='absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-48 h-24 sm:h-48 bg-red-800/10 rounded-full blur-xl animate-bounce'></div>
      <div className='absolute top-1/2 left-1/4 w-12 sm:w-24 h-12 sm:h-24 bg-amber-200/5 rounded-full blur-lg animate-pulse'></div>
      
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-6 sm:mb-8 lg:mb-12'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200'>Immersive VR Experience</h2>
            <p className='mt-2 sm:mt-3 text-amber-100 text-sm sm:text-base lg:text-lg'>Step into ancient monasteries through cutting-edge virtual reality technology</p>
          </div>

          {/* Sketchfab Embed */}
          <div className='relative bg-gradient-to-br from-amber-200/10 to-red-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-amber-200/20 backdrop-blur-sm'>
            <div className='sketchfab-embed-wrapper' style={{ width: '100%', height: '300px' }}>
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
              <p style={{ fontSize: '10px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
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
      </div>
    </section>
  )
}

export default VRExperience
