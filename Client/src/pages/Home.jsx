import React from 'react'
import Nav from '../components/Nav'
import bg from '../assets/bg2.jpg'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import frame from '../assets/Frame 1.png'
import CarouselPage from '../components/CarouselPage'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className=' w-full h-full ' >
      <div className='relative w-full h-screen '>
        <Nav />
        <div className='w-screen h-screen  absolute opacity-50' >
          <img src={bg} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='w-screen h-screen bg-[#1d1903] absolute opacity-70' >
        </div>

        <div className='absolute w-screen h-screen flex flex-col items-center justify-center gap-2 ' >
          <h1 className='text-8xl prata font-black text-amber-300 text-shadow-lg'>Monastery <span className='text-amber-50 text-shadow-lg'>360</span></h1>
          <p className='text-5xl mt-20 prata text-shadow-lg font-semibold text-amber-50'>From Ancient Walls to digital worlds</p>
          <p className='text-5xl text-shadow-lg prata  font-light text-amber-50'>A journey into</p>
          <p className='text-7xl text-shadow-lg prata font-semibold text-amber-50'><span className='prata text-amber-300'>SIKKIM'S</span> Living Heritage</p>
          <div className='flex gap-5 mt-15'>
            <button className='px-5 py-2 text-center bg-red-900 hover:bg-red-800 duration-300 text-amber-100 rounded-lg border cursor-pointer'>
              <Link to={'#'} className='prata text-2xl flex items-center justify-center gap-2'>Start Virtual Tour<i className="ri-arrow-right-line"></i></Link>
            </button>
            <button className='px-5 py-2 text-center bg-amber-200 hover:bg-amber-300 duration-300 text-red-900 rounded-lg border cursor-pointer'>
              <Link to={'#'} className='prata text-2xl'>Book Your Visit</Link>
            </button>
          </div>
        </div>
      </div>

      <div className='w-full relative h-auto   ' >
        <div className="absolute inset-0">
          <img src={frame} alt="frame" className="w-full h-full object-cover" />
        </div>

        <h1 className="prata text-4xl font-bold pt-10 text-red-800  ml-7">
          Discover
        </h1>
        <CarouselPage />
        <h1 className="prata text-4xl font-bold pt-0 text-red-800  ml-7">
          Live Events
        </h1>
        <CarouselPage />
<Footer />
      </div>

      


    </div>
  )
}

export default Home
