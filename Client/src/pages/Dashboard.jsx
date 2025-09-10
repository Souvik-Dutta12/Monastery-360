import React, { useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import frame from '../assets/Frame 1.png'
import Monastery from '../components/Monastery'
import Users from '../components/Users'
import Analytics from '../components/Analytics'
import Archives from '../components/Archives'
import Tours from '../components/Tours'

const Dashboard = () => {
  const [active, setActive] = useState('Monasteries')
  return (
    <div className='w-screen min-h-screen relative'>
      {/* Background covering the whole page */}
      <div className="absolute inset-0">
        <img src={frame} alt="frame" className="w-full h-full object-cover" />
      </div>

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
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
