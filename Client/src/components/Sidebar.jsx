import React from 'react'

const Sidebar = ({ open, onClose, active, onSelect }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#1d1903]/95 backdrop-blur-md border-r border-red-900/30 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='h-20 flex items-center px-6 text-2xl prata text-amber-50 border-b border-red-900/30'>
          Menu
        </div>
        <nav className='p-4 flex flex-col gap-2'>
          {['Home','Explore','Events','Digital Archives'].map((item) => (
            <button
              key={item}
              onClick={() => { onSelect(item); onClose(); }}
              className={`text-left px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer prata ${
                active === item ? 'bg-amber-200 text-red-900' : 'text-amber-50 hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

