import React, { useMemo, useState, useEffect, useRef } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';

const Home = () => {
  // Refs for scroll animations
  const featuresRef = useRef(null)
  const modelRef = useRef(null)
  const monasteriesRef = useRef(null)
  const archivesRef = useRef(null)
  const vrRef = useRef(null)

  // Animation states
  const [animatedSections, setAnimatedSections] = useState({
    features: false,
    model: false,
    monasteries: false,
    archives: false,
    vr: false
  })

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setAnimatedSections(prev => ({
              ...prev,
              [sectionId]: true
            }))
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section refs
    if (featuresRef.current) observer.observe(featuresRef.current)
    if (modelRef.current) observer.observe(modelRef.current)
    if (monasteriesRef.current) observer.observe(monasteriesRef.current)
    if (archivesRef.current) observer.observe(archivesRef.current)
    if (vrRef.current) observer.observe(vrRef.current)

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current)
      if (modelRef.current) observer.unobserve(modelRef.current)
      if (monasteriesRef.current) observer.unobserve(monasteriesRef.current)
      if (archivesRef.current) observer.unobserve(archivesRef.current)
      if (vrRef.current) observer.unobserve(vrRef.current)
    }
  }, [])

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
      role: 'assistant',
      text: "Namaste! I'm your AI Cultural Guide. Ask me about monasteries, rituals, or events.",
    }
  ])
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef();

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Create a new session when component mounts
  useEffect(() => {
    const initSession = async () => {
      try {
        // Check if sessionId exists in sessionStorage
        let storedSessionId = sessionStorage.getItem("chatSessionId");

        if (!storedSessionId) {
          const res = await axios.post("/chatbot/session/create");
          storedSessionId = res.data.sessionId;
          sessionStorage.setItem("chatSessionId", storedSessionId);
        }

        setSessionId(storedSessionId);

        // Fetch chat history
        const histRes = await axios.get(`/chatbot/chat/history?sessionId=${storedSessionId}`);

        // Convert history to frontend format and ensure chronological order
        const historyMessages = histRes.data.messages
          .slice()
          .reverse()   // oldest → newest
          .map(m => ({
            from: m.role === "user" ? "user" : "assistant",
            text: m.text
          }));

        // Always add Namaste at the very top
        setChatMessages([
          {
            from: "assistant",
            text: "Namaste! I'm your AI Cultural Guide. Ask me about monasteries, rituals, or events."
          },
          ...historyMessages
        ]);
      } catch (err) {
        console.error("Error initializing chat session:", err);
      }
    };

    initSession();
  }, []);




