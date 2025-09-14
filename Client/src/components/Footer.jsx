import React from 'react'

import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='w-full relative h-auto bg-[#D49E42]/70 pb-6 sm:pb-10'>
            {/* Main Footer Content */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 sm:py-10 px-4 lg:px-8 gap-8'>
                {/* Brand Section */}
                <div className='flex flex-col items-center lg:items-start justify-center gap-3 lg:col-span-1'>
                    <div className='flex items-center justify-center gap-3'>
                        <img src='/Logo.png' alt="logo" className='w-16 h-16 sm:w-20 sm:h-20' />
                        <div className='prata text-2xl sm:text-3xl text-white font-semibold flex flex-col items-center lg:items-start'>
                            <span>Monastery 360</span>
                            <span className='text-base sm:text-lg'>Sikkim Heritage</span>
                        </div>
                    </div>
                    <p className='text-sm sm:text-base lg:text-xl prata text-white text-center lg:text-left max-w-md'>
                        Preserving Sikkim's heritage - connecting communities, inspiring generations, and making the wisdom of monasteries accessible worldwide
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className='flex  flex-col items-start lg:items-center  text-white justify-center gap-3 lg:col-span-1'>
                    <h3 className='prata text-lg sm:text-xl font-semibold text-white mb-2'>Quick Links</h3>
                    <div className='flex flex-col gap-1 text-sm sm:text-base lg:text-xl prata'>
                        <Link to="/contact" className='hover:text-red-800 duration-300 transition-colors'>Contact Us</Link>
                        <Link to="#" className='hover:text-red-800 duration-300 transition-colors'>FAQs</Link>
                        <Link to="/vr-tour" className='hover:text-red-800 duration-300 transition-colors'>Virtual Tours</Link>
                        <Link to="#" className='hover:text-red-800 duration-300 transition-colors'>Bookings</Link>
                        <Link to="#" className='hover:text-red-800 duration-300 transition-colors'>Events</Link>
                        <Link to="#" className='hover:text-red-800 duration-300 transition-colors'>Archives</Link>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className='flex flex-col items-center lg:items-start prata text-white justify-center  lg:col-span-1'>
                    <div className='flex flex-col items-center lg:items-start justify-center'>
                        <h3 className='text-lg sm:text-xl font-semibold '>Donate to Heritage</h3>
                        <h3 className='text-lg sm:text-xl font-semibold mb-4'>Languages</h3>
                    </div>
                    <div className='w-full max-w-md border border-amber-400 flex flex-row items-center justify-center bg-white overflow-hidden'>
                        <input
                            className='w-full sm:w-3/5 px-3 py-3 sm:h-12 outline-none text-red-800 text-sm sm:text-base'
                            placeholder='Enter your email id'
                            type="email" 
                        />
                        <button className='w-full sm:w-2/5 h-12 bg-red-800 text-white hover:bg-red-700 transition-colors text-sm sm:text-base font-semibold'>
                            Join our newsletter
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 lg:px-80 px-4 py-4 border-t border-amber-400/30'>
                <div className='text-red-800 flex gap-4 sm:gap-6 lg:gap-7 text-2xl sm:text-3xl lg:text-4xl'>
                    <a href="#" className='hover:text-red-600 transition-colors duration-300' aria-label="Facebook">
                        <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href="#" className='hover:text-red-600 transition-colors duration-300' aria-label="Twitter">
                        <i className="ri-twitter-x-line"></i>
                    </a>
                    <a href="#" className='hover:text-red-600 transition-colors duration-300' aria-label="YouTube">
                        <i className="ri-youtube-fill"></i>
                    </a>
                </div>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-7 text-xs sm:text-sm lg:text-base text-white prata text-center sm:text-left'>
                    <Link to="#" className='hover:text-red-800 duration-300 transition-colors'>Privacy Policy</Link>
                    <Link to="#" className='hover:text-red-800 duration-300 transition-colors'>Terms of Use</Link>
                    <span>Copyright © 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
