import React, { useState } from 'react'

const ArchiveCard = ({ title = 'Gandharan Buddhist texts', period = '1st-3rd century BCE', image = '/sompod.png', images = [], description = 'The Gandhāran Buddhist texts are the oldest Buddhist manuscripts yet discovered, dating from about the 1st century BCE to 3rd century CE and found in the northwestern outskirts of Pakistan.' }) => {
    const [open, setOpen] = useState(false)

    const gallery = (images && images.length > 0) ? images : [
      image,
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=60'
    ]

    return (
        <>
        <div className='w-[75%] mb-3 cursor-pointer bg-amber-50 shadow-xl border border-amber-200 overflow-hidden p-7 hover:shadow-2xl transition mt-5 flex items-stretch'>
            {/* Left Section */}
            <div className='w-1/3'>
                <div className='w-full h-48 md:h-56 lg:h-60 bg-amber-100'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover scale-90 transition-transform duration-500 hover:scale-100'
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className='w-2/3 p-5 prata flex flex-col gap-5'>
                <div className='text-red-900 flex items-center justify-between'>
                    <h1 className='text-3xl font-bold '>{title}</h1>
                    <span className='px-2 py-1 rounded-md bg-amber-100 text-red-900 text-sm'>{period}</span>
                </div>
                <div className='max-w-lg'>
                    <p className='text-red-900/80 text-base'>{description}</p>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <button onClick={()=>setOpen(true)} className='text-red-600 hover:text-red-800 hover:underline duration-300 text-xl'>Read more <i className="ri-arrow-right-line"></i></button>
                    <div className='text-2xl text-red-900'>
                        <i className="ri-multi-image-line"></i>
                        <i className="ri-bookmark-fill ml-3"></i>
                        <i className="ri-share-forward-line ml-3"></i>
                    </div>
                </div>
            </div>
        </div>

        {open && (
          <div className='fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
            <div className='w-full max-w-5xl h-[90vh] rounded-2xl border border-amber-200 bg-amber-50 shadow-2xl overflow-hidden flex flex-col'>
              {/* Header */}
              <div className='flex items-center justify-between px-5 py-4 border-b border-amber-200'>
                <div>
                  <h3 className='prata text-2xl text-red-900'>{title}</h3>
                  <p className='text-red-900/70 text-sm'>Detailed description, images, provenance, and references • {period}</p>
                </div>
                <button onClick={() => setOpen(false)} className='p-2 rounded hover:bg-amber-100 text-red-900' aria-label='Close'>
                  <i className='ri-close-line text-2xl'></i>
                </button>
              </div>

              {/* Scrollable content */}
              <div className='flex-1 overflow-y-auto px-5 py-4'>
                {/* Hero image */}
                <div className='rounded-xl overflow-hidden border border-amber-200'>
                  <img src={image} alt='Archive Cover' className='w-full h-56 object-cover' />
                </div>

                {/* About */}
                <div className='mt-4 bg-white rounded-xl p-4 border border-amber-200'>
                  <h4 className='prata text-xl text-red-900 mb-2'>About This Archive</h4>
                  <p className='text-red-900/80 text-sm'>{description}</p>
                </div>

                {/* Metadata */}
                <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <h5 className='prata text-lg text-red-900 mb-2'>Provenance</h5>
                    <ul className='text-red-900/80 text-sm space-y-1'>
                      <li>Region: Sikkim</li>
                      <li>Period: {period}</li>
                      <li>Material: Mixed (paper, palm-leaf, fabric)</li>
                    </ul>
                  </div>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <h5 className='prata text-lg text-red-900 mb-2'>Preservation</h5>
                    <ul className='text-red-900/80 text-sm space-y-1'>
                      <li>Digitized: 4K multi-spectral</li>
                      <li>Condition: Curated</li>
                      <li>Access: Researcher by request</li>
                    </ul>
                  </div>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <h5 className='prata text-lg text-red-900 mb-2'>Rights & Credits</h5>
                    <ul className='text-red-900/80 text-sm space-y-1'>
                      <li>Rights: CC BY-NC</li>
                      <li>Credits: Sikkim Archives</li>
                      <li>Curator: Program Team</li>
                    </ul>
                  </div>
                </div>

                {/* Gallery */}
                <div className='mt-4'>
                  <h5 className='prata text-lg text-red-900 mb-2'>Gallery</h5>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {gallery.slice(0,6).map((src,i)=> (
                      <div key={i} className='rounded-xl overflow-hidden border border-amber-200'>
                        <img src={src} alt={`archive-${i}`} className='w-full h-40 object-cover' />
                      </div>
                    ))}
                  </div>
                </div>

                {/* References */}
                <div className='mt-4 bg-white rounded-xl p-4 border border-amber-200'>
                  <h5 className='prata text-lg text-red-900 mb-2'>References</h5>
                  <ul className='text-red-900/80 text-sm space-y-1 list-disc pl-5'>
                    <li>Local monastery records and digitization notes.</li>
                    <li>Scholarly articles on Himalayan manuscripts and iconography.</li>
                    <li>Metadata compiled from Sikkim cultural repositories.</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className='px-5 py-4 border-t border-amber-200 flex items-center justify-end'>
                <button onClick={() => setOpen(false)} className='px-4 py-2 rounded-lg border border-amber-200 text-red-900 hover:bg-amber-100'>Close</button>
              </div>
            </div>
          </div>
        )}
        </>
    )
}

export default ArchiveCard
