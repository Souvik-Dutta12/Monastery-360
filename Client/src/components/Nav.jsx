import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  const [active, setActive] = useState('Home')
  return (
    <div className='fixed z-100 w-full h-20 backdrop-blur flex justify-between  px-10 pt-2 items-center text-2xl font-bold '>
      <div className=' h-full flex items-center justify-center cursor-pointer'>
        <Link to={'/'} className='h-full flex items-center justify-center'>
          <img src={logo} alt="logo" className=' h-full' />
          <div className='prata text-4xl text-amber-300 text-shadow-lg'>Monastery <span className='text-amber-50'>360</span></div>
        </Link>
      </div>
      <div className='flex justify-between w-auto  gap-70'>
        <div className='flex gap-10  w-auto items-center pl-10'>
          <span>
            <Link
              to={'#'}
              onClick={() => setActive('Home')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group`}
            >
              Home
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            <Link
              to={'#'}
              onClick={() => setActive('Explore')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group`}
            >
              Explore
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Explore' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            <Link
              to={'#'}
              onClick={() => setActive('Events')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group`}
            >
              Events
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Events' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            <Link
              to={'#'}
              onClick={() => setActive('Digital Archives')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group`}
            >
              Digital Archives
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Digital Archives' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
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
