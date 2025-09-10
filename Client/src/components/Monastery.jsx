import React from 'react'
import frame from '../assets/Frame 1.png'
import Searchbar from './Searchbar'

const Monastery = () => {
    return (
        <div className='w-full h-full b absolute'>
            <div className='h-22 flex px-8 border-b border-red-900/10 bg-transparent shadow-md flex-col justify-center gap-0 items-start'>
                <h1 className='prata text-2xl font-bold text-[#0D244B] '>Monastery Management</h1>
                <h1 className='prata text-xl     text-[#0D244B] '>Manage your entries & details about monasteries here </h1>
            </div>
            <Searchbar />
            <div className='w-full h-auto '></div>
        </div>
    )
}

export default Monastery
