import React from 'react'
import frame from '../assets/Frame 1.png'
import Searchbar from './Searchbar'
import MonaCard from './MonaCard'

const Monastery = () => {
    return (
        <>
        <div className='w-full h-full  absolute'>
            <div className='h-22 flex px-8 border-b border-red-900/10 bg-transparent shadow-md flex-col justify-center gap-0 items-start'>
                <h1 className='prata text-2xl font-bold text-[#0D244B] '>Monastery Management</h1>
                <h1 className='prata text-xl     text-[#0D244B] '>Manage your entries & details about monasteries here </h1>
            </div>
            <Searchbar />
            <div className='w-full h-auto flex flex-col justify-center pl-12'>
                {Array.from({length:5}).map((_,i)=><MonaCard />)}
            </div>
        </div>
        <div className='h-15 w-15 fixed bg-red-600 hover:bg-red-700 duration-300 text-4xl rounded-full text-center flex items-center justify-center cursor-pointer text-amber-50 bottom-10 right-10'><i className="ri-add-line"></i></div>
        </>
    )
}

export default Monastery
