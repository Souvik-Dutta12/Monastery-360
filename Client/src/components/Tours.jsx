import React, { useEffect, useMemo, useRef, useState } from 'react'

// Lightweight 360° viewer using Pannellum via CDN (no npm install required)
// We dynamically inject the CSS/JS once, then initialize the viewer.
const CDN = {
  css: 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css',
  js: 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
}

const defaultTours = [
  {
    id: 'ancient-hall',
    title: 'Ancient Hall',
    description: 'Central hall showcasing murals and relics.',
    panoramaUrl: 'https://pannellum.org/images/alma.jpg',
    autoRotate: 2,
    location: 'Main Monastery Complex',
    period: '12th Century',
    tags: ['Murals', 'Relics', 'Great Hall'],
    credits: 'Photo: Example CC BY-SA',
    date: '2020-07-14',
    hotSpots: [
      { pitch: 2, yaw: 120, text: 'Altar', type: 'info' },
      { pitch: -3, yaw: -30, text: 'Mural Fragment', type: 'info' }
    ]
  },
  {
    id: 'cloister-garden',
    title: 'Cloister Garden',
    description: 'Serene courtyard with stone pathways and herbs.',
    panoramaUrl: 'https://pannellum.org/images/bma-1.jpg',
    autoRotate: 1,
    location: 'South Wing',
    period: '14th Century',
    tags: ['Garden', 'Cloister', 'Nature'],
    credits: 'Photo: Example CC BY-SA',
    date: '2021-03-22',
    hotSpots: [
      { pitch: 5, yaw: 60, text: 'Herb Patch', type: 'info' }
    ]
  },
  {
    id: 'monk-quarters',
    title: "Monk's Quarters",
    description: 'Living space with traditional wooden interiors.',
    panoramaUrl: 'https://pannellum.org/images/cuba.jpg',
    autoRotate: 0,
    location: 'East Residence',
    period: '13th Century',
    tags: ['Residence', 'Woodwork'],
    credits: 'Photo: Example CC BY-SA',
    date: '2019-11-05',
    hotSpots: [
      { pitch: -2, yaw: 10, text: 'Writing Desk', type: 'info' }
    ]
  }
]

const loadCdnOnce = () => {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.pannellum) {
      resolve(window.pannellum)
      return
    }

    const alreadyLoaded = document.querySelector('link[data-pannellum]') && document.querySelector('script[data-pannellum]')
    let cssLoaded = !!alreadyLoaded
    let jsLoaded = !!alreadyLoaded && !!window.pannellum

    if (!alreadyLoaded) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CDN.css
      link.setAttribute('data-pannellum', 'true')
      link.onload = () => {
        cssLoaded = true
        if (cssLoaded && jsLoaded) resolve(window.pannellum)
      }
      link.onerror = reject
      document.head.appendChild(link)

      const script = document.createElement('script')
      script.src = CDN.js
      script.defer = true
      script.setAttribute('data-pannellum', 'true')
      script.onload = () => {
        jsLoaded = true
        if (cssLoaded && jsLoaded) resolve(window.pannellum)
      }
      script.onerror = reject
      document.body.appendChild(script)
    } else {
      const checkReady = () => {
        if (window.pannellum) resolve(window.pannellum)
        else setTimeout(checkReady, 50)
      }
      checkReady()
    }
  })
}

