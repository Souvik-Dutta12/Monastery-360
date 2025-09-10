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
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {tours.map((tour) => {
        const isExpanded = expandedTour?.id === tour.id
        return (
          <div key={tour.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
            <button
              onClick={() => setExpandedId(tour.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '14px 16px',
                background: isExpanded ? '#f8fafc' : '#fff',
                border: 0,
                borderBottom: isExpanded ? '1px solid #e5e7eb' : '1px solid transparent',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#111827', flex: 1 }}>{tour.title}</h3>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>{tour.period}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>{tour.description}</div>
              <div style={{ marginTop: '6px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(tour.tags || []).map((tag) => (
                  <span key={tag} style={{ fontSize: '11px', background: '#eef2ff', color: '#3730a3', padding: '2px 8px', borderRadius: '9999px' }}>#{tag}</span>
                ))}
              </div>
            </button>

            {isExpanded && (
              <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <InfoItem label="Location" value={tour.location} />
                  <InfoItem label="Period" value={tour.period} />
                  <InfoItem label="Credits" value={tour.credits} />
                  <InfoItem label="Date" value={tour.date} />
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ flex: 1 }} />
                  <button onClick={handleToggleAutorotate} style={btnStyle()}>{isAutoRotating ? 'Pause' : 'Play'}</button>
                  <button onClick={handleResetView} style={btnStyle()}>Reset</button>
                  <button onClick={handleFullscreen} style={btnStyle()}>Fullscreen</button>
                  <button onClick={handleShare} style={btnStyle()}>Share</button>
                  <button onClick={handleDownload} style={btnStyle()}>Download</button>
                </div>

                <div style={{ position: 'relative', width: '100%', height: '460px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <div ref={containerRef} style={{ width: '100%', height: '100%', background: '#000' }} />
                  {loading && (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(1px)' }}>
                      Loading 360° view…
                    </div>
                  )}
                </div>

                {tour.hotSpots && tour.hotSpots.length > 0 && (
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    <strong style={{ color: '#111827' }}>Hotspots:</strong> {tour.hotSpots.map(h => h.text).join(', ')}
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
    <div style={{ display: 'flex', gap: '6px', alignItems: 'baseline' }}>
      <span style={{ fontSize: '12px', color: '#6b7280', minWidth: '64px' }}>{label}:</span>
      <span style={{ fontSize: '12px', color: '#111827' }}>{value}</span>
    </div>
  )
}

function btnStyle() {
  return {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '13px'
  }
}

export default Tours
