import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='fixed z-100 w-full h-20 backdrop-blur flex justify-between  px-10 pt-2 items-center text-2xl font-bold '>
      <div className=' h-full flex items-center justify-center cursor-pointer'>
        <Link to={'/'} className='h-full flex items-center justify-center'>
          <img src={logo} alt="logo" className=' h-full' />
          <div className='prata text-4xl text-red-900 text-shadow-lg'>Monastery 360</div>
        </Link>
      </div>
      <div className='flex justify-between w-auto  gap-70'>
        <div className='flex gap-10  w-auto items-center'>
          <span><Link to={'#'} className='prata text-red-950 text-shadow-md'>Home</Link></span>
          <span><Link to={'#'} className='prata text-red-950 text-shadow-md'>Explore</Link></span>
          <span><Link to={'#'} className='prata text-red-950 text-shadow-md'>Events</Link></span>
          <span><Link to={'#'} className='prata text-red-950 text-shadow-md'>Digital Archives</Link></span>
        </div>
        <div className='flex gap-5'>
          <button className='px-5 py-2 text-center bg-red-900 hover:bg-red-800 duration-300 text-amber-100 rounded-lg border cursor-pointer'>
            <Link to={'#'} className='prata '>Login</Link>
          </button>
          <button className='px-5 py-2 text-center bg-amber-100 hover:bg-amber-200 duration-300 text-red-900 rounded-lg border cursor-pointer'>
            <Link to={'#'} className='prata '>Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
