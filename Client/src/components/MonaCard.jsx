import React from 'react'

const MonaCard = () => {
    return (
        <div className='w-[75%] mb-3 cursor-pointer max-h-[65vh] bg-amber-50 shadow-xl border border-red-800 overflow-hidden p-7 hover:shadow-2xl transition mt-5 flex'>
            {/* Left Section */}
            <div className='w-1/3 h-full bg-[#0D244B]'>
                <img
                    src='/card.png'
                    alt="Card"
                    className='w-full h-full object-cover scale-90 transition-transform duration-500 hover:scale-100'
                />
            </div>

            {/* Right Section */}
            <div className='w-2/3 p-5 prata flex flex-col gap-5'>
                <h2 className='text-4xl font-bold text-[#0D244B]'>Lachung Monastery</h2>
                <div className='flex flex-col gap-1'>
                    <p className=' text-[#0D244B]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae?</p>
                <p className=' text-[#0D244B]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam dignissimos, tempore velit molestias tenetur libero recusandae, quidem unde exercitationem eligendi. Odio corporis neque, beatae vitae in perspiciatis assumenda molestiae!
                </p>
                </div>
                <div className='flex items-center justify-between mt-3 '>
                    <div className='flex gap-5'>
                        <button className='w-10 h-10  cursor-pointer text-center flex items-center justify-center'><img src='/group.png' alt="" /></button>
                    <button className='w-10 h-10  cursor-pointer text-center flex items-center justify-center'><img src='/material.png' alt="" /></button>
                    <button className='w-10 h-10  cursor-pointer text-center flex items-center justify-center'><img src='/remove.png' alt="" /></button>
                    </div>
                    <div className='flex items-center justify-center text-xl text-red-600 hover:text-red-800 duration-300 '>More<i className="ri-arrow-right-line"></i></div>
                    
                </div>
            </div>
        </div>

    )
}

export default MonaCard
