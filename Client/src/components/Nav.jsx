import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [active, setActive] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='fixed z-50 w-full h-20 backdrop-blur flex justify-between px-4 md:px-10 pt-2 items-center text-2xl font-bold'>
      <div className='h-full flex items-center justify-center cursor-pointer'>
        <Link to={'/'} className='h-full flex items-center justify-center'>
          <img src='/Logo.png' alt="logo" className='h-full' />
          <div className='prata text-2xl md:text-4xl text-amber-300 text-shadow-lg'>Monastery <span className='text-amber-50'>360</span></div>
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className='hidden   lg:flex w-auto gap-30'>
        <div className='flex gap-6 xl:gap-10 w-auto  items-center '>
          <span>
            <Link
              to={'/'}
              onClick={() => setActive('Home')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg xl:text-xl`}
            >
              Home
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            <Link
              to={'/explore'}
              onClick={() => setActive('Explore')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg xl:text-xl`}
            >
              Explore
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Explore' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            <Link
              to={'/events'}
              onClick={() => setActive('Events')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg xl:text-xl`}
            >
              Events
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Events' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            {/* <Link
              to={'/sign-in'}
              onClick={() => setActive('Digital Archives')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg xl:text-xl`}
            >
              Digital Archives
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Digital Archives' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link> */}
            <Link
              to={'/dashboard'}
              onClick={() => setActive('Digital Archives')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg xl:text-xl`}
            >
              Dashboard
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Digital Archives' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
          <span>
            <Link
              to={'/contact'}
              onClick={() => setActive('Contact')}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg xl:text-xl`}
            >
              Contact us
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </span>
        </div>
        <div className='flex gap-3 xl:gap-5 w-auto  items-center justify-evenly'>

          <select className='text-xs prata sm:text-sm border cursor-pointer outline-none border-amber-300 rounded-lg px-1 sm:px-2 py-1.5 sm:py-2 text-red-900 bg-white/80'>
            <option value='en' className='bg-amber-100'>EN</option>
            <option value='hi' className='bg-amber-100'>हिन्दी</option>
            <option value='ne' className='bg-amber-100'>नेपाली</option>
            <option value='si' className='bg-amber-100'>සිංහල</option>
            <option value='bo' className='bg-amber-100'>བོད་ཡིག</option>
          </select>
          <button className='px-3 xl:px-5 py-2 text-center bg-red-900 hover:bg-red-800 duration-300 text-amber-100 rounded-lg border cursor-pointer text-lg xl:text-xl'>
            <Link to={'/sign-in'} className='prata '>Login</Link>
          </button>
          <button className='px-3 xl:px-5 py-2 text-center bg-amber-100 hover:bg-amber-200 duration-300 text-red-900 rounded-lg border cursor-pointer text-lg xl:text-xl'>
            <Link to={'/sign-up'} className='prata '>Sign up</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className='lg:hidden flex items-center gap-4'>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='text-amber-300 hover:text-amber-100 transition-colors p-2'
          aria-label='Toggle mobile menu'
        >
          <i className={`ri-${mobileMenuOpen ? 'close-line' : 'menu-line'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-[#1d1903]/95 backdrop-blur-md border-t border-amber-200/20 lg:hidden'>
          <div className='px-4 py-6 flex flex-col space-y-4'>
            <Link
              to={'/'}
              onClick={() => {
                setActive('Home')
                setMobileMenuOpen(false)
              }}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg `}
            >
              Home
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={'/explore'}
              onClick={() => {
                setActive('Explore')
                setMobileMenuOpen(false)
              }}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg `}
            >
              Explore
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Explore' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={'/events'}
              onClick={() => {
                setActive('Events')
                setMobileMenuOpen(false)
              }}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg `}
            >
              Events
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Events' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            {/* <Link
              to={'/sign-in'}
              onClick={() => {
                setActive('Digital Archives')
                setMobileMenuOpen(false)
              }}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg `}
            >
              Digital Archives
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Digital Archives' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link> */}
            <Link
              to={'/dashboard'}
              onClick={() => {
                setActive('Dashboard')
                setMobileMenuOpen(false)
              }}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg `}
            >
              Dashboard
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Digital Archives' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link
              to={'/contact'}
              onClick={() => {
                setActive('Contact')
                setMobileMenuOpen(false)
              }}
              className={`prata text-amber-300 duration-300 text-shadow-md relative inline-block pb-1 group text-lg `}
            >
              Contact us
              <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-900 transition-all duration-300 ${active === 'Contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <div className='flex flex-col gap-3 pt-4 border-t border-amber-200/20'>
              <select className='text-xs sm:text-sm border cursor-pointer outline-none border-amber-300 rounded-lg px-1 sm:px-2 py-1.5 sm:py-2 text-red-900 bg-white/80'>
                <option value='en' className='bg-amber-100'>EN</option>
                <option value='hi' className='bg-amber-100'>हिन्दी</option>
                <option value='ne' className='bg-amber-100'>नेपाली</option>
                <option value='si' className='bg-amber-100'>සිංහල</option>
                <option value='bo' className='bg-amber-100'>བོད་ཡིག</option>
              </select>
              <button className='w-full px-5 py-2 text-center bg-red-900 hover:bg-red-800 duration-300 text-amber-100 rounded-lg border cursor-pointer'>
                <Link to={'/sign-in'} className='prata text-xl'>Login</Link>
              </button>
              <button className='w-full px-5 py-2 text-center bg-amber-100 hover:bg-amber-200 duration-300 text-red-900 rounded-lg border cursor-pointer'>
                <Link to={'/sign-up'} className='prata text-xl'>Sign up</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
