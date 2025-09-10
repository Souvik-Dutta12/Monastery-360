import React from 'react'
import Searchbar from './Searchbar'
import increase from '../assets/increase.png'

const Analytics = () => {
  return (
    <div className='w-full h-full  absolute '>
      <Searchbar />
      <div className='w-full prata flex  gap-3 px-8 mt-5 '>
        {
          Array.from({length:4}).map((_,i)=>(
            <div className='w-85 h-40 p-3 shadow-xl bg-amber-100 border flex flex-col items-start justify-evenly border-amber-800'>
          <h1 className='text-lg '>Total page views</h1>
          <div className='flex items-center justify-between  w-full'>
            <span className='text-3xl'>4,56,578</span>
            <div className='flex items-center justify-center gap-1 bg-amber-700/50 border p-1 rounded-md border-amber-800'>
              <img src={increase} alt="" />
              24.3%
            </div>
          </div>
          <p>You made and extra <span className='text-red-500'>1398</span> this year</p>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Analytics
