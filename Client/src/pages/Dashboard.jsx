import React, { useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import frame from '../assets/Frame 1.png'
import Monastery from '../components/Monastery'

const Dashboard = () => {
  const [active, setActive] = useState('Monasteries')
  return (
    <div className='w-screen h-screen '>
      <DashboardSidebar active={active} onChange={setActive} />
      <main className='pl-72 h-full'>
        <div className="absolute inset-0">
          <img src={frame} alt="frame" className="w-full h-full object-cover" />
        </div>
        
        <div >
          {active === 'Monasteries' && (
            <Monastery />
          )}
          {active === 'Users' && (
            <div className='bg-white rounded-xl shadow p-6 border border-red-100'>
              <div className='text-red-900 prata text-xl mb-2'>Users content</div>
              <div className='text-red-800'>Build your users page here.</div>
            </div>
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
  )
}

export default Dashboard
