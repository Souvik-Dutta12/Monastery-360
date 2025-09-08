import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import frame from '../assets/Frame 1.png'

const Footer = () => {
    return (
        <div className='w-full relative h-auto bg-[#D49E42]/70 pb-10'>
            
            <div className='w-full  grid grid-cols-3 py-10 px-5 gap-5 ' >
                <div className='flex flex-col  w-sm  ml-10 items-center justify-center gap-3'>
                    <div className='flex items-center justify-center gap-3'>
                        <img src={logo} alt="logo" className='w-20 h-20 ' />
                        <div className='prata text-3xl text-white font-semibold flex flex-col items-center'>
                            <span>Monastery 360</span>
                            <span className='text-lg'>Sikkim Heritage</span>
                        </div>
                    </div>
                    <p className='text-xl prata text-white text-center'>Preserving Sikkim’s heritage - connecting communities, inspiring generations, and making the wisdom of monastries accessible worldwide</p>
                </div>
                <div className='flex flex-col w-sm ml-40 items-start text-xl  prata text-white justify-center '>
                    <span><Link>Contact Us</Link></span>
                    <span><Link>FAQs</Link></span>
                    <span><Link>Virtual Tours</Link></span>
                    <span><Link>Bookings</Link></span>
                    <span><Link>Events</Link></span>
                    <span><Link>Archives</Link></span>
                </div>
                <div className='flex flex-col w-md  prata px-5 text-white text-xl items-center justify-center gap-5'>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 >Donate to Heritage</h1>
                        <h1>Languages</h1>
                    </div>
                    <div className='w-full border border-amber-400 flex items-center justify-center h-12 bg-white'>
                        <input
                        className='w-3/5 px-3 h-full outline-none text-red-800'
                        placeholder='Enter your email id'
                        type="email" />
                        <button className='w-2/5 h-full bg-red-800 text-white'>Join our newsletter</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div className='text-red-800 flex gap-7 text-4xl'>
            
                    <i className="ri-facebook-circle-fill"></i>
                    <i className="ri-twitter-x-line"></i>
                    <i className="ri-youtube-fill"></i>
                </div>
                <div className='flex gap-7 text-md text-white prata'>
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                    <span>Copyright © 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
