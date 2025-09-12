import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// 3D Monastery Model Component
const Monastery3DModel = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const rotationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width = 400
    const height = canvas.height = 300

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#1d1903')
      gradient.addColorStop(0.5, '#2d1a0a')
      gradient.addColorStop(1, '#1d1903')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw 3D monastery structure
      ctx.save()
      ctx.translate(width / 2, height / 2)
      ctx.rotate(rotationRef.current)

      // Main building
      ctx.fillStyle = '#7F1D1D'
      ctx.fillRect(-80, -60, 160, 120)
      
      // Roof
      ctx.fillStyle = '#991B1B'
      ctx.beginPath()
      ctx.moveTo(-90, -60)
      ctx.lineTo(0, -100)
      ctx.lineTo(90, -60)
      ctx.closePath()
      ctx.fill()

      // Windows
      ctx.fillStyle = '#FEF3C7'
      ctx.fillRect(-60, -40, 20, 30)
      ctx.fillRect(-20, -40, 20, 30)
      ctx.fillRect(20, -40, 20, 30)
      ctx.fillRect(60, -40, 20, 30)

      // Door
      ctx.fillStyle = '#1d1903'
      ctx.fillRect(-15, 20, 30, 40)

      // Stupa/Tower
      ctx.fillStyle = '#FEF3C7'
      ctx.fillRect(-20, -120, 40, 60)
      ctx.fillStyle = '#991B1B'
      ctx.beginPath()
      ctx.arc(0, -120, 20, 0, Math.PI * 2)
      ctx.fill()

      // Prayer flags
      ctx.strokeStyle = '#FEF3C7'
      ctx.lineWidth = 2
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(-60 + i * 30, -100)
        ctx.lineTo(-50 + i * 30, -80)
        ctx.stroke()
      }

      ctx.restore()

      rotationRef.current += 0.005
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className='relative'>
      <canvas 
        ref={canvasRef} 
        className='w-full h-full rounded-xl shadow-2xl border border-amber-200/20'
        style={{ background: 'transparent' }}
      />
      <div className='absolute inset-0 bg-gradient-to-t from-[#1d1903]/50 via-transparent to-transparent rounded-xl'></div>
      <div className='absolute bottom-4 left-4 right-4'>
        <div className='text-amber-200 text-sm font-semibold'>3D Monastery Model</div>
        <div className='text-amber-100/70 text-xs'>Interactive 360° View</div>
      </div>
    </div>
  )
}

const VRExperience = () => {
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
                {/* 3D Monastery Model */}
                <div className='relative mx-auto w-80 h-60 transform hover:scale-105 transition-transform duration-500'>
                  <Monastery3DModel />
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
                
                {/* Interactive Controls */}
                <div className='absolute bottom-4 left-4 flex gap-2'>
                  <Link 
                    to='/vr-tour'
                    className='px-3 py-1 bg-red-900/80 hover:bg-red-800 transition-colors text-amber-100 rounded-lg text-xs flex items-center gap-1'
                  >
                    <i className='ri-vr-cardboard-line'></i>
                    <span>Start VR Tour</span>
                  </Link>
                  <button className='px-3 py-1 bg-amber-200/20 hover:bg-amber-200/30 transition-colors text-amber-200 rounded-lg text-xs flex items-center gap-1'>
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
    </section>
  )
}

export default VRExperience
