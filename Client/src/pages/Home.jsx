import React from 'react'
import Nav from '../components/Nav'
import bg from '../assets/bg2.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' w-full h-full ' >
      <div className='relative w-full h-screen '>
        <Nav />
        <div className='w-screen h-screen  absolute opacity-50' >
          <img src={bg} alt="" className='w-full h-full object-cover' />
        </div>

        <div className='absolute w-screen h-screen flex flex-col items-center justify-center gap-2' >
          <h1 className='text-8xl prata font-black text-red-900 text-shadow-lg'>Monastery <span className='text-red-800 text-shadow-lg'>360</span></h1>
          <p className='text-5xl text-shadow-lg font-semibold text-red-950'>From Ancient Walls to digital worlds</p>
          <p className='text-5xl text-shadow-lg font-semibold text-red-950'>A journey into</p>
          <p className='text-7xl text-shadow-lg font-semibold text-red-950'><span className='prata text-red-800'>SIKKIM'S</span> Living Heritage</p>
          <div className='flex gap-5 mt-15'>
            <button className='px-5 py-2 text-center bg-red-900 hover:bg-red-800 duration-300 text-amber-100 rounded-lg border cursor-pointer'>
              <Link to={'#'} className='prata text-2xl flex items-center justify-center gap-2'>Start Virtual Tour<i className="ri-arrow-right-line"></i></Link>
            </button>
            <button className='px-5 py-2 text-center bg-amber-100 hover:bg-amber-200 duration-300 text-red-900 rounded-lg border cursor-pointer'>
              <Link to={'#'} className='prata text-2xl'>Book Your Visit</Link>
            </button>
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen'>

      </div>


    </div>
  )
}

export default Home
