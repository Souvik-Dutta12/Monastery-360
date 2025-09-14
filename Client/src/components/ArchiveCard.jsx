import React, { useState } from 'react'

const ArchiveCard = ({
  title = 'Gandharan Buddhist texts',
  period = '1st-3rd century BCE',
  image = '/sompod.png',
  images = [],
  description = 'The Gandhāran Buddhist texts are the oldest Buddhist manuscripts yet discovered, dating from about the 1st century BCE to 3rd century CE and found in the northwestern outskirts of Pakistan.'
}) => {
  const [open, setOpen] = useState(false)

  const gallery = (images && images.length > 0) ? images : [
    image,
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=60'
  ]

  return (
    <>
      {/* Card */}
      <div className="w-full md:w-[75%] mb-3 cursor-pointer bg-amber-50 shadow-xl border border-amber-200 overflow-hidden p-5 md:p-7 hover:shadow-2xl transition mt-5 flex flex-col md:flex-row items-stretch gap-4">
        
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/3">
          <div className="w-full h-40 sm:h-48 md:h-56 lg:h-60 bg-amber-100 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full md:w-2/3 p-3 md:p-5 prata flex flex-col gap-4">
          <div className="text-red-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
            <span className="px-2 py-1 rounded-md bg-amber-100 text-red-900 text-sm whitespace-nowrap">{period}</span>
          </div>

          <div>
            <p className="text-red-900/80 text-sm sm:text-base">{description}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setOpen(true)}
              className="text-red-600 hover:text-red-800 hover:underline duration-300 text-base sm:text-lg"
            >
              Read more <i className="ri-arrow-right-line"></i>
            </button>
            <div className="text-xl sm:text-2xl text-red-900 flex gap-3">
              <i className="ri-multi-image-line"></i>
              <i className="ri-bookmark-fill"></i>
              <i className="ri-share-forward-line"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="w-full max-w-5xl h-[90vh] rounded-2xl border border-amber-200 bg-amber-50 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-amber-200">
              <div>
                <h3 className="prata text-lg sm:text-2xl text-red-900">{title}</h3>
                <p className="text-red-900/70 text-xs sm:text-sm">Detailed description, images, provenance, and references • {period}</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-amber-100 text-red-900" aria-label="Close">
                <i className="ri-close-line text-xl sm:text-2xl"></i>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-4">
              
              {/* Hero image */}
              <div className="rounded-xl overflow-hidden border border-amber-200">
                <img src={image} alt="Archive Cover" className="w-full h-40 sm:h-56 object-cover" />
              </div>

              {/* About */}
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <h4 className="prata text-lg sm:text-xl text-red-900 mb-2">About This Archive</h4>
                <p className="text-red-900/80 text-sm">{description}</p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Provenance', items: ['Region: Sikkim', `Period: ${period}`, 'Material: Mixed (paper, palm-leaf, fabric)'] },
                  { title: 'Preservation', items: ['Digitized: 4K multi-spectral', 'Condition: Curated', 'Access: Researcher by request'] },
                  { title: 'Rights & Credits', items: ['Rights: CC BY-NC', 'Credits: Sikkim Archives', 'Curator: Program Team'] }
                ].map((section, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-amber-200">
                    <h5 className="prata text-base sm:text-lg text-red-900 mb-2">{section.title}</h5>
                    <ul className="text-red-900/80 text-sm space-y-1">
                      {section.items.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div>
                <h5 className="prata text-base sm:text-lg text-red-900 mb-2">Gallery</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {gallery.slice(0, 6).map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-amber-200">
                      <img src={src} alt={`archive-${i}`} className="w-full h-28 sm:h-40 object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* References */}
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <h5 className="prata text-base sm:text-lg text-red-900 mb-2">References</h5>
                <ul className="text-red-900/80 text-sm space-y-1 list-disc pl-5">
                  <li>Local monastery records and digitization notes.</li>
                  <li>Scholarly articles on Himalayan manuscripts and iconography.</li>
                  <li>Metadata compiled from Sikkim cultural repositories.</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-amber-200 flex items-center justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-3 sm:px-4 py-2 rounded-lg border border-amber-200 text-red-900 hover:bg-amber-100 text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ArchiveCard
