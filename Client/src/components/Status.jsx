import React, { useEffect, useState } from 'react'

const Status = () => {
  const [online, setOnline] = useState(true)
  const [audioOffline, setAudioOffline] = useState(true)
  const [latencyMs, setLatencyMs] = useState(42)

  useEffect(() => {
    const id = setInterval(() => {
      setLatencyMs(20 + Math.floor(Math.random() * 80))
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const audioGuides = [
    { label: 'Rumtek Guide (EN)', src: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav' },
    { label: 'Pemayangtse (HI)', src: 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav' },
    { label: 'Tashiding (NE)', src: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav' }
  ]

  return (
    <div className='w-full p-6 mt-8 md:mt-0'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='prata text-3xl font-bold text-red-800 mb-6'>System Status</h2>

        <div className='grid grid-cols-1 gap-6'>
          {/* Connectivity - distinct styling */}
          <div className='rounded-xl border border-red-300 shadow-lg overflow-hidden'>
            <div className='bg-gradient-to-r from-red-900 to-red-700 px-6 py-4 text-amber-100 flex items-center gap-3'>
              <div className='h-10 w-10 rounded-full bg-amber-200/20 flex items-center justify-center'>
                <i className='ri-wifi-line text-xl'></i>
              </div>
              <div className='flex-1'>
                <div className='prata text-xl'>Connectivity</div>
                <div className='text-amber-100/80 text-sm'>Platform availability and network performance</div>
              </div>
              <button
                onClick={() => setOnline(!online)}
                className='px-4 py-2 rounded-lg bg-amber-200 text-red-900 hover:bg-amber-300'
              >
                {online ? 'Online' : 'Offline'}
              </button>
            </div>
            <div className='px-6 py-4 bg-amber-50 text-red-900/90 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span className={`h-3 w-3 rounded-full ${online ? 'bg-green-600' : 'bg-red-700'}`}></span>
                <span className='font-semibold'>{online ? 'Operational' : 'Unavailable'}</span>
              </div>
              <div className='text-sm'>Latency: <span className='font-semibold text-red-900'>{latencyMs} ms</span></div>
            </div>
          </div>

          {/* Security & Backups - second */}
          <div className='rounded-xl border border-amber-200 bg-white p-5 flex items-center justify-between gap-6'>
            <div className='flex items-start gap-4'>
              <div className='h-10 w-10 rounded-lg bg-amber-100 text-red-900 flex items-center justify-center'>
                <i className='ri-shield-check-line text-xl'></i>
              </div>
              <div>
                <div className='prata text-xl text-red-900'>Security & Backups</div>
                <div className='text-red-900/70 text-sm'>Daily backups and secure data handling are enabled</div>
              </div>
            </div>
            <span className='px-3 py-1 rounded-full text-sm bg-green-100 text-green-700'>Healthy</span>
          </div>

          {/* Audio Guidance (Offline) - third, now with inline players */}
          <div className='rounded-xl border border-amber-200 bg-white p-5 flex items-center justify-between gap-6'>
            <div className='flex-1 flex items-start gap-4'>
              <div className='h-10 w-10 rounded-lg bg-amber-100 text-red-900 flex items-center justify-center'>
                <i className='ri-music-2-line text-xl'></i>
              </div>
              <div className='w-full'>
                <div className='prata text-xl text-red-900'>Audio Guidance (Offline)</div>
                <div className='text-red-900/70 text-sm'>Play voice guidance for VR and tours</div>
                {audioOffline && (
                  <div className='mt-4 w-full space-y-3'>
                    {audioGuides.map((a) => (
                      <div key={a.label} className='w-full rounded-lg border border-amber-200 p-3 bg-amber-50'>
                        <div className='text-red-900 text-sm mb-2'>{a.label}</div>
                        <audio controls className='w-full'>
                          <source src={a.src} type='audio/mpeg' />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <label className='inline-flex items-center cursor-pointer'>
              <input type='checkbox' className='sr-only peer' checked={audioOffline} onChange={() => setAudioOffline(!audioOffline)} />
              <div className="w-11 h-6 bg-red-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 relative"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status
