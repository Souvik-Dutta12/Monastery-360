import React, { useState, useMemo } from 'react'
import Searchbar from './Searchbar'
import MonaCard from './MonaCard'
import { useRegion } from '../context/RegionContext'
import { regionToMonasteries, regions } from '../data/tourData'

const Monastery = () => {
    const { selectedRegion } = useRegion()
    const list = regionToMonasteries?.[selectedRegion] || []

    // Add Monastery modal state
    const [openAdd, setOpenAdd] = useState(false)
    const [formRegion, setFormRegion] = useState(selectedRegion)
    const [formName, setFormName] = useState('')
    const [formAbout, setFormAbout] = useState('')
    const [formLocation, setFormLocation] = useState('')
    const [coverFile, setCoverFile] = useState(null)
    const [galleryFiles, setGalleryFiles] = useState([])

    const coverPreview = useMemo(() => coverFile ? URL.createObjectURL(coverFile) : '', [coverFile])
    const galleryPreviews = useMemo(() => galleryFiles.map(f => URL.createObjectURL(f)), [galleryFiles])

    const resetForm = () => {
        setFormRegion(selectedRegion)
        setFormName('')
        setFormAbout('')
        setFormLocation('')
        setCoverFile(null)
        setGalleryFiles([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Temporary: just log; integrate persistence as needed
        console.log({
            region: formRegion,
            name: formName,
            about: formAbout,
            location: formLocation,
            cover: coverFile,
            images: galleryFiles
        })
        alert('Monastery captured. Hook this up to your data store to persist.')
        setOpenAdd(false)
        resetForm()
    }

    return (
        <>
        <div className='w-full h-full  absolute'>
            <div className='h-22 flex px-8 border-b border-red-900/10 bg-transparent shadow-md flex-col justify-center gap-0 items-start'>
                <h1 className='prata text-2xl font-bold text-[#0D244B] '>Monastery Management</h1>
                <h1 className='prata text-xl     text-[#0D244B] '>Manage your entries & details about monasteries here </h1>
            </div>
            <Searchbar />
            <div className='w-full h-auto flex flex-col justify-center pl-12'>
                {list.length > 0 ? (
                  list.map((m, i) => (
                    <MonaCard
                      key={m.id || i}
                      name={m.name}
                      cover={m.cover}
                      about={m.about}
                      location={m.location}
                      images={m.images}
                    />
                  ))
                ) : (
                  Array.from({length:5}).map((_,i)=><MonaCard key={i} />)
                )}
            </div>
        </div>
        <div onClick={()=>setOpenAdd(true)} className='h-15 w-15 fixed bg-red-600 hover:bg-red-700 duration-300 text-4xl rounded-full text-center flex items-center justify-center cursor-pointer text-amber-50 bottom-10 right-10'><i className="ri-add-line"></i></div>

        {openAdd && (
          <div className='fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
            <div className='w-full max-w-4xl h-[90vh] rounded-2xl border border-amber-200 bg-amber-50 shadow-2xl overflow-hidden flex flex-col'>
              <div className='flex items-center justify-between px-5 py-4 border-b border-amber-200'>
                <div>
                  <h3 className='prata text-2xl text-red-900'>Add Monastery</h3>
                  <div className='text-red-900/70 text-sm'>Upload images and enter details, then save</div>
                </div>
                <button onClick={() => { setOpenAdd(false); resetForm() }} className='p-2 rounded hover:bg-amber-100 text-red-900' aria-label='Close'>
                  <i className='ri-close-line text-2xl'></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} className='flex-1 overflow-y-auto px-5 py-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <div className='grid grid-cols-1 gap-3'>
                      <label className='text-sm text-red-900'>Region</label>
                      <select value={formRegion} onChange={(e)=>setFormRegion(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900'>
                        {(regions || ['East','West','South','North']).map(r => (<option key={r} value={r}>{r}</option>))}
                      </select>
                      <label className='text-sm text-red-900'>Name</label>
                      <input value={formName} onChange={(e)=>setFormName(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Monastery name' />
                      <label className='text-sm text-red-900'>About</label>
                      <textarea rows={5} value={formAbout} onChange={(e)=>setFormAbout(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='30–35 words about the monastery'></textarea>
                      <label className='text-sm text-red-900'>Location</label>
                      <input value={formLocation} onChange={(e)=>setFormLocation(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='City, Region, Country' />
                    </div>
                  </div>

                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <div className='grid grid-cols-1 gap-3'>
                      <label className='text-sm text-red-900'>Cover Image</label>
                      <input type='file' accept='image/*' onChange={(e)=>setCoverFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)} className='text-red-900' />
                      {coverPreview && (
                        <div className='rounded-lg overflow-hidden border border-amber-200 h-40'>
                          <img src={coverPreview} alt='Cover preview' className='w-full h-full object-cover' />
                        </div>
                      )}
                      <label className='text-sm text-red-900'>Gallery Images</label>
                      <input type='file' accept='image/*' multiple onChange={(e)=>setGalleryFiles(e.target.files ? Array.from(e.target.files) : [])} className='text-red-900' />
                      {galleryPreviews.length > 0 && (
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                          {galleryPreviews.map((src, i) => (
                            <div key={i} className='rounded-lg overflow-hidden border border-amber-200 h-24'>
                              <img src={src} alt={`Preview ${i+1}`} className='w-full h-full object-cover' />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>

              <div className='px-5 py-4 border-t border-amber-200 flex items-center justify-end gap-2'>
                <button onClick={() => { setOpenAdd(false); resetForm() }} className='px-4 py-2 rounded-lg border border-amber-200 text-red-900 hover:bg-amber-100'>Cancel</button>
                <button onClick={handleSubmit} className='px-5 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-amber-100'>Save</button>
              </div>
            </div>
          </div>
        )}
        </>
    )
}

export default Monastery
