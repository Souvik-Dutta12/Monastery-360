import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import VRTourPage from './pages/VRTourPage'
import Contact from './pages/Contact'
import Events from './pages/Events'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import VRTour from './components/VRTour'

const App = () => {
  return (
    <AuthProvider>
      <div className='w-screen h-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/vr-tour' element={<VRTourPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<Events />} />
          <Route path='/vr-show' element={<VRTour />}/>
          <Route 
            path='/dashboard' 
            // element={
            //   <ProtectedRoute>
            //     <Dashboard />
            //   </ProtectedRoute>
            // } 
            element={<Dashboard />}
          />
          <Route path="*" element={<div className='text-7xl ml-[7%] md:ml-[25%] prata font-black  mt-70 text-red-800'>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