const sendChat = async (message) => {
  if (!message || !sessionId) return;

  setChatMessages(prev => [...prev, { from: "user", text: message }]);
  setChatInput("");

  try {
    setLoading(true);
    const res = await fetch(`https://monastery-360.onrender.com/api/v1/chatbot/chat/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, message }),
    });

    if (!res.body) throw new Error("No response body");

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let aiReply = "";

    // Add empty assistant bubble
    setChatMessages(prev => [...prev, { from: "assistant", text: "" }]);
    setLoading(false);
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      aiReply += decoder.decode(value);
      setChatMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { from: "assistant", text: aiReply };
        return updated;
      });
    }

  } catch (err) {
    console.error(err);
    setLoading(false);
    setChatMessages(prev => [...prev, { from: "assistant", text: "Sorry, something went wrong." }]);
  }
};





  return (
    <div className=' w-full h-full ' >
      {/* HERO: Mountain background with light text */}
      <div className='relative w-full h-screen'>
        <Nav />
        <div className='absolute inset-0'>
          <img src='/bg2.jpg' alt="Monastery background" className='w-full h-full object-cover' />
        </div>
        <div className='absolute inset-0 bg-[#1d1903]/70 '></div>

        <div className='relative z-10 w-full h-full flex flex-col  items-center  md:items-start   justify-center px-4 sm:px-12 md:px-16 lg:px-24'>
          <div className='flex flex-col mt-10 items-center md:items-start'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl prata font-black text-white tracking-tight leading-tight text-shadow-2xl animate-fadeIn'>
              Experience <br />
              <span className='text-amber-50'><span className='text-amber-300 hover:text-amber-200 hover:drop-shadow-[0_0_8px_rgba(252,211,77,0.5)] transition-all duration-300'>Sikkim's</span> Sacred</span> <br />
              <span className='text-amber-50'>Heritage</span> <span className='hover:text-red-500 transition-colors duration-300 cursor-pointer'>Digitally</span>
            </h1>

            <p className='text-base sm:text-lg md:text-xl  mt-0 md:mt-6 text-amber-300 w-full md:max-w-xl animate-fadeIn' style={{ animationDelay: '300ms' }}>
              Explore 200+ monasteries through immersive 360° virtual tours,
              discover ancient manuscripts, and connect with living Buddhist
              traditions from anywhere in the world.
            </p>

            <div className='flex flex-col sm:flex-row items-center md:items-start gap-4 mt-2 md:mt-8'>
              <Link to={'/vr-tour'} className='px-6 py-3 bg-red-700 hover:bg-red-600 transition-all duration-300 text-white rounded-lg inline-flex items-center border border-amber-100 justify-center gap-2 hover:shadow-lg hover:shadow-red-700/30 transform hover:-translate-y-1 active:translate-y-0'>
                <i className="ri-vr-line hover:animate-pulse"></i>
                <span className='prata text-base sm:text-lg flex gap-1 text-amber-100'>Start Virtual Tour <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i></span>
              </Link>
              <Link to={'/map'} className='px-6 py-3 bg-amber-100/20 hover:bg-amber-100/30 backdrop-blur-sm transition-all duration-300 text-white border border-white/20 hover:border-amber-100/40 rounded-lg inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-100/20 transform hover:-translate-y-1 active:translate-y-0'>
                <i className="ri-map-pin-line hover:animate-bounce"></i>
                <span className='prata text-base sm:text-lg'>Explore Map</span>
              </Link>
            </div>

            <div className='mt-5 md:mt-16 flex flex-col md:flex-row items-center gap-3 md:gap-20 text-white/90 w-full md:max-w-md'>
              {[
                { n: '200+', l: 'Monasteries' },
                { n: '10M+', l: 'Virtual Visitors' },
                { n: '15', l: 'Languages' },
              ].map((s, i) => (
                <div
                  key={i}
                  className='flex flex-col items-center md:items-start hover:scale-110 transition-all duration-300 cursor-default'
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className='text-2xl sm:text-3xl font-extrabold text-amber-300 hover:text-amber-200 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]'>{s.n}</div>
                  <div className='text-xs sm:text-sm hover:text-white transition-colors duration-300'>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature list on the right side */}
          <div className='absolute right-8 md:right-12 lg:right-24 top-1/2 transform -translate-y-1/2 hidden md:block'>
            <div className='space-y-4'>
              {[
                { icon: 'ri-goggles-line', text: '360° Virtual Reality' },
                { icon: 'ri-robot-line', text: 'AI Cultural Guide' },
                { icon: 'ri-archive-line', text: 'Digital Archives' },
                { icon: 'ri-calendar-event-line', text: 'Live Events' },
              ].map((feature, idx) => (
                <div key={idx} className='flex items-center gap-3 bg-amber-100/20 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/10 hover:border-amber-300/30 transition-all duration-300 group w-lg hover:bg-amber-100/30 hover:shadow-lg hover:shadow-amber-300/20 transform hover:-translate-y-1 active:translate-y-0'>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-amber-400/20 text-amber-300 group-hover:bg-amber-400/30 transition-all duration-300 group-hover:scale-110'>
                    <i className={`${feature.icon} text-xl group-hover:animate-pulse`}></i>
                  </div>
                  <span className='text-white font-medium group-hover:text-amber-200 transition-colors duration-300'>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>

      {/* FEATURES: Light background with dark text, same palette */}
      <section
        ref={featuresRef}
        data-section="features"
        className={`w-full bg-amber-50 text-[#1d1903] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-1000 ${animatedSections.features ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-10'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800'>Revolutionary Digital Heritage Experience</h2>
            <p className='mt-3 text-red-900/70 text-base sm:text-lg px-4'>Cutting-edge technology meets ancient wisdom to preserve Sikkim's monastery heritage</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {[
              { icon: 'ri-goggles-line', title: '360° Virtual Tours', desc: 'Walk through monastery halls and sacred spaces with detail.' },
              { icon: 'ri-robot-2-line', title: 'AI Cultural Guide', desc: 'Personalized answers about Buddhist culture and history.' },
              { icon: 'ri-archive-2-line', title: 'Digital Archives', desc: 'Ancient manuscripts and murals in high-resolution.' },
              { icon: 'ri-map-pin-2-line', title: 'Interactive Map', desc: 'Geo-tagged locations and routes with nearby services.' },
              { icon: 'ri-headphone-line', title: 'Smart Audio Guides', desc: 'Location-based narration with offline support.' },
              { icon: 'ri-calendar-event-line', title: 'Cultural Calendar', desc: 'Festivals and rituals with booking options.' },
            ].map((f, idx) => (
              <div
                key={idx}
                className='group bg-white/70 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-amber-200/30 transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/90'
                style={{
                  opacity: animatedSections.features ? 1 : 0,
                  transform: animatedSections.features ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`
                }}
              >
                <div className='flex items-center gap-3'>
                  <i className={`${f.icon} text-red-800 text-2xl group-hover:text-red-700 group-hover:scale-110 transition-all duration-300`}></i>
                  <h3 className='prata text-xl font-semibold text-red-900 group-hover:text-red-800'>{f.title}</h3>
                </div>
                <p className='mt-3 text-red-900/80 group-hover:text-red-900/90'>{f.desc}</p>
                <div className='mt-4 h-1 w-10 bg-amber-300 rounded group-hover:w-20 group-hover:bg-amber-400 transition-all duration-500'></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D MODEL SHOWCASE: Interactive monastery model */}
      <section
        ref={modelRef}
        data-section="model"
        className={`w-full bg-gradient-to-b from-amber-50 to-[#1d1903] text-amber-50 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-1000 ${animatedSections.model ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-10'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800'>Explore in 3D</h2>
            <p className='mt-3 text-red-900/70 text-base sm:text-lg px-4'>Interact with our detailed 3D monastery models before your visit</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center'>
            {/* 3D Model Container */}
            <div className='relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border-4 border-amber-200/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-300'>
              {/* Decorative elements */}
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1d1903]/40 to-transparent z-10 pointer-events-none'></div>
              <div className='absolute -top-4 -right-4 w-16 h-16 bg-amber-300/30 rounded-full blur-xl'></div>
              <div className='absolute -bottom-8 -left-8 w-24 h-24 bg-red-800/30 rounded-full blur-xl'></div>

              {/* VR Badge */}
              <div className='absolute top-4 right-4 z-20 bg-red-900/90 backdrop-blur-sm text-amber-100 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 border border-amber-200/30 shadow-lg'>
                <i className='ri-vr-line'></i>
                <span>VR Ready</span>
              </div>

              {/* Sketchfab iframe */}
              <iframe
                title="Rumtek Monastery"
                frameBorder="0"
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer; camera; clipboard-write; web-share"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/d2de6b05accb4a9ebe3681157afe36c3/embed?autospin=1&autostart=1&cardboard=1&preload=1&transparent=1&ui_theme=dark"
                style={{ width: '100%', height: '100%', border: 'none' }}
                className="z-0"
              />


            </div>

            {/* 3D Model Info */}
            <div className='space-y-4 sm:space-y-6'>
              <div>
                <h3 className='prata text-xl sm:text-2xl md:text-3xl font-bold text-amber-200'>Rumtek Monastery</h3>
                <p className='text-amber-100 mt-2 text-sm sm:text-base'>
                  Explore the intricate details of Sikkim's largest monastery in stunning 3D.
                  Interact with the model to discover hidden chambers, sacred halls, and
                  architectural marvels from every angle.
                </p>
              </div>

              {/* Features */}
              <div className='grid grid-cols-2 gap-3'>
                {[
                  { icon: 'ri-drag-move-line', text: 'Drag to Rotate' },
                  { icon: 'ri-zoom-in-line', text: 'Scroll to Zoom' },
                  { icon: 'ri-fullscreen-line', text: 'Fullscreen View' },
                  { icon: 'ri-goggles-line', text: 'VR Compatible' }
                ].map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-2 bg-[#1d1903]/60 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-amber-200/20 hover:border-amber-200/50 hover:bg-[#1d1903]/80 transition-all duration-300 transform hover:scale-105 cursor-pointer group'>
                    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-amber-400/20 text-amber-300 group-hover:bg-amber-400/40 transition-all duration-300'>
                      <i className={`${feature.icon} text-base sm:text-lg group-hover:animate-pulse`}></i>
                    </div>
                    <span className='text-amber-100 text-xs sm:text-sm group-hover:text-amber-200 transition-colors'>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-3'>
                <Link to='/vr-tour' className='px-4 py-2 sm:py-3 bg-red-800 hover:bg-red-700 transition-all duration-300 text-amber-100 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base hover:shadow-lg hover:shadow-red-800/30 transform hover:-translate-y-1 active:translate-y-0 active:shadow-none'>
                  <i className='ri-fullscreen-line'></i>
                  <span>View Full Experience</span>
                </Link>
                <button className='px-4 py-2 cursor-pointer sm:py-3 bg-amber-200/20 hover:bg-amber-200/30 transition-all duration-300 text-amber-200 rounded-lg border border-amber-200/30 hover:border-amber-200/50 flex items-center justify-center gap-2 text-sm sm:text-base hover:shadow-lg hover:shadow-amber-200/20 transform hover:-translate-y-1 active:translate-y-0 active:shadow-none'>
                  <i className='ri-download-line'></i>
                  <span>Download 3D Model</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONASTERIES: Dark section with light text */}
      <section
        ref={monasteriesRef}
        data-section="monasteries"
        className={`w-full bg-[#1d1903] text-amber-50 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-1000 ${animatedSections.monasteries ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8'>
            <div className='flex-1'>
              <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200'>Discover Sacred Monasteries</h2>
              <p className='mt-2 text-amber-100/80 text-sm sm:text-base'>Journey through Sikkim's most revered spiritual sites</p>
            </div>
            <Link to={'#'} className='px-4 sm:px-5 py-2 rounded-lg bg-amber-200 text-red-900 hover:bg-amber-300 transition-colors inline-flex items-center gap-2 text-sm sm:text-base self-start sm:self-auto hover:scale-105 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300'>
              View All <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {[
              {
                title: 'Rumtek Monastery', subtitle: 'The Dharmachakra Centre', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60', details: [
                  { icon: 'ri-calendar-line', text: 'Founded: 1966' },
                  { icon: 'ri-mountain-line', text: 'Altitude: 1,550m' },
                  { icon: 'ri-team-line', text: '300+ Monks' },
                ]
              },
              {
                title: 'Pemayangtse Monastery', subtitle: 'Perfect Sublime Lotus', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60', details: [
                  { icon: 'ri-calendar-line', text: 'Founded: 1705' },
                  { icon: 'ri-mountain-line', text: 'Altitude: 2,085m' },
                  { icon: 'ri-vip-crown-line', text: 'Royal Monastery' },
                ]
              },
              {
                title: 'Tashiding Monastery', subtitle: 'Sacred Hill of Glory', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=60', details: [
                  { icon: 'ri-calendar-line', text: 'Founded: 1641' },
                  { icon: 'ri-mountain-line', text: 'Altitude: 1,465m' },
                  { icon: 'ri-water-flash-line', text: 'Holy Water Site' },
                ]
              },
            ].map((m, idx) => (
              <div
                key={idx}
                className='group overflow-hidden rounded-xl border border-amber-200/10 bg-[#241f07] hover:border-amber-200/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-900/20'
                style={{
                  opacity: animatedSections.monasteries ? 1 : 0,
                  transform: animatedSections.monasteries ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${idx * 0.15}s`
                }}
              >
                <div className='relative h-48 sm:h-56 overflow-hidden'>
                  <img src={m.img} alt={m.title} className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110' />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#1d1903] via-transparent to-transparent opacity-70'></div>
                  <button className='absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-red-900/90 text-amber-100 hover:bg-red-800 transition-all duration-300 inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm transform hover:-translate-y-1 active:translate-y-0 hover:shadow-md hover:shadow-red-900/30'>
                    <Link to={'/vr-show'} className='inline-flex items-center gap-1'>
                      Virtual Tour <i className="ri-play-line"></i>
                    </Link>
                  </button>
                </div>
                <div className='p-4 sm:p-5 transform transition-transform duration-300 group-hover:translate-y-[-5px]'>
                  <h3 className='prata text-xl sm:text-2xl text-amber-200 group-hover:text-amber-50 transition-colors'>{m.title}</h3>
                  <p className='text-amber-100/70 text-sm sm:text-base group-hover:text-amber-100 transition-colors'>{m.subtitle}</p>
                  {m.details && (
                    <div className='mt-3 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-amber-100/80 text-xs sm:text-sm'>
                      {m.details.map((d, i) => (
                        <span key={i} className='inline-flex items-center gap-1 hover:text-amber-200 transition-colors'>
                          <i className={`${d.icon} group-hover:animate-pulse`}></i>
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
      <section
        ref={archivesRef}
        data-section="archives"
        className={`w-full bg-amber-50 text-[#1d1903] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-1000 ${animatedSections.archives ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8 sm:mb-10'>
            <h2 className='prata text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-800'>Digital Archives</h2>
            <p className='mt-3 text-red-900/70 text-base sm:text-lg px-4'>Explore ancient manuscripts, historical documents, and sacred art</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              { icon: 'ri-article-line', title: 'Ancient Manuscripts', desc: '500+ digitized manuscripts', count: '500+' },
              { icon: 'ri-palette-line', title: 'Sacred Murals', desc: 'High-resolution artwork scans', count: '1200+' },
              { icon: 'ri-camera-3-line', title: 'Historical Photos', desc: 'Century-old documentation', count: '800+' },
              { icon: 'ri-music-2-line', title: 'Chants & Prayers', desc: 'Traditional audio recordings', count: '300+' },
            ].map((c, idx) => (
              <div
                key={idx}
                className='relative group bg-white/80 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:shadow-amber-200/30 hover:-translate-y-1'
                style={{
                  opacity: animatedSections.archives ? 1 : 0,
                  transform: animatedSections.archives ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${idx * 0.1}s`
                }}
              >
                <div className='flex items-center gap-1'>
                  <i className={`${c.icon} text-red-800 text-2xl group-hover:scale-110 group-hover:text-red-700 transition-all duration-300`}></i>
                  <h3 className='prata text-xl font-semibold text-red-900 group-hover:text-red-800 transition-colors duration-300'>{c.title}</h3>
                </div>
                <p className='mt-3 text-red-900/80 group-hover:text-red-900 transition-colors duration-300'>{c.desc}</p>
                <div className='absolute top-4 right-4 px-2 py-1 rounded-md bg-amber-200 text-red-900 text-sm font-semibold group-hover:bg-amber-300 group-hover:scale-110 transition-all duration-300'>
                  {c.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR EXPERIENCE SECTION: Dark theme with 3D/VR showcase */}
      <section
        ref={vrRef}
        data-section="vr"
        className={`w-full bg-gradient-to-t from-[#FFF5E0] via-[#2d1a0a] to-[#1d1903] text-amber-50 py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-1000 ${animatedSections.vr ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
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
                  { icon: 'ri-compass-3-line', title: '360° Immersion', desc: 'Complete panoramic views' },
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
                  <Link to={'/vr-show'} className='px-3 sm:px-4 py-2 sm:py-3 bg-red-900/80 cursor-pointer duration-300 hover:bg-red-800 transition-colors text-amber-100 rounded-lg border border-red-800 flex items-center justify-center gap-2 text-sm sm:text-base'>
                    <i className='ri-goggles-fill'></i>
                    <span>Start VR Tour</span>
                  </Link>
                  <button className='px-3 sm:px-4 py-2 cursor-pointer sm:py-3 bg-amber-200/20 hover:bg-amber-200/30 transition-colors text-amber-200 rounded-lg border border-amber-200/30 flex items-center justify-center gap-2 text-sm sm:text-base'>
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
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
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
                          className={`h-8 sm:h-12 rounded-md border text-xs sm:text-sm transition-colors ${isSelected ? 'bg-amber-200 border-amber-300 text-red-900' : 'bg-white/70 border-amber-200 hover:bg-amber-100'
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
          <div className='cursor-pointer w-[280px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[420px] rounded-xl overflow-hidden shadow-2xl border border-amber-200 bg-white/95 backdrop-blur-md'>
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
            <div ref={chatBodyRef} className='h-[250px]  sm:h-[300px] overflow-y-auto px-3 sm:px-3 py-2 sm:py-3 space-y-2 sm:space-y-3'>
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex  ${m.from === 'user' ? 'justify-end' : 'justify-center'}`}>
                  <div className={`${m.from === 'user' ? 'bg-amber-200 text-red-900 rounded-tl-lg' : 'bg-[#1d1903] text-amber-200 w-full rounded-tr-lg'} rounded-b-lg px-3 py-2 max-w-[100%]`}>
                    {m.from === "assistant" ? (
                      <ReactMarkdown>{m.text}</ReactMarkdown>
                    ) : (
                      m.text
                    )}
                  </div>

                </div>
              ))}
              

              {/* Loader Animation */}
  {loading && (
    <div className="flex justify-start">
      <div className="bg-[#1d1903] text-amber-200 rounded-lg px-3 py-2 flex items-center">
        <div className="typing">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )}


              {/* Quick actions (only show if no user messages yet) */}
              {!chatMessages.some(m => m.from === "user") && (
                <div className='grid grid-cols-2 gap-2'>
                  {[
                    'Tell me about Rumtek Monastery',
                    'Plan a 3-day monastery tour',
                    'What festivals are happening soon?',
                    'Best time to visit Sikkim?',
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => sendChat(q)}
                      className='text-sm border border-amber-300 rounded-lg px-2 py-1 text-red-900 hover:bg-amber-100 text-left'
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

            </div>


            {/* Input */}
            <div className='px-2 mt-2 sm:px-3 '>
              <div className='flex items-center gap-1 sm:gap-2'>

                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') sendChat(chatInput) }}
                  className='flex-1 border border-amber-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-red-900 bg-white/80 text-xs sm:text-sm'
                  placeholder='Ask about monasteries...'
                />
                <button onClick={() => sendChat(chatInput)} className='h-8 w-8 sm:h-10 sm:w-10 rounded-lg cursor-pointer bg-red-900 text-amber-100 hover:bg-red-800 flex items-center justify-center'>
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