import React from 'react'
import Searchbar from './Searchbar'
import ArchiveCard from './ArchiveCard'

const Archives = () => {
  return (
    <div className='w-full h-full  absolute '>
      <Searchbar />

      <div className='w-full h-auto flex flex-col justify-center pl-12'>
        {Array.from({length:5}).map((_,i)=><ArchiveCard />)}
      </div>
    </div>
  )
}

export default Archives
