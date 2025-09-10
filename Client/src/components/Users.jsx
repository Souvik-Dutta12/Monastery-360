import React from 'react'
import Searchbar from './Searchbar'
import User from './User'

const Users = () => {
    return (
        <div className='w-full h-full  absolute'>
            <div className='h-22 flex px-8 border-b border-red-900/10 bg-transparent shadow-md flex-col justify-center gap-0 items-start'>
                <h1 className='prata text-2xl font-bold text-[#0D244B] '>User Management</h1>
                <h1 className='prata text-xl     text-[#0D244B] '>Manage your team members & account permissions here </h1>
            </div>
            <Searchbar />
            <div className='w-full prata text-xl font-semibold h-12 mt-5 flex items-center px-14 gap-63 text-[#0D244B]'>
                <span className='ml-10'>Username</span>
                <span className='-ml-2'>Access</span>
                <span className='-ml-10'>Last Active</span>
                <span className='-ml-20'>Date added</span>
            </div>
            <div className='w-[75%] min-h-[65vh] mt-3 bg-white/60 ml-12'>
                <div className='w-full h-auto flex flex-col justify-center '>
                {Array.from({length:4}).map((_,i)=><User />)}
            </div>
            </div>
        </div>
    )
}

export default Users
