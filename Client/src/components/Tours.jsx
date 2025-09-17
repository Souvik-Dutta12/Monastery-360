import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useRegion } from '../context/RegionContext'
import { regionToTours } from '../data/tourData'

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

const Tours = ({ tours }) => {
  const { selectedRegion } = useRegion()
  const regionTours = regionToTours?.[selectedRegion]
  // Use provided tours prop; otherwise if regionTours is defined (even empty), use it; else fallback to defaultTours
  const effectiveTours = tours ?? (typeof regionTours !== 'undefined' ? regionTours : defaultTours)

  const [expandedId, setExpandedId] = useState(() => (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : effectiveTours[0]?.id))
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)
  const viewerRef = useRef(null)

  const expandedTour = useMemo(() => effectiveTours.find(t => t.id === expandedId) || effectiveTours[0], [effectiveTours, expandedId])

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
      const newHash = `#${expandedTour?.id || ''}`
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash)
      }
    }
  }, [expandedTour?.id])

  // Initialize viewer only when a card is expanded (single viewer instance)
  useEffect(() => {
    let isDisposed = false
    setLoading(true)

    if (!expandedTour) { setLoading(false); return }

    loadCdnOnce()
      .then((pannellum) => {
        if (isDisposed) return

        // If viewer exists, update; else create new instance
        if (viewerRef.current) {
          try {
            viewerRef.current.setPanorama(expandedTour.panoramaUrl, { autoLoad: true })
            // Reset hotspots by reloading config when changing scene
            try { viewerRef.current.removeHotSpots && viewerRef.current.getConfig && viewerRef.current.getConfig().hotSpots?.forEach((hs) => viewerRef.current.removeHotSpot && viewerRef.current.removeHotSpot(hs.id)) } catch (_) { }
          } catch (_) {
            try { viewerRef.current.destroy && viewerRef.current.destroy() } catch (_) { }
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
            try { viewerRef.current.startAutoRotate(speed) } catch (_) { }
          } else {
            try { viewerRef.current.stopAutoRotate() } catch (_) { }
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
          if (next) viewerRef.current.startAutoRotate(expandedTour?.autoRotate || 2)
          else viewerRef.current.stopAutoRotate()
        }
      } catch (_) { }
      return next
    })
  }

  const handleFullscreen = () => {
    try { viewerRef.current && viewerRef.current.toggleFullscreen() } catch (_) { }
  }

  const handleResetView = () => {
    try { viewerRef.current && viewerRef.current.setHfov(100) } catch (_) { }
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

  if (!effectiveTours || effectiveTours.length === 0) {
    return (
      <div className="w-full px-3 sm:px-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center text-red-900">
          No tours available for this region.
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col mt-20 md:mt-5 gap-4 px-3 sm:px-4 mb-5">
      {effectiveTours.map((tour) => {
        const isExpanded = expandedTour?.id === tour.id
        const timeText = tour.time || ''
        const description = tour.description || tour.about || 'Immersive 360° tour experience.'

        return (
          <div key={tour.id} className="border  border-amber-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {/* --- Card Header --- */}
            <button
              onClick={() => setExpandedId(tour.id)}
              className={`w-full text-left px-3 sm:px-4 py-3 ${isExpanded ? 'bg-amber-50 border-b border-amber-200' : 'bg-white'} cursor-pointer`}
            >
              <div className="flex flex-wrap items-baseline gap-2 ">
                <h3 className=" m-0 text-base sm:text-lg text-red-900 font-semibold flex-1">{tour.title}</h3>
                {timeText && (
                  <span className="text-[11px] sm:text-xs bg-amber-100 text-red-900 px-2 py-0.5 rounded-md">{timeText}</span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-red-900/80">{description}</div>
              {(tour.tags && tour.tags.length > 0) && (
                <div className="mt-1 flex gap-1.5 flex-wrap">
                  {tour.tags.map((tag) => (
                    <span key={tag} className="text-[11px] bg-amber-100 text-red-900 px-2 py-0.5 rounded-full">#{tag}</span>
                  ))}
                </div>
              )}
            </button>

            {/* --- Expanded Section --- */}

            {isExpanded && (
              <div className="px-3 sm:px-4 py-3 flex flex-col gap-3">
                {/* Info Grid (render only if data exists) */}
                {(tour.location || tour.period || tour.credits || tour.date) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    <InfoItem label="Location" value={tour.location} />
                    <InfoItem label="Period" value={tour.period} />
                    <InfoItem label="Credits" value={tour.credits} />
                    <InfoItem label="Date" value={tour.date} />
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap gap-2 overflow-x-auto pb-1">
                  <button onClick={handleToggleAutorotate} className="flex-1 sm:flex-none px-3 py-2 rounded-lg border border-amber-200 bg-white text-sm text-red-900 hover:bg-amber-100">
                    {isAutoRotating ? 'Pause' : 'Play'}
                  </button>
                  <button onClick={handleResetView} className="flex-1 sm:flex-none px-3 py-2 rounded-lg border border-amber-200 bg-white text-sm text-red-900 hover:bg-amber-100">Reset</button>
                  <button onClick={handleFullscreen} className="flex-1 sm:flex-none px-3 py-2 rounded-lg border border-amber-200 bg-white text-sm text-red-900 hover:bg-amber-100">Fullscreen</button>
                  <button onClick={handleShare} className="flex-1 sm:flex-none px-3 py-2 rounded-lg border border-amber-200 bg-white text-sm text-red-900 hover:bg-amber-100">Share</button>
                  <button onClick={handleDownload} className="flex-1 sm:flex-none px-3 py-2 rounded-lg border border-amber-200 bg-white text-sm text-red-900 hover:bg-amber-100">Download</button>
                </div>

                {/* 360 Viewer OR Google Maps iframe */}
                {expandedTour?.panoramaUrl?.match(/\.(jpg|jpeg|png)$/i) ? (
                  <div className="relative w-full aspect-video sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden border border-amber-200">
                    <div ref={containerRef} className="w-full h-full bg-black" />
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center text-red-900/70 bg-black/20 backdrop-blur-[1px]">
                        Loading 360° view…
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative w-full aspect-video sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden border border-amber-200">
                    <iframe
                      src={expandedTour?.panoramaUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                )}

                {tour.hotSpots && tour.hotSpots.length > 0 && (
                  <div className="text-xs sm:text-sm text-red-900/80">
                    <strong className="text-red-900">Hotspots:</strong> {tour.hotSpots.map(h => h.text).join(', ')}
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
      <span className="text-xs text-red-900/70 min-w-16">{label}:</span>
      <span className="text-xs sm:text-sm text-red-900">{value}</span>
    </div>
  )
}

function btnStyle() { return {} }

export default Tours
