import React, { useState } from 'react'

const MonaCard = ({ name = 'Lachung Monastery', cover = '/card.png', about, location, images = [] }) => {
    const [open, setOpen] = useState(false)

    const gallery = images && images.length > 0 ? images : [
        cover,
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60'
    ]

    return (
        <>
        <div className='w-[75%] mb-3 cursor-pointer bg-amber-50 shadow-xl border border-red-800 overflow-hidden p-7 hover:shadow-2xl transition mt-5 flex items-stretch'>
            {/* Left Section */}
            <div className='w-1/3'>
                <div className='w-full h-48 md:h-56 lg:h-60 bg-[#0D244B]'>
                    <img
                        src={cover}
                        alt={name}
                        className='w-full h-full object-cover scale-90 hover:scale-100 transition-all duration-500'
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className='w-2/3 p-5 prata flex flex-col gap-5'>
                <h2 className='text-4xl font-bold text-[#0D244B]'>{name}</h2>
                <div className='flex flex-col gap-1'>
                    <p className=' text-[#0D244B]'>{about || 'This monastery is renowned for its serene ambiance, traditional Buddhist architecture, and vibrant local festivals, serving as a cultural and spiritual hub for the community.'}</p>
                <p className=' text-[#0D244B]'>
                      {location || 'Sikkim'}
                </p>
                </div>
                <div className='flex items-center justify-between mt-3 '>
                    <div className='flex gap-5'>
                        <button className='w-10 h-10  cursor-pointer text-center flex items-center justify-center'><img src='/group.png' alt="" /></button>
                    <button className='w-10 h-10  cursor-pointer text-center flex items-center justify-center'><img src='/material.png' alt="" /></button>
                    <button className='w-10 h-10  cursor-pointer text-center flex items-center justify-center'><img src='/remove.png' alt="" /></button>
                    </div>
                    <button
                      onClick={() => setOpen(true)}
                      className='flex items-center justify-center text-xl text-red-600 hover:text-red-800 duration-300 '>
                      More<i className="ri-arrow-right-line"></i>
                    </button>
                    
                </div>
            </div>
        </div>

        {open && (
          <div className='fixed  inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
            <div className='w-full max-w-5xl h-[90vh] rounded-2xl border border-amber-200 bg-amber-50 shadow-2xl overflow-hidden flex flex-col'>
              {/* Header */}
              <div className='flex items-center justify-between px-5 py-4 border-b border-amber-200'>
                <div>
                  <h3 className='prata text-2xl text-red-900'>{name}</h3>
                  <p className='text-red-900/70 text-sm'>Discover more images and details</p>
                </div>
                <button onClick={() => setOpen(false)} className='p-2 rounded hover:bg-amber-100 text-red-900' aria-label='Close'>
                  <i className='ri-close-line text-2xl'></i>
                </button>
              </div>

              {/* Scrollable content */}
              <div className='flex-1 overflow-y-auto px-5 py-4'>
                {/* Gallery */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                  <div className='lg:col-span-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {gallery.slice(0,4).map((src, idx) => (
                        <div key={idx} className='rounded-xl overflow-hidden border border-amber-200'>
                          <img src={src} alt={`Gallery ${idx+1}`} className='w-full h-40 object-cover' />
                        </div>
                      ))}
                    </div>
                  </div>
                  <aside>
                    <div className='bg-white rounded-xl p-4 border border-amber-200 h-full'>
                      <h4 className='prata text-xl text-red-900 mb-2'>About</h4>
                      <p className='text-red-900/80 text-sm'>{about || `${name} is known for its serene location and traditional Tibetan architecture. It serves as a cultural center for the local community with annual festivals and rituals.`}</p>
                      <h5 className='prata text-lg text-red-900 mt-4 mb-2'>Location</h5>
                      <p className='text-red-900/80 text-sm'>{location || 'Sikkim'}</p>
                      <div className='mt-4 flex gap-2'>
                        <a href='/vr-tour' className='px-4 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-amber-100 inline-flex items-center gap-2'>Start VR Tour <i className='ri-vr-line'></i></a>
                        <button onClick={() => setOpen(false)} className='px-4 py-2 rounded-lg border border-amber-200 text-red-900 hover:bg-amber-100'>Close</button>
                      </div>
                    </div>
                  </aside>
                </div>

                {/* Visiting Info */}
                <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <h4 className='prata text-lg text-red-900 mb-2'>Timings</h4>
                    <ul className='text-red-900/80 text-sm space-y-1'>
                      <li>Mon–Fri: 6:00 AM – 6:00 PM</li>
                      <li>Sat–Sun: 6:00 AM – 7:00 PM</li>
                      <li>Festivals: Extended hours</li>
                    </ul>
                  </div>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <h4 className='prata text-lg text-red-900 mb-2'>Entry & Dress</h4>
                    <ul className='text-red-900/80 text-sm space-y-1'>
                      <li>Entry: Free (donations welcome)</li>
                      <li>Dress: Modest attire recommended</li>
                      <li>Photography: Allowed (no flash)</li>
                    </ul>
                  </div>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <h4 className='prata text-lg text-red-900 mb-2'>Contact</h4>
                    <ul className='text-red-900/80 text-sm space-y-1'>
                      <li><i className='ri-phone-line'></i> +91-3592-123456</li>
                      <li><i className='ri-mail-line'></i> info@monastery.org</li>
                      <li><i className='ri-map-pin-2-line'></i> {location || 'Sikkim'}</li>
                    </ul>
                  </div>
                </div>

                {/* Events */}
                <div className='mt-6 bg-white rounded-xl p-4 border border-amber-200'>
                  <h4 className='prata text-lg text-red-900 mb-2'>Upcoming Events</h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-red-900/80 text-sm'>
                    <div className='p-3 rounded-lg border border-amber-200'>
                      <div className='font-semibold text-red-900'>Morning Prayers</div>
                      <div>Daily • 6:00 AM</div>
                    </div>
                    <div className='p-3 rounded-lg border border-amber-200'>
                      <div className='font-semibold text-red-900'>Festival Preparation</div>
                      <div>Saturday • 4:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className='mt-6 bg-white rounded-xl p-4 border border-amber-200'>
                  <h4 className='prata text-lg text-red-900 mb-2'>Location</h4>
                  <div className='w-full h-56 rounded-lg overflow-hidden border border-amber-200'>
                    <img src='https://maps.googleapis.com/maps/api/staticmap?center=Sikkim&zoom=7&size=600x300&key=fake-key' alt='Map' className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </>
    )
}

export default MonaCard
