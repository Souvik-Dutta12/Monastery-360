import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThreeJSMonastery from './ThreeJSMonastery'

const VRExperience = () => {
  const [selectedModel, setSelectedModel] = useState('rumtek')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const monasteryModels = [
    { id: 'rumtek', name: 'Rumtek Monastery', desc: 'The Dharmachakra Centre' },
    { id: 'pemayangtse', name: 'Pemayangtse Monastery', desc: 'Perfect Sublime Lotus' },
    { id: 'tashiding', name: 'Tashiding Monastery', desc: 'Sacred Hill of Glory' }
  ]

  return (
    <section className='w-full relative text-amber-50 py-16 px-6 md:px-10 lg:px-16 overflow-hidden'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#1d1903] via-[#2d1a0a] to-[#1d1903]'></div>
      <div className='absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-red-900/30'></div>
      <div className='absolute inset-0 bg-gradient-to-bl from-transparent via-amber-800/10 to-transparent'></div>
      
      {/* Animated Background Elements */}
      <div className='absolute top-20 left-10 w-32 h-32 bg-amber-300/10 rounded-full blur-xl animate-pulse'></div>
      <div className='absolute bottom-20 right-10 w-48 h-48 bg-red-800/10 rounded-full blur-xl animate-bounce'></div>
      <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-amber-200/5 rounded-full blur-lg animate-pulse'></div>
      
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='prata text-4xl md:text-5xl font-bold text-amber-200'>Immersive VR Experience</h2>
            <p className='mt-3 text-amber-100/80 text-lg'>Step into ancient monasteries through cutting-edge virtual reality technology</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* 3D Monastery Model Showcase */}
            <div className='relative'>
              <div className='relative bg-gradient-to-br from-amber-200/10 to-red-900/20 rounded-2xl p-8 border border-amber-200/20 backdrop-blur-sm'>
                {/* Monastery Selection */}
                <div className='mb-4 flex gap-2 justify-center'>
                  {monasteryModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                        selectedModel === model.id
                          ? 'bg-amber-200 text-red-900'
                          : 'bg-amber-200/20 text-amber-200 hover:bg-amber-200/30'
                      }`}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>

                {/* 3D Monastery Model */}
                <div className='relative mx-auto w-80 h-60 transform hover:scale-105 transition-transform duration-500'>
                  <ThreeJSMonastery 
                    width={320} 
                    height={240}
                    isInteractive={true}
                    autoRotate={true}
                    showControls={true}
                  />
                </div>
                
                {/* Floating Elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-amber-300 rounded-full animate-pulse'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-red-800 rounded-full animate-bounce'></div>
                <div className='absolute top-1/2 -left-4 w-4 h-4 bg-amber-200 rounded-full animate-ping'></div>
                
                {/* VR Stats Overlay */}
                <div className='absolute top-4 right-4 bg-[#1d1903]/90 backdrop-blur-sm rounded-lg p-3 border border-amber-200/20'>
                  <div className='text-amber-300 text-sm font-bold'>4K Resolution</div>
                  <div className='text-amber-100/70 text-xs'>90 FPS</div>
                </div>
                
                {/* Model Info */}
                <div className='absolute top-4 left-4 bg-[#1d1903]/90 backdrop-blur-sm rounded-lg p-3 border border-amber-200/20'>
                  <div className='text-amber-300 text-sm font-bold'>
                    {monasteryModels.find(m => m.id === selectedModel)?.name}
                  </div>
                  <div className='text-amber-100/70 text-xs'>
                    {monasteryModels.find(m => m.id === selectedModel)?.desc}
                  </div>
                </div>
                
                {/* Interactive Controls */}
                <div className='absolute bottom-4 left-4 flex gap-2'>
                  <Link 
                    to='/vr-tour'
                    className='px-3 py-1 bg-red-900/80 hover:bg-red-800 transition-colors text-amber-100 rounded-lg text-xs flex items-center gap-1'
                  >
                    <i className='ri-vr-cardboard-line'></i>
                    <span>Start VR Tour</span>
                  </Link>
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className='px-3 py-1 bg-amber-200/20 hover:bg-amber-200/30 transition-colors text-amber-200 rounded-lg text-xs flex items-center gap-1'
                  >
                    <i className='ri-fullscreen-line'></i>
                    <span>Full View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* VR Features & Controls */}
            <div className='space-y-8'>
              <div>
                <h3 className='prata text-3xl font-bold text-amber-200 mb-4'>Experience Sacred Spaces Like Never Before</h3>
                <p className='text-amber-100/80 text-lg leading-relaxed'>
                  Our advanced VR technology transports you directly into Sikkim's most sacred monasteries. 
                  Walk through ancient halls, witness traditional ceremonies, and explore hidden chambers 
                  with unprecedented realism.
                </p>
              </div>

              {/* VR Features Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {[
                  { icon: 'ri-vr-line', title: '360° Immersion', desc: 'Complete panoramic views' },
                  { icon: 'ri-hand-coin-line', title: 'Hand Tracking', desc: 'Natural interaction' },
                  { icon: 'ri-volume-up-line', title: 'Spatial Audio', desc: '3D sound experience' },
                  { icon: 'ri-eye-line', title: 'Eye Tracking', desc: 'Foveated rendering' },
                ].map((feature, idx) => (
                  <div key={idx} className='group bg-[#241f07]/60 border border-amber-200/10 rounded-xl p-4 hover:border-amber-200/30 transition-colors'>
                    <div className='flex items-center gap-3 mb-2'>
                      <i className={`${feature.icon} text-amber-300 text-xl`}></i>
                      <h4 className='prata text-lg font-semibold text-amber-200'>{feature.title}</h4>
                    </div>
                    <p className='text-amber-100/70 text-sm'>{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* VR Controls */}
              <div className='space-y-4'>
                <h4 className='prata text-xl font-semibold text-amber-200'>VR Controls</h4>
                <div className='grid grid-cols-2 gap-3'>
                  <Link 
                    to='/vr-tour'
                    className='px-4 py-3 bg-red-900/80 hover:bg-red-800 transition-colors text-amber-100 rounded-lg border border-red-800 flex items-center gap-2'
                  >
                    <i className='ri-vr-cardboard-line'></i>
                    <span>Start VR Tour</span>
                  </Link>
                  <button className='px-4 py-3 bg-amber-200/20 hover:bg-amber-200/30 transition-colors text-amber-200 rounded-lg border border-amber-200/30 flex items-center gap-2'>
                    <i className='ri-download-line'></i>
                    <span>Download App</span>
                  </button>
                </div>
                <div className='flex items-center gap-4 text-sm text-amber-100/70'>
                  <span className='flex items-center gap-1'>
                    <i className='ri-checkbox-circle-line text-green-400'></i>
                    Compatible with Oculus, HTC Vive
                  </span>
                  <span className='flex items-center gap-1'>
                    <i className='ri-smartphone-line text-blue-400'></i>
                    Mobile VR Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* VR Gallery */}
          <div className='mt-16'>
            <h3 className='prata text-2xl font-bold text-amber-200 text-center mb-8'>VR Experience Gallery</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                { img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=60', title: 'Prayer Hall', desc: 'Immersive meditation space' },
                { img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=60', title: 'Sacred Courtyard', desc: '360° monastery grounds' },
                { img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=300&q=60', title: 'Ancient Library', desc: 'Digital manuscript archive' },
                { img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=60', title: 'Ceremony Room', desc: 'Live ritual experience' },
              ].map((item, idx) => (
                <div key={idx} className='group relative overflow-hidden rounded-xl border border-amber-200/10 bg-[#241f07]/60 hover:border-amber-200/30 transition-colors'>
                  <div className='relative h-48 overflow-hidden'>
                    <img src={item.img} alt={item.title} className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110' />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#1d1903] via-transparent to-transparent opacity-60'></div>
                    <div className='absolute top-3 right-3 w-8 h-8 bg-red-900/80 rounded-full flex items-center justify-center'>
                      <i className='ri-vr-line text-amber-200 text-sm'></i>
                    </div>
                    <div className='absolute bottom-3 left-3 right-3'>
                      <h4 className='prata text-lg text-amber-200'>{item.title}</h4>
                      <p className='text-amber-100/70 text-sm'>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className='fixed inset-0 z-50 bg-black flex items-center justify-center'>
          <div className='w-full h-full relative'>
            <button
              onClick={() => setIsFullscreen(false)}
              className='absolute top-4 right-4 z-10 px-4 py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg flex items-center gap-2'
            >
              <i className='ri-close-line'></i>
              <span>Exit Fullscreen</span>
            </button>
            <ThreeJSMonastery 
              width={window.innerWidth} 
              height={window.innerHeight}
              isInteractive={true}
              autoRotate={true}
              showControls={true}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default VRExperience
