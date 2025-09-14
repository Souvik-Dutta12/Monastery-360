import React from 'react'
import Searchbar from './Searchbar'
import User from './User'

const Users = () => {
    return (
        <div className='w-full h-full  absolute'>
            <div className='h-22 flex px-4 sm:px-6 pl-15 md:pl-0 lg:px-8 border-b border-red-900/10 bg-transparent shadow-md flex-col justify-center gap-0 items-start'>
                <h1 className='prata text-2xl font-bold text-[#0D244B] '>User Management</h1>
                <h1 className='prata text-xl text-[#0D244B] '>Manage your team members & account permissions here </h1>
            </div>
            <Searchbar />
            <div className='w-full hidden md:flex prata sm:flex text-xl font-semibold h-12 mt-5  items-center px-14 gap-63 text-[#0D244B]'>
                <span className='ml-10'>Username</span>
                <span className='-ml-2'>Access</span>
                <span className='-ml-10'>Last Active</span>
                <span className='-ml-20'>Date added</span>
            </div>
            <div className='w-full md:w-[75%] h-auto md:min-h-[65vh] mt-0 md:mt-3 bg-white/60 ml-0 md:ml-12 '>
                <div className='w-full h-auto flex flex-col justify-center '>
                {Array.from({length:4}).map((_,i)=><User />)}
            </div>
            </div>
        </div>
    )
}

export default Users
