import React from 'react'
import Searchbar from './Searchbar'
import ArchiveCard from './ArchiveCard'
import { useRegion } from '../context/RegionContext'
import { regionToArchives } from '../data/tourData'

const Archives = () => {
  const { selectedRegion } = useRegion()
  const items = regionToArchives?.[selectedRegion] || []

  return (
    <div className='w-full h-full  absolute mt-10 md:mt-0'>
      <Searchbar />

      <div className='px-12 pt-2 mt-2'>
        <h2 className='prata text-2xl font-bold text-red-900'>Digital Archives <span className='text-red-900/70 text-base font-normal'>( {selectedRegion} • {items.length} )</span></h2>
      </div>

      <div className='w-full h-auto flex flex-col justify-center px-4 md:px-0 md:pl-12'>
        {items.length > 0 ? (
          items.map((a, i) => (
            <ArchiveCard key={a.id || i} title={a.title} period={a.period} image={a.img} images={a.images} description={a.description} />
          ))
        ) : (
          <div className='w-[75%] mb-3 bg-amber-50 border border-amber-200 rounded-xl p-6 text-red-900'>
            No archives available for this region.
          </div>
        )}
      </div>
    </div>
  )
}

export default Archives