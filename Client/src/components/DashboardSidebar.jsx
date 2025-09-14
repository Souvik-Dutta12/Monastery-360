import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useClerk } from '@clerk/clerk-react'
import { useRegion } from '../context/RegionContext'

const DashboardSidebar = ({ active, onChange }) => {
  const { signOut } = useClerk()
  const { selectedRegion, setSelectedRegion } = useRegion()
  const [isOpen, setIsOpen] = useState(false)

  const handleSignOut = () => {
    signOut()
  }

  const items = [
    { key: 'Monasteries', icon: 'ri-dashboard-line' },
    { key: 'Users', icon: 'ri-user-line' },
    { key: 'Tours', icon: 'ri-compass-3-line' },
    { key: 'Archives', icon: 'ri-article-line' },
    { key: 'Analytics', icon: 'ri-line-chart-fill' },
    { key: 'Bookings', icon: 'ri-calendar-check-line' },
    { key: 'Pricing', icon: 'ri-price-tag-3-line' },
    { key: 'Status', icon: 'ri-wifi-line' },
    { key: 'Profile', icon: 'ri-user-3-line' },
  ]

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-2 left-1 z-50 bg-red-800 text-sm p-1 rounded-md text-amber-200 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-[#0D244B] backdrop-blur-md text-white z-40 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        <Link
          to={'/'}
          className='h-20 flex items-center px-6 text-2xl prata border-b border-red-900/30 mt-3'
        >
          <img src='/Logo.png' alt="" className='h-full'/>
          <div className='prata flex flex-col '>
            <p className='text-amber-200'>Monastery 360</p>
            <p className='font-light'>Sikkim Heritage</p>
          </div>
        </Link>

        {/* Region Dropdown */}
        <div className='px-4 mt-3'>
          <label className='text-xs text-amber-200'>Region</label>
          <select
            value={selectedRegion}
            onChange={(e)=>setSelectedRegion(e.target.value)}
            className='mt-1 w-full bg-transparent border border-amber-200 text-amber-100 rounded-lg px-3 py-2'
          >
            <option className='bg-[#0D244B]' value='East'>East</option>
            <option className='bg-[#0D244B]' value='West'>West</option>
            <option className='bg-[#0D244B]' value='South'>South</option>
            <option className='bg-[#0D244B]' value='North'>North</option>
          </select>
        </div>

        {/* Nav Items */}
        <nav className='p-4 flex flex-col gap-1'>
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onChange?.(item.key)
                setIsOpen(false) // auto-close on mobile
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer prata ${
                active === item.key ? 'text-amber-200' : 'text-amber-50 hover:bg-white/10'
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              <span>{item.key}</span>
              {active === item.key && (
                <span className='ml-auto w-1.5 h-1.5 rounded-full bg-amber-200'></span>
              )}
            </button>
          ))}
        </nav>

        {/* Sign Out */}
        <div className='absolute bottom-4 left-0 right-0 px-4'>
          <button 
            onClick={handleSignOut}
            className='w-full text-center px-4 py-2 cursor-pointer rounded-lg bg-transparent hover:bg-[#294169a7] border border-amber-200 text-amber-100 duration-300'
          >
            Log out <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </aside>
    </>
  )
}

export default DashboardSidebar
