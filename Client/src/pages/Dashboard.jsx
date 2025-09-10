import React, { useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import frame from '../assets/Frame 1.png'
import Monastery from '../components/Monastery'
import Users from '../components/Users'

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
            <div className='bg-white rounded-xl shadow p-6 border border-red-100'>
              <div className='text-red-900 prata text-xl mb-2'>Tours content</div>
              <div className='text-red-800'>Build your tours page here.</div>
            </div>
          )}
          {active === 'Documents' && (
            <div className='bg-white rounded-xl shadow p-6 border border-red-100'>
              <div className='text-red-900 prata text-xl mb-2'>Documents content</div>
              <div className='text-red-800'>Build your documents page here.</div>
            </div>
          )}
          {active === 'Analytics' && (
            <div className='bg-white rounded-xl shadow p-6 border border-red-100'>
              <div className='text-red-900 prata text-xl mb-2'>Analytics content</div>
              <div className='text-red-800'>Build your analytics page here.</div>
            </div>
          )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
