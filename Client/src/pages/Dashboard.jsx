import React, { useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar'

import Monastery from '../components/Monastery'
import Users from '../components/Users'
import Analytics from '../components/Analytics'
import Archives from '../components/Archives'
import Tours from '../components/Tours'
import Bookings from '../components/Bookings'
import Pricing from '../components/Pricing'
import Status from '../components/Status'
import { UserProfile } from '@clerk/clerk-react'
import { RegionProvider } from '../context/RegionContext'

const Dashboard = () => {
  const [active, setActive] = useState('Monasteries')
  return (
    <RegionProvider>
    <div className='w-screen min-h-screen relative'>
      {/* Foreground content */}
      <div className='relative z-10'>
        <DashboardSidebar active={active} onChange={setActive} />
        <main className='pl-72 min-h-screen '>
          <div >
          {active === 'Monasteries' && (
            <Monastery />
          )}
          {active === 'Users' && (
            <Users />
          )}
          {active === 'Tours' && (
            <Tours />
          )}
          {active === 'Archives' && (
            <Archives />
          )}
          {active === 'Analytics' && (
            <Analytics />
          )}
          {active === 'Bookings' && (
            <Bookings />
          )}
          {active === 'Pricing' && (
            <Pricing />
          )}
          {active === 'Status' && (
            <Status />
          )}
          {active === 'Profile' && (
            <div className='bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-red-200 shadow-lg'>
              <UserProfile
                appearance={{
                  elements: {
                    card: 'bg-transparent shadow-none',
                    navbar: 'hidden',
                    headerTitle: 'text-red-900 prata',
                    headerSubtitle: 'text-red-700',
                    formButtonPrimary: 'bg-red-900 hover:bg-red-800 text-amber-100 border-0',
                    formFieldInput: 'bg-white border-red-200 text-red-900 placeholder-red-500',
                    formFieldLabel: 'text-red-800',
                    formFieldAction: 'text-red-800 hover:text-red-900',
                  }
                }}
              />
            </div>
          )}
          </div>
        </main>
      </div>
    </div>
    </RegionProvider>
  )
}

export default Dashboard
