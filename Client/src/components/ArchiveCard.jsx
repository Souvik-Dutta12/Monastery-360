import React from 'react'
import sompod from '../assets/sompod.png'
const ArchiveCard = () => {
    return (
        <div className='w-[75%] mb-3 cursor-pointer max-h-[65vh] bg-amber-100 shadow-xl border border-red-800 overflow-hidden p-7 hover:shadow-2xl transition mt-5 flex'>
            {/* Left Section */}
            <div className='w-1/3 h-full bg-[#B68855]'>
                <img
                    src={sompod}
                    alt="Card"
                    className='w-full h-full object-cover scale-90 transition-transform duration-500 hover:scale-100'
                />
            </div>

            {/* Right Section */}
            <div className='w-2/3 p-5 prata flex flex-col gap-5'>
                <div className='text-red-800 flex items-center justify-between'>
                    <h1 className='text-3xl font-bold '>Gandharan Buddhist texts</h1>
                    <h1>1st-3rd century BCE</h1>
                </div>
                <div className='max-w-lg'>
                    <p className='text-xl'> The Gandhāran Buddhist texts are the oldest <span className='text-red-800 hover:underline duration-300'>Buddhist</span> manuscripts yet discovered, dating from about the 1st century BCE to 3rd century CE and found in the northwestern outskirts of <span className='text-red-800 hover:underline duration-300'>Pakistan</span>.</p>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <div className='text-red-500 hover:text-red-800 hover:underline duration-300 text-2xl'>Read more <i className="ri-arrow-right-line"></i></div>
                    <div className='text-3xl text-red-800'>
                        <i className="ri-multi-image-line"></i>
                        <i className="ri-bookmark-fill"></i>
                        <i className="ri-share-forward-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchiveCard
