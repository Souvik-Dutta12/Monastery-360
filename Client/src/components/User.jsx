import React from 'react'

const User = () => {
  return (
    <div className='w-[97%] mx-auto cursor-pointer prata max-h-30 bg-transparent border-b border-red-800 overflow-hidden p-3 hover:shadow-2xl transition flex items-center justify-evenly' >
      <div className='flex w-1/4 gap-2 items-center '>
        <div className='w-8 h-8 rounded-full bg-black'></div>
        <div className='flex flex-col '>
          <h1 className='text-xl font-semibold'>Tung Tung Sahur</h1>
          <h1>TungtungSaur@gmail123.com</h1>
        </div>
      </div>
      <div className='flex w-1/4 gap-2 items-center text-sm'>
        <div className='bg-green-400/30 text-green-800 border rounded-md text-center h-5  px-2'>Admin</div>
        <div className='bg-blue-400/30 text-blue-800 border rounded-md text-center h-5  px-2'>Researcher</div>
        <div className='bg-red-400/30 text-red-800 border rounded-md text-center h-5  px-2'>Tourist</div>
      </div>
      <div className='w-1/4 pl-20'>
        <span className='text-sm'>March 4, 2024</span>
      </div>
      <div className='w-1/4 flex items-center justify-between pl-20'>
        <span className='text-sm'>March 4, 2024</span>
        <i className="ri-more-2-line font-bold"></i>
      </div>
    </div>
  )
}

export default User
