import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VRTour = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const rotationRef = useRef(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width = isFullscreen ? 1200 : 800
    const height = canvas.height = isFullscreen ? 800 : 600

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Sky gradient background
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height)
      skyGradient.addColorStop(0, '#1e3a8a') // Deep blue sky
      skyGradient.addColorStop(0.7, '#fbbf24') // Golden sunset
      skyGradient.addColorStop(1, '#dc2626') // Red horizon
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, width, height)

      // Mountains in background
      ctx.fillStyle = '#374151'
      ctx.beginPath()
      ctx.moveTo(0, height * 0.6)
      ctx.lineTo(width * 0.3, height * 0.4)
      ctx.lineTo(width * 0.6, height * 0.5)
      ctx.lineTo(width, height * 0.6)
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fill()

      // Monastery complex
      ctx.save()
      ctx.translate(width / 2, height * 0.7)
      
      if (isPlaying) {
        ctx.rotate(rotationRef.current)
      }

      // Main monastery building
      ctx.fillStyle = '#7F1D1D'
      ctx.fillRect(-100, -80, 200, 160)
      
      // Roof
      ctx.fillStyle = '#991B1B'
      ctx.beginPath()
      ctx.moveTo(-110, -80)
      ctx.lineTo(0, -120)
      ctx.lineTo(110, -80)
      ctx.closePath()
      ctx.fill()

      // Windows with light
      ctx.fillStyle = '#FEF3C7'
      ctx.fillRect(-80, -60, 25, 35)
      ctx.fillRect(-40, -60, 25, 35)
      ctx.fillRect(15, -60, 25, 35)
      ctx.fillRect(55, -60, 25, 35)

      // Door
      ctx.fillStyle = '#1d1903'
      ctx.fillRect(-20, 20, 40, 60)

      // Stupa/Tower
      ctx.fillStyle = '#FEF3C7'
      ctx.fillRect(-30, -150, 60, 70)
      ctx.fillStyle = '#991B1B'
      ctx.beginPath()
      ctx.arc(0, -150, 30, 0, Math.PI * 2)
      ctx.fill()

      // Prayer flags
      ctx.strokeStyle = '#FEF3C7'
      ctx.lineWidth = 3
      for (let i = 0; i < 7; i++) {
        ctx.beginPath()
        ctx.moveTo(-90 + i * 30, -120)
        ctx.lineTo(-80 + i * 30, -100)
        ctx.stroke()
      }

      // Courtyard
      ctx.fillStyle = '#FEF3C7'
      ctx.fillRect(-150, 40, 300, 20)

      // Trees
      ctx.fillStyle = '#166534'
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.arc(-200 + i * 200, 30, 25, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()

      if (isPlaying) {
        rotationRef.current += 0.003
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isFullscreen, isPlaying])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
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

      {/* VR Canvas */}
      <div className='w-full h-full flex items-center justify-center'>
        <canvas 
          ref={canvasRef} 
          className={`${isFullscreen ? 'w-full h-full' : 'w-full max-w-4xl h-full max-h-3xl'} rounded-lg shadow-2xl border border-amber-200/20`}
        />
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
                <button className='w-full px-3 py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg text-sm flex items-center gap-2'>
                  <i className='ri-vr-cardboard-line'></i>
                  <span>Enter VR Mode</span>
                </button>
                <button className='w-full px-3 py-2 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg text-sm flex items-center gap-2'>
                  <i className='ri-share-line'></i>
                  <span>Share Tour</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VR Instructions */}
      <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
        <div className='bg-[#1d1903]/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200/20 max-w-xs'>
          <h4 className='prata text-lg text-amber-200 mb-2'>VR Controls</h4>
          <div className='space-y-2 text-sm text-amber-100/70'>
            <div className='flex items-center gap-2'>
              <i className='ri-mouse-line'></i>
              <span>Click & drag to look around</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-keyboard-line'></i>
              <span>WASD to move</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='ri-space'></i>
              <span>Space to jump</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VRTour
