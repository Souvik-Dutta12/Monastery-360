import React, { useMemo, useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import CarouselPage from '../components/CarouselPage'
import Footer from '../components/Footer'


const Home = () => {
  // Live Cultural Events: simple calendar + schedule state
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()))
  const eventsByDate = useMemo(() => ({
    // yyyy-mm-dd: events
    // This is demo data for UI illustration
    [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`]: [
      { time: '06:00', title: 'Morning Prayer Ceremony', place: 'Rumtek Monastery', type: 'Ceremony', live: true },
      { time: '18:00', title: 'Butter Lamp Ritual', place: 'Pemayangtse', type: 'Ritual' }
    ],
    [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate() + 1).padStart(2, '0')}`]: [
      { time: '10:00', title: 'Blessing Ceremony', place: 'Enchey Monastery', type: 'Ceremony' },
      { time: '16:00', title: 'Meditation Workshop', place: 'Tashiding', type: 'Workshop' }
    ]
  }), [])

  const monthMatrix = useMemo(() => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startWeekday = (firstDay.getDay() + 6) % 7 // Monday=0
    const daysInMonth = lastDay.getDate()
    const cells = []
    for (let i = 0; i < startWeekday; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
    while (cells.length % 7 !== 0) cells.push(null)
    const rows = []
    for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
    return rows
  }, [selectedDate])

  const fmt = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  const selectedKey = fmt(selectedDate)
  const dayEvents = eventsByDate[selectedKey] || []

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      from: 'bot',
      text: "Namaste! I'm your AI Cultural Guide. Ask me about monasteries, rituals, or events.",
    }
  ])
  const sendChat = (text) => {
    if (!text.trim()) return
    const newMsgs = [...chatMessages, { from: 'user', text }]
    setChatMessages(newMsgs)
    setChatInput('')
    // Simple bot echo for demo
    setTimeout(() => {
      setChatMessages((prev) => ([...prev, { from: 'bot', text: 'I\'ll help you with: ' + text }]))
    }, 400)
  }
  return (
    <div className=' w-full h-full ' >
      {/* HERO: Dark background with light text */}
      <div className='relative w-full h-screen'>
        <Nav />
        <div className='absolute inset-0'>
          <img src='/bg2.jpg' alt="Monastery background" className='w-full h-full object-cover' />
        </div>
        <div className='absolute inset-0 bg-[#1d1903]/80'></div>
        <div className='relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6'>
          <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl prata font-black text-amber-300 tracking-tight'>
            Monastery <span className='text-amber-50'>360</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 prata font-semibold text-amber-50 px-4'>From Ancient Walls to Digital Worlds</p>
          <p className='text-base sm:text-lg md:text-2xl prata font-light text-amber-100 mt-2 px-4'>A journey into <span className='text-amber-300'>SIKKIM'S</span> Living Heritage</p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 px-4'>
            <Link to={'#'} className='w-full sm:w-auto px-4 sm:px-6 py-3 bg-red-900 hover:bg-red-800 transition-colors text-amber-100 rounded-lg border border-red-800 inline-flex items-center justify-center gap-2'>
              <span className='prata text-base sm:text-lg'>Start Virtual Tour</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link to={'/sign-in'} className='w-full sm:w-auto px-4 sm:px-6 py-3 bg-amber-200 hover:bg-amber-300 transition-colors text-red-900 rounded-lg border border-amber-300 inline-flex items-center justify-center gap-2'>
              <span className='prata text-base sm:text-lg'>Book Your Visit</span>
            </Link>
          </div>
          <div className='mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-amber-100/90 w-full max-w-2xl'>
            {[
              { n: '200+', l: 'Monasteries' },
              { n: '10M+', l: 'Virtual Visitors' },
              { n: '15', l: 'Languages' },
            ].map((s, i) => (
              <div key={i} className='text-center'>
                <div className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-300'>{s.n}</div>
                <div className='text-xs sm:text-sm md:text-base'>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES: Light background with dark text, same palette */}
      <section className='w-full bg-amber-50 text-[#1d1903] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-10'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800'>Revolutionary Digital Heritage Experience</h2>
            <p className='mt-3 text-red-900/70 text-base sm:text-lg px-4'>Cutting-edge technology meets ancient wisdom to preserve Sikkim's monastery heritage</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {[
              { icon: 'ri-vr-line', title: '360° Virtual Tours', desc: 'Walk through monastery halls and sacred spaces with detail.' },
              { icon: 'ri-robot-2-line', title: 'AI Cultural Guide', desc: 'Personalized answers about Buddhist culture and history.' },
              { icon: 'ri-archive-2-line', title: 'Digital Archives', desc: 'Ancient manuscripts and murals in high-resolution.' },
              { icon: 'ri-map-pin-2-line', title: 'Interactive Map', desc: 'Geo-tagged locations and routes with nearby services.' },
              { icon: 'ri-headphone-line', title: 'Smart Audio Guides', desc: 'Location-based narration with offline support.' },
              { icon: 'ri-calendar-event-line', title: 'Cultural Calendar', desc: 'Festivals and rituals with booking options.' },
            ].map((f, idx) => (
              <div key={idx} className='group bg-white/70 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center gap-3'>
                  <i className={`${f.icon} text-red-800 text-2xl`}></i>
                  <h3 className='prata text-xl font-semibold text-red-900'>{f.title}</h3>
                </div>
                <p className='mt-3 text-red-900/80'>{f.desc}</p>
                <div className='mt-4 h-1 w-10 bg-amber-300 rounded group-hover:w-16 transition-all'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONASTERIES: Dark section with light text */}
      <section className='w-full bg-[#1d1903] text-amber-50 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8'>
            <div className='flex-1'>
              <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200'>Discover Sacred Monasteries</h2>
              <p className='mt-2 text-amber-100/80 text-sm sm:text-base'>Journey through Sikkim's most revered spiritual sites</p>
            </div>
            <Link to={'#'} className='px-4 sm:px-5 py-2 rounded-lg bg-amber-200 text-red-900 hover:bg-amber-300 transition-colors inline-flex items-center gap-2 text-sm sm:text-base self-start sm:self-auto'>
              View All <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {[
              { title: 'Rumtek Monastery', subtitle: 'The Dharmachakra Centre', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60', details: [
                { icon: 'ri-calendar-line', text: 'Founded: 1966' },
                { icon: 'ri-mountain-line', text: 'Altitude: 1,550m' },
                { icon: 'ri-team-line', text: '300+ Monks' },
              ] },
              { title: 'Pemayangtse Monastery', subtitle: 'Perfect Sublime Lotus', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60', details: [
                { icon: 'ri-calendar-line', text: 'Founded: 1705' },
                { icon: 'ri-mountain-line', text: 'Altitude: 2,085m' },
                { icon: 'ri-vip-crown-line', text: 'Royal Monastery' },
              ] },
              { title: 'Tashiding Monastery', subtitle: 'Sacred Hill of Glory', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=60', details: [
                { icon: 'ri-calendar-line', text: 'Founded: 1641' },
                { icon: 'ri-mountain-line', text: 'Altitude: 1,465m' },
                { icon: 'ri-water-flash-line', text: 'Holy Water Site' },
              ] },
            ].map((m, idx) => (
              <div key={idx} className='group overflow-hidden rounded-xl border border-amber-200/10 bg-[#241f07] hover:border-amber-200/30 transition-colors'>
                <div className='relative h-48 sm:h-56 overflow-hidden'>
                  <img src={m.img} alt={m.title} className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#1d1903] via-transparent to-transparent opacity-70'></div>
                  <button className='absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-red-900/90 text-amber-100 hover:bg-red-800 transition-colors inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm'>
                    Virtual Tour <i className="ri-play-line"></i>
                  </button>
                </div>
                <div className='p-4 sm:p-5'>
                  <h3 className='prata text-xl sm:text-2xl text-amber-200'>{m.title}</h3>
                  <p className='text-amber-100/70 text-sm sm:text-base'>{m.subtitle}</p>
                  {m.details && (
                    <div className='mt-3 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-amber-100/80 text-xs sm:text-sm'>
                      {m.details.map((d, i) => (
                        <span key={i} className='inline-flex items-center gap-1'>
                          <i className={`${d.icon}`}></i>
                          {d.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL ARCHIVES: Match index.html content */}
      <section className='w-full bg-amber-50 text-[#1d1903] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-10'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800'>Digital Archives</h2>
            <p className='mt-3 text-red-900/70 text-base sm:text-lg px-4'>Explore ancient manuscripts, historical documents, and sacred art</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              { icon: 'ri-scroll-2-line', title: 'Ancient Manuscripts', desc: '500+ digitized manuscripts', count: '500+' },
              { icon: 'ri-palette-line', title: 'Sacred Murals', desc: 'High-resolution artwork scans', count: '1200+' },
              { icon: 'ri-camera-3-line', title: 'Historical Photos', desc: 'Century-old documentation', count: '800+' },
              { icon: 'ri-music-2-line', title: 'Chants & Prayers', desc: 'Traditional audio recordings', count: '300+' },
            ].map((c, idx) => (
              <div key={idx} className='relative group bg-white/80 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center gap-3'>
                  <i className={`${c.icon} text-red-800 text-2xl`}></i>
                  <h3 className='prata text-xl font-semibold text-red-900'>{c.title}</h3>
                </div>
                <p className='mt-3 text-red-900/80'>{c.desc}</p>
                <div className='absolute top-4 right-4 px-2 py-1 rounded-md bg-amber-200 text-red-900 text-sm font-semibold'>
                  {c.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR EXPERIENCE SECTION: Dark theme with 3D/VR showcase */}
      <section className='w-full bg-gradient-to-t from-[#FFF5E0] via-[#2d1a0a] to-[#1d1903] text-amber-50 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-12'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200'>Immersive VR Experience</h2>
            <p className='mt-3 text-amber-100/80 text-base sm:text-lg px-4'>Step into ancient monasteries through cutting-edge virtual reality technology</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
            {/* VR Showcase */}
            <div className='relative'>
              <div className='relative bg-gradient-to-br from-amber-200/10 to-red-900/20 rounded-2xl p-4 sm:p-8 border border-amber-200/20'>
                {/* VR Headset Mockup */}
                <div className='relative mx-auto w-48 sm:w-64 h-36 sm:h-48 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500'>
                  <div className='absolute inset-4 bg-gradient-to-br from-amber-200/20 to-red-900/30 rounded-xl overflow-hidden'>
                    <img 
                      src='https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=60' 
                      alt='VR Monastery View' 
                      className='w-full h-full object-cover opacity-80'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#1d1903] via-transparent to-transparent'></div>
                    <div className='absolute bottom-4 left-4 right-4'>
                      <div className='text-amber-200 text-sm font-semibold'>Rumtek Monastery</div>
                      <div className='text-amber-100/70 text-xs'>360° Virtual Tour</div>
                    </div>
                  </div>
                  {/* VR Controls */}
                  <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-700 rounded-full'></div>
                  <div className='absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-12 bg-gray-600 rounded-full'></div>
                </div>
                
                {/* Floating Elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-amber-300 rounded-full animate-pulse'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-red-800 rounded-full animate-bounce'></div>
                
                {/* VR Stats Overlay */}
                <div className='absolute top-4 right-4 bg-[#1d1903]/90 backdrop-blur-sm rounded-lg p-3 border border-amber-200/20'>
                  <div className='text-amber-300 text-sm font-bold'>4K Resolution</div>
                  <div className='text-amber-100/70 text-xs'>90 FPS</div>
                </div>
              </div>
            </div>

            {/* VR Features & Controls */}
            <div className='space-y-6 sm:space-y-8'>
              <div>
                <h3 className='prata text-2xl sm:text-3xl font-bold text-amber-200 mb-3 sm:mb-4'>Experience Sacred Spaces Like Never Before</h3>
                <p className='text-amber-100/80 text-base sm:text-lg leading-relaxed'>
                  Our advanced VR technology transports you directly into Sikkim's most sacred monasteries. 
                  Walk through ancient halls, witness traditional ceremonies, and explore hidden chambers 
                  with unprecedented realism.
                </p>
              </div>

              {/* VR Features Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
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
              <div className='space-y-3 sm:space-y-4'>
                <h4 className='prata text-lg sm:text-xl font-semibold text-amber-200'>VR Controls</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <button className='px-3 sm:px-4 py-2 sm:py-3 bg-red-900/80 hover:bg-red-800 transition-colors text-amber-100 rounded-lg border border-red-800 flex items-center justify-center gap-2 text-sm sm:text-base'>
                    <i className='ri-vr-cardboard-line'></i>
                    <span>Start VR Tour</span>
                  </button>
                  <button className='px-3 sm:px-4 py-2 sm:py-3 bg-amber-200/20 hover:bg-amber-200/30 transition-colors text-amber-200 rounded-lg border border-amber-200/30 flex items-center justify-center gap-2 text-sm sm:text-base'>
                    <i className='ri-download-line'></i>
                    <span>Download App</span>
                  </button>
                </div>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-amber-100/70'>
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
          <div className='mt-12 sm:mt-16'>
            <h3 className='prata text-xl sm:text-2xl font-bold text-amber-200 text-center mb-6 sm:mb-8'>VR Experience Gallery</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
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
      </section>

      {/* LIVE CULTURAL EVENTS: Calendar + schedule (light theme) */}
      <section className='w-full bg-amber-50 text-[#1d1903] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8'>
            <div className='flex-1'>
              <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800'>Live Cultural Events</h2>
              <p className='mt-2 text-red-900/70 text-sm sm:text-base'>Experience authentic Buddhist ceremonies and festivals in real-time</p>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              {['All', 'Ceremony', 'Workshop', 'Festival', 'Streaming'].map((t) => (
                <span key={t} className='px-2 sm:px-3 py-1 rounded-full border border-amber-300 text-red-900 bg-white hover:bg-amber-100 cursor-default text-xs sm:text-sm'>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Calendar */}
            <div className='col-span-1 bg-white/80 border border-amber-200 rounded-xl p-3 sm:p-4 shadow-sm'>
              <div className='flex items-center justify-between mb-3'>
                <button
                  className='px-2 sm:px-3 py-1 rounded bg-amber-200 text-red-900 hover:bg-amber-300 text-sm'
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
                >
                  <i className='ri-arrow-left-line'></i>
                </button>
                <div className='prata text-lg sm:text-xl text-red-900 text-center'>
                  {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
                </div>
                <button
                  className='px-2 sm:px-3 py-1 rounded bg-amber-200 text-red-900 hover:bg-amber-300 text-sm'
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
                >
                  <i className='ri-arrow-right-line'></i>
                </button>
              </div>
              <div className='grid grid-cols-7 text-center text-red-900/80 text-xs sm:text-sm mb-2'>
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                  <div key={d} className='py-1'>{d}</div>
                ))}
              </div>
              <div className='grid grid-cols-7 gap-1'>
                {monthMatrix.map((row, rIndex) => (
                  <React.Fragment key={rIndex}>
                    {row.map((cell, cIndex) => {
                      if (!cell) return <div key={cIndex} className='h-12 rounded'></div>
                      const key = fmt(cell)
                      const hasEvents = Boolean(eventsByDate[key])
                      const isToday = fmt(cell) === fmt(today)
                      const isSelected = fmt(cell) === fmt(selectedDate)
                      return (
                        <button
                          key={cIndex}
                          onClick={() => setSelectedDate(cell)}
                          className={`h-8 sm:h-12 rounded-md border text-xs sm:text-sm transition-colors ${
                            isSelected ? 'bg-amber-200 border-amber-300 text-red-900' : 'bg-white/70 border-amber-200 hover:bg-amber-100'
                          }`}
                        >
                          <div className='flex flex-col items-center justify-center h-full'>
                            <span className={`leading-none ${isToday ? 'text-red-800 font-semibold' : 'text-red-900'}`}>{cell.getDate()}</span>
                            {hasEvents && <span className='mt-0.5 sm:mt-1 h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-red-800'></span>}
                          </div>
                        </button>
                      )
                    })}
                  </React.Fragment>
                ))}
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <button className='text-sm text-red-900 underline' onClick={() => setSelectedDate(today)}>Today</button>
                <span className='text-sm text-red-900/70'>
                  {selectedDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>

            {/* Schedule */}
            <div className='col-span-1 lg:col-span-2 bg-white/80 border border-amber-200 rounded-xl p-4 sm:p-6 shadow-sm'>
              <div className='flex items-center justify-between mb-3 sm:mb-4'>
                <h3 className='prata text-xl sm:text-2xl text-red-900'>Schedule</h3>
                <span className='text-xs sm:text-sm text-red-900/70'>{dayEvents.length} events</span>
              </div>
              {dayEvents.length === 0 ? (
                <div className='text-red-900/70'>No events scheduled for this date.</div>
              ) : (
                <ul className='space-y-3 sm:space-y-4'>
                  {dayEvents.map((e, i) => (
                    <li key={i} className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-amber-200 bg-white'>
                      <div className='px-2 sm:px-3 py-1 rounded-md bg-amber-200 text-red-900 font-semibold text-xs sm:text-sm'>{e.time}</div>
                      <div className='flex-1'>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                          {e.live && <span className='inline-flex items-center gap-1 text-red-800 text-xs sm:text-sm'><span className='h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-red-800 animate-pulse'></span>LIVE</span>}
                          <h4 className='prata text-lg sm:text-xl text-red-900'>{e.title}</h4>
                        </div>
                        <div className='text-red-900/70 text-sm sm:text-base'>{e.place}</div>
                        <div className='mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
                          <span className='px-2 py-0.5 rounded-full bg-amber-100 text-red-900 border border-amber-300'>{e.type}</span>
                          <button className='px-2 sm:px-3 py-1 rounded-lg bg-red-900 text-amber-100 hover:bg-red-800 transition-colors'>Join</button>
                          <button className='px-2 sm:px-3 py-1 rounded-lg bg-amber-200 text-red-900 hover:bg-amber-300 transition-colors'>Remind me</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Timeline preview */}
              <div className='mt-8'>
                <h4 className='prata text-lg text-red-900 mb-3'>Upcoming Highlights</h4>
                <div className='relative pl-5'>
                  <div className='absolute left-1 top-0 bottom-0 w-0.5 bg-amber-200'></div>
                  {[
                    { date: 'Sat', title: 'Meditation Workshop', place: 'Tashiding', type: 'Workshop' },
                    { date: 'Sun', title: 'Blessing Ceremony', place: 'Enchey', type: 'Ceremony' },
                    { date: 'Tue', title: 'Losar Festival', place: 'Multiple', type: 'Festival' }
                  ].map((t, i) => (
                    <div key={i} className='mb-4 flex items-start gap-3'>
                      <span className='mt-1 h-2 w-2 rounded-full bg-red-900'></span>
                      <div>
                        <div className='text-sm text-red-900/70'>{t.date}</div>
                        <div className='prata text-red-900'>{t.title}</div>
                        <div className='text-red-900/70 text-sm'>{t.place}</div>
                        <span className='mt-1 inline-block px-2 py-0.5 rounded-full bg-amber-100 text-red-900 border border-amber-300 text-xs'>{t.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className='w-full bg-red-900 text-amber-100 py-8 sm:py-10 px-4 sm:px-6'>
        <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left'>
          <h3 className='prata text-xl sm:text-2xl md:text-3xl'>Ready to explore Sikkim's living heritage?</h3>
          <div className='flex flex-col sm:flex-row items-center gap-3'>
            <Link to={'#'} className='w-full sm:w-auto px-4 sm:px-5 py-2 rounded-lg bg-amber-200 text-red-900 hover:bg-amber-300 transition-colors'>Start Tour</Link>
            <Link to={'#'} className='w-full sm:w-auto px-4 sm:px-5 py-2 rounded-lg border border-amber-200 hover:bg-amber-100 hover:text-red-900 transition-colors'>Learn More</Link>
          </div>
        </div>
      </section>

        <Footer />
      {/* Floating Chatbot */}
      <div className={`fixed cursor-pointer z-50 right-4 sm:right-6 bottom-4 sm:bottom-6`}>
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className='h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer bg-red-900 text-amber-100 shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors'
            aria-label='Open Cultural Guide AI'
          >
            <i className='ri-robot-2-line text-xl sm:text-2xl'></i>
          </button>
        )}
        {chatOpen && (
          <div className='cursor-pointer w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[440px] rounded-xl overflow-hidden shadow-2xl border border-amber-200 bg-white/95 backdrop-blur-md'>
            {/* Header */}
            <div className='px-3 sm:px-4 py-2 sm:py-3 bg-red-900 text-amber-100 flex items-center justify-between cursor-pointer' onClick={() => setChatOpen(false)}>
              <div className='flex items-center gap-2 sm:gap-3'>
                <div className='h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-amber-200 text-red-900 flex items-center justify-center'>
                  <i className='ri-robot-2-line text-lg sm:text-xl'></i>
                </div>
                <div>
                  <div className='prata text-sm sm:text-base leading-none'>Cultural Guide AI</div>
                  <div className='text-xs opacity-90'>Online • 15 languages</div>
                </div>
              </div>
              <button className='text-amber-100 hover:text-amber-200'>
                <i className='ri-arrow-down-s-line text-xl sm:text-2xl'></i>
              </button>
            </div>
            {/* Body */}
            <div className='h-[250px] sm:h-[300px] overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 space-y-2 sm:space-y-3'>
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${m.from === 'user' ? 'bg-amber-200 text-red-900' : 'bg-[#1d1903] text-amber-100'} rounded-lg px-3 py-2 max-w-[80%]`}>{m.text}</div>
                </div>
              ))}
              {/* Quick actions */}
              <div className='grid grid-cols-2 gap-2'>
                {[
                  'Tell me about Rumtek Monastery',
                  'Plan a 3-day monastery tour',
                  'What festivals are happening soon?',
                  'Best time to visit Sikkim?',
                ].map((q) => (
                  <button key={q} onClick={() => sendChat(q)} className='text-sm border border-amber-300 rounded-lg px-2 py-1 text-red-900 hover:bg-amber-100 text-left'>
                    {q}
                  </button>
                ))}
              </div>
            </div>
            {/* Input */}
            <div className='px-2 sm:px-3 pb-2 sm:pb-3'>
              <div className='flex items-center gap-1 sm:gap-2'>
                <select className='text-xs sm:text-sm border border-amber-300 rounded-lg px-1 sm:px-2 py-1.5 sm:py-2 text-red-900 bg-white/80'>
                  <option value='en'>EN</option>
                  <option value='hi'>हिन्दी</option>
                  <option value='ne'>नेपाली</option>
                  <option value='si'>සිංහල</option>
                  <option value='bo'>བོད་ཡིག</option>
                </select>
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') sendChat(chatInput) }}
                  className='flex-1 border border-amber-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-red-900 bg-white/80 text-xs sm:text-sm'
                  placeholder='Ask about monasteries...'
                />
                <button onClick={() => sendChat(chatInput)} className='h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-red-900 text-amber-100 hover:bg-red-800 flex items-center justify-center'>
                  <i className='ri-send-plane-2-line text-sm sm:text-base'></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