const Tours = ({ tours = defaultTours }) => {
  const [expandedId, setExpandedId] = useState(() => (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : tours[0]?.id))
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)
  const viewerRef = useRef(null)

  const expandedTour = useMemo(() => tours.find(t => t.id === expandedId) || tours[0], [tours, expandedId])

  // Sync with URL hash (shareable links)
  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.replace('#', '')
      if (id) setExpandedId(id)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newHash = `#${expandedTour?.id}`
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash)
      }
    }
  }, [expandedTour?.id])

  // Initialize viewer only when a card is expanded (single viewer instance)
  useEffect(() => {
    let isDisposed = false
    setLoading(true)

    if (!expandedTour) return

    loadCdnOnce()
      .then((pannellum) => {
        if (isDisposed) return

        // If viewer exists, update; else create new instance
        if (viewerRef.current) {
          try {
            viewerRef.current.setPanorama(expandedTour.panoramaUrl, { autoLoad: true })
            // Reset hotspots by reloading config when changing scene
            try { viewerRef.current.removeHotSpots && viewerRef.current.getConfig && viewerRef.current.getConfig().hotSpots?.forEach((hs) => viewerRef.current.removeHotSpot && viewerRef.current.removeHotSpot(hs.id)) } catch (_) {}
          } catch (_) {
            try { viewerRef.current.destroy && viewerRef.current.destroy() } catch (_) {}
            viewerRef.current = null
          }
        }

        if (!viewerRef.current && containerRef.current) {
          viewerRef.current = pannellum.viewer(containerRef.current, {
            type: 'equirectangular',
            panorama: expandedTour.panoramaUrl,
            autoLoad: true,
            showZoomCtrl: true,
            showFullscreenCtrl: false,
            compass: false,
            hfov: 100,
            autoRotate: isAutoRotating ? (expandedTour.autoRotate || 2) : 0,
            keyboardZoom: true,
            hotSpots: (expandedTour.hotSpots || []).map((hs, idx) => ({
              pitch: hs.pitch,
              yaw: hs.yaw,
              text: hs.text,
              clickHandlerFunc: () => alert(hs.text),
              cssClass: 'custom-hotspot',
              createTooltipFunc: undefined,
              createTooltipArgs: undefined,
              type: hs.type || 'info',
              id: `${expandedTour.id}-hs-${idx}`
            }))
          })
        } else if (viewerRef.current) {
          // Toggle autorotate according to state
          if (isAutoRotating) {
            const speed = expandedTour.autoRotate || 2
            try { viewerRef.current.startAutoRotate(speed) } catch (_) {}
          } else {
            try { viewerRef.current.stopAutoRotate() } catch (_) {}
          }
        }

        setLoading(false)
      })
      .catch(() => setLoading(false))

    return () => {
      isDisposed = true
    }
  }, [expandedTour, isAutoRotating])

  const handleToggleAutorotate = () => {
    setIsAutoRotating(prev => {
      const next = !prev
      try {
        if (viewerRef.current) {
          if (next) viewerRef.current.startAutoRotate(expandedTour.autoRotate || 2)
          else viewerRef.current.stopAutoRotate()
        }
      } catch (_) {}
      return next
    })
  }

  const handleFullscreen = () => {
    try { viewerRef.current && viewerRef.current.toggleFullscreen() } catch (_) {}
  }

  const handleResetView = () => {
    try { viewerRef.current && viewerRef.current.setHfov(100) } catch (_) {}
  }

  const handleShare = async () => {
    try {
      const url = window.location.href
      await navigator.clipboard.writeText(url)
      alert('Share link copied to clipboard')
    } catch (_) {
      // fallback: do nothing silently
    }
  }

  const handleDownload = () => {
    if (!expandedTour?.panoramaUrl) return
    const link = document.createElement('a')
    link.href = expandedTour.panoramaUrl
    link.download = `${expandedTour.id}.jpg`
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="w-full flex flex-col gap-4 px-3 sm:px-4">
      {tours.map((tour) => {
        const isExpanded = expandedTour?.id === tour.id
        return (
          <div key={tour.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setExpandedId(tour.id)}
              className={`w-full text-left px-3 sm:px-4 py-3 ${isExpanded ? 'bg-slate-50 border-b border-gray-200' : 'bg-white'} cursor-pointer`}
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="m-0 text-base sm:text-lg text-gray-900 font-semibold flex-1">{tour.title}</h3>
                <span className="text-xs sm:text-sm text-gray-500">{tour.period}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{tour.description}</div>
              <div className="mt-1 flex gap-1.5 flex-wrap">
                {(tour.tags || []).map((tag) => (
                  <span key={tag} className="text-[11px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">#{tag}</span>
                ))}
              </div>
            </button>

            {isExpanded && (
              <div className="px-3 sm:px-4 py-3 flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  <InfoItem label="Location" value={tour.location} />
                  <InfoItem label="Period" value={tour.period} />
                  <InfoItem label="Credits" value={tour.credits} />
                  <InfoItem label="Date" value={tour.date} />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex-1" />
                  <button onClick={handleToggleAutorotate} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-50">{isAutoRotating ? 'Pause' : 'Play'}</button>
                  <button onClick={handleResetView} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-50">Reset</button>
                  <button onClick={handleFullscreen} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-50">Fullscreen</button>
                  <button onClick={handleShare} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-50">Share</button>
                  <button onClick={handleDownload} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm hover:bg-gray-50">Download</button>
                </div>

                <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] rounded-xl overflow-hidden border border-gray-200">
                  <div ref={containerRef} className="w-full h-full bg-black" />
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-black/20 backdrop-blur-[1px]">
                      Loading 360° view…
                    </div>
                  )}
                </div>

                {tour.hotSpots && tour.hotSpots.length > 0 && (
                  <div className="text-xs sm:text-sm text-gray-600">
                    <strong className="text-gray-900">Hotspots:</strong> {tour.hotSpots.map(h => h.text).join(', ')}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function InfoItem({ label, value }) {
  if (!value) return null
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-xs text-gray-500 min-w-16">{label}:</span>
      <span className="text-xs text-gray-900">{value}</span>
    </div>
  )
}

function btnStyle() { return {} }

export default Tours
