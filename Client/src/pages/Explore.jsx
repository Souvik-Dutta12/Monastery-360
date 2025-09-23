import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { tourData, mustVisitSections, vrExperiences, regionHighlights, regionDescriptions } from '../data/tourData'

// Interactive Map Component
const InteractiveMap = ({ selectedRegion, onRegionSelect }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width = 600
    const height = canvas.height = 400

    const drawMap = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Background
      ctx.fillStyle = '#1d1903'
      ctx.fillRect(0, 0, width, height)

      // Sikkim outline
      ctx.strokeStyle = '#FEF3C7'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(100, 50)
      ctx.lineTo(500, 50)
      ctx.lineTo(500, 350)
      ctx.lineTo(100, 350)
      ctx.closePath()
      ctx.stroke()

      // Regions
      const regions = [
        { name: 'North', x: 300, y: 100, color: '#7F1D1D', monasteries: ['Lachen', 'Lachung', 'Gurudongmar'] },
        { name: 'South', x: 300, y: 300, color: '#991B1B', monasteries: ['Namchi', 'Ravangla', 'Temi'] },
        { name: 'East', x: 450, y: 200, color: '#B91C1C', monasteries: ['Gangtok', 'Rumtek', 'Enchey'] },
        { name: 'West', x: 150, y: 200, color: '#DC2626', monasteries: ['Pemayangtse', 'Tashiding', 'Yuksom'] }
      ]

      regions.forEach(region => {
        // Region circle
        ctx.fillStyle = region.color
        ctx.beginPath()
        ctx.arc(region.x, region.y, 40, 0, Math.PI * 2)
        ctx.fill()

        // Highlight selected region
        if (selectedRegion === region.name) {
          ctx.strokeStyle = '#FEF3C7'
          ctx.lineWidth = 4
          ctx.beginPath()
          ctx.arc(region.x, region.y, 45, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Region label
        ctx.fillStyle = '#FEF3C7'
        ctx.font = 'bold 16px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(region.name, region.x, region.y + 5)

        // Monastery dots
        region.monasteries.forEach((monastery, index) => {
          const angle = (index * 2 * Math.PI) / region.monasteries.length
          const dotX = region.x + Math.cos(angle) * 25
          const dotY = region.y + Math.sin(angle) * 25
          
          ctx.fillStyle = '#FEF3C7'
          ctx.beginPath()
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
          ctx.fill()
        })
      })

      // Central Gangtok marker
      ctx.fillStyle = '#FEF3C7'
      ctx.beginPath()
      ctx.arc(300, 200, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillText('Gangtok', 300, 220)
    }

    drawMap()
  }, [selectedRegion])

  return (
    <div className='relative'>
      <canvas 
        ref={canvasRef} 
        className='w-full h-full  rounded-xl border border-amber-200/20'
        onClick={(e) => {
          const rect = canvasRef.current.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          
          // Simple click detection for regions
          if (x > 260 && x < 340 && y > 60 && y < 140) onRegionSelect('North')
          else if (x > 260 && x < 340 && y > 260 && y < 340) onRegionSelect('South')
          else if (x > 410 && x < 490 && y > 160 && y < 240) onRegionSelect('East')
          else if (x > 110 && x < 190 && y > 160 && y < 240) onRegionSelect('West')
        }}
      />
      <div className='absolute top-4 hidden md:flex flex-col left-4 bg-[#1d1903]/90 backdrop-blur-sm rounded-lg p-3 border border-amber-200/20'>
        <div className='text-amber-300 text-sm font-bold'>Interactive Map</div>
        <div className='text-amber-100/70 text-xs'>Click regions to explore</div>
      </div>
    </div>
  )
}

// AI Tour Guide Component
const AITourGuide = ({ region, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)


  const data = tourData[region]

  const generateAITour = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setCurrentStep(1)
    }, 2000)
  }

  return (
    <div className='fixed inset-0 z-[9999] bg-[#1d1903]/95 backdrop-blur-md flex items-center justify-center p-4'>
      <div className='bg-[#1d1903] border border-amber-200/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Header */}
        <div className='p-6 border-b  border-amber-200/20'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='prata text-3xl text-amber-200'>{data.title}</h2>
              <p className='text-amber-100/70 mt-1'>AI-Powered Tour Guide for {region} Sikkim</p>
            </div>
            <button 
              onClick={onClose}
              className='p-2 hover:bg-amber-200/10 rounded-lg transition-colors'
            >
              <i className='ri-close-line text-amber-200 text-2xl'></i>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className='p-6 space-y-6'>
          {/* Tour Overview */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-[#241f07]/60 rounded-lg p-4 border border-amber-200/10'>
              <div className='flex items-center gap-2 mb-2'>
                <i className='ri-time-line text-amber-300'></i>
                <span className='text-amber-200 font-semibold'>Duration</span>
              </div>
              <p className='text-amber-100/70'>{data.duration}</p>
            </div>
            <div className='bg-[#241f07]/60 rounded-lg p-4 border border-amber-200/10'>
              <div className='flex items-center gap-2 mb-2'>
                <i className='ri-bar-chart-line text-amber-300'></i>
                <span className='text-amber-200 font-semibold'>Difficulty</span>
              </div>
              <p className='text-amber-100/70'>{data.difficulty}</p>
            </div>
            <div className='bg-[#241f07]/60 rounded-lg p-4 border border-amber-200/10'>
              <div className='flex items-center gap-2 mb-2'>
                <i className='ri-star-line text-amber-300'></i>
                <span className='text-amber-200 font-semibold'>Highlights</span>
              </div>
              <p className='text-amber-100/70'>{data.highlights.length} locations</p>
            </div>
          </div>

          {/* AI Tour Generation */}
          {currentStep === 0 && (
            <div className='text-center py-8'>
              <div className='w-20 h-20 bg-gradient-to-br from-amber-200 to-red-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <i className='ri-robot-2-line text-3xl text-[#1d1903]'></i>
              </div>
              <h3 className='prata text-2xl text-amber-200 mb-2'>Generate Your AI Tour</h3>
              <p className='text-amber-100/70 mb-6'>Our AI will create a personalized itinerary based on your preferences</p>
              <button 
                onClick={generateAITour}
                disabled={isGenerating}
                className='px-6 py-3 bg-red-900 hover:bg-red-800 disabled:opacity-50 transition-colors text-amber-100 rounded-lg flex items-center gap-2 mx-auto'
              >
                {isGenerating ? (
                  <>
                    <i className='ri-loader-4-line animate-spin'></i>
                    <span>Generating Tour...</span>
                  </>
                ) : (
                  <>
                    <i className='ri-magic-line'></i>
                    <span>Generate AI Tour</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Generated Tour Content */}
          {currentStep === 1 && (
            <div className='space-y-6'>
              {/* Itinerary */}
              <div>
                <h3 className='prata text-2xl text-amber-200 mb-4'>Your Personalized Itinerary</h3>
                <div className='space-y-4'>
                  {data.itinerary.map((day, index) => (
                    <div key={index} className='bg-[#241f07]/60 rounded-lg p-4 border border-amber-200/10'>
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='w-8 h-8 bg-red-900 rounded-full flex items-center justify-center'>
                          <span className='text-amber-100 text-sm font-bold'>{day.day}</span>
                        </div>
                        <h4 className='prata text-lg text-amber-200'>{day.title}</h4>
                      </div>
                      <ul className='space-y-1 ml-11'>
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className='flex items-center gap-2 text-amber-100/70'>
                            <i className='ri-checkbox-circle-line text-green-400'></i>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* VR Spots */}
              <div>
                <h3 className='prata text-2xl text-amber-200 mb-4'>VR Experience Spots</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {data.vrSpots.map((spot, index) => (
                    <div key={index} className='bg-[#241f07]/60 rounded-lg p-4 border border-amber-200/10'>
                      <div className='flex items-center gap-2 mb-2'>
                        <i className='ri-vr-line text-amber-300'></i>
                        <span className='text-amber-200 font-semibold'>{spot}</span>
                      </div>
                      <Link 
                        to='/vr-tour'
                        className='text-red-900 hover:text-red-800 text-sm underline'
                      >
                        Start VR Tour
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Tips */}
              <div>
                <h3 className='prata text-2xl text-amber-200 mb-4'>AI Travel Tips</h3>
                <div className='bg-[#241f07]/60 rounded-lg p-4 border border-amber-200/10'>
                  <div className='flex items-start gap-3'>
                    <i className='ri-lightbulb-line text-amber-300 text-xl mt-1'></i>
                    <ul className='space-y-2'>
                      {data.aiTips.map((tip, index) => (
                        <li key={index} className='text-amber-100/70 flex items-start gap-2'>
                          <span className='text-amber-300'>•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-col lg:flex-row gap-4 pt-4'>
                <button className='px-6 py-3 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg flex items-center gap-2'>
                  <i className='ri-download-line'></i>
                  <span>Download Itinerary</span>
                </button>
                <button className='px-6 py-3 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg flex items-center gap-2'>
                  <i className='ri-share-line'></i>
                  <span>Share Tour</span>
                </button>
                <button 
                  onClick={() => setCurrentStep(0)}
                  className='px-6 py-3 bg-[#241f07] hover:bg-[#2d1a0a] transition-colors text-amber-200 rounded-lg flex items-center gap-2'
                >
                  <i className='ri-refresh-line'></i>
                  <span>Regenerate</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Explore = () => {
  const [selectedRegion, setSelectedRegion] = useState('East')
  const [showAIGuide, setShowAIGuide] = useState(false)

  return (
    <div className='w-full min-h-screen'>
      <Nav />
      
      {/* Hero Section - Dark theme */}
      <section className='relative py-20 px-6 md:px-10 lg:px-16  text-amber-50'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#1d1903] via-[#2d1a0a] to-[#1d1903]'></div>
        <div className='absolute inset-0 bg-gradient-to-t to-red-900/30 via-transparent  from-amber-900/20 '></div>
        
        <div className='relative mt-50 z-10 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='prata text-5xl md:text-7xl font-bold text-amber-200 mb-6'>
              Explore <span className='text-amber-300'>Sikkim</span>
            </h1>
            <p className='text-xl md:text-2xl text-amber-100/80 max-w-3xl mx-auto'>
              Discover the mystical beauty of Sikkim through AI-guided tours, interactive maps, and immersive VR experiences
            </p>
          </div>

          {/* Quick Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {[
              { number: '200+', label: 'Monasteries' },
              { number: '50+', label: 'Natural Sites' },
              { number: '15+', label: 'Trekking Routes' },
              { number: '4', label: 'Regions' }
            ].map((stat, index) => (
              <div key={index} className='text-center bg-[#241f07]/60 rounded-xl p-6 border border-amber-200/10'>
                <div className='text-3xl md:text-4xl font-bold text-amber-300 mb-2'>{stat.number}</div>
                <div className='text-amber-100/70'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Light theme */}
      <section className='py-16 px-6 md:px-10 lg:px-16 bg-amber-50 text-[#1d1903]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='prata text-4xl md:text-5xl font-bold text-red-800 mb-4'>Interactive Map</h2>
            <p className='text-xl text-red-900/70'>Click on regions to explore AI-guided tours</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Map */}
            <div className='bg-white/80 rounded-2xl p-8 border border-amber-200 shadow-sm'>
              <InteractiveMap 
                selectedRegion={selectedRegion} 
                onRegionSelect={setSelectedRegion}
              />
            </div>

            {/* Region Info */}
            <div className='space-y-6'>
              <div>
                <h3 className='prata text-3xl text-red-800 mb-4'>{selectedRegion} Sikkim</h3>
                <p className='text-red-900/80 text-lg leading-relaxed'>
                  {regionDescriptions[selectedRegion]}
                </p>
              </div>

              <div className='space-y-4'>
                <h4 className='prata text-xl text-red-800'>Key Highlights</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {regionHighlights[selectedRegion].map((highlight, index) => (
                    <div key={index} className='flex items-center gap-2 text-red-900/70'>
                      <i className='ri-checkbox-circle-line text-green-600'></i>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setShowAIGuide(true)}
                className='w-full px-6 py-4 cursor-pointer bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg flex items-center justify-center gap-2'
              >
                <i className='ri-robot-2-line'></i>
                <span >Get AI Tour Guide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Must Visit Sections - Dark theme */}
      <section className='py-16 px-6 md:px-10 lg:px-16 bg-gradient-to-bl from-[#FFF5E0] via-[#2d1a0a] to-[#1d1903] text-amber-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='prata text-4xl md:text-5xl font-bold text-amber-200 mb-4'>Must Visit Sections</h2>
            <p className='text-xl text-amber-100/80'>Essential experiences for every Sikkim visitor</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {mustVisitSections.map((section, index) => (
              <div key={index} className='group bg-[#241f07]/60 border border-amber-200/10 rounded-xl p-6 hover:border-amber-200/30 transition-colors'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-red-900/80 rounded-lg flex items-center justify-center'>
                    <i className={`${section.icon} text-amber-200 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className='prata text-lg font-semibold text-amber-200'>{section.title}</h3>
                    <div className='text-amber-300 font-bold'>{section.count}</div>
                  </div>
                </div>
                <p className='text-amber-100/70 mb-4'>{section.description}</p>
                <div className='space-y-2'>
                  {section.highlights.map((highlight, idx) => (
                    <div key={idx} className='flex items-center gap-2 text-sm text-amber-100/70'>
                      <i className='ri-star-line text-amber-300'></i>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className='w-full cursor-pointer mt-4 px-4 py-2 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg text-sm'>
                  Explore {section.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR Experience Section - Light theme */}
      <section className='py-16 px-6 md:px-10 lg:px-16 bg-amber-50 text-[#1d1903]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='prata text-4xl md:text-5xl font-bold text-red-800 mb-4'>VR Exploration</h2>
            <p className='text-xl text-red-900/70'>Experience Sikkim's beauty through immersive virtual reality</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {vrExperiences.map((vr, index) => (
              <div key={index} className='group bg-white/80 border border-amber-200 rounded-xl p-6 hover:shadow-md transition-shadow'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-amber-200 to-red-900 rounded-lg flex items-center justify-center'>
                    <i className={`${vr.icon} text-[#1d1903] text-xl`}></i>
                  </div>
                  <div>
                    <h3 className='prata text-lg font-semibold text-red-800'>{vr.title}</h3>
                  </div>
                </div>
                <p className='text-red-900/80 mb-4'>{vr.desc}</p>
                <div className='space-y-2 mb-6'>
                  {vr.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-2 text-sm text-red-900/70'>
                      <i className='ri-checkbox-circle-line text-green-600'></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to='/vr-tour'
                  className='w-full cursor-pointer px-4 py-2 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg text-sm flex items-center justify-center gap-2'
                >
                  <i className='ri-vr-line'></i>
                  <span>Start VR Tour</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* AI Tour Guide Modal */}
      {showAIGuide && (
        <AITourGuide 
          region={selectedRegion} 
          onClose={() => setShowAIGuide(false)} 
        />
      )}
    </div>
  )
}

export default Explore
