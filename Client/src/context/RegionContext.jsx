import React, { createContext, useContext, useState } from 'react'

const RegionContext = createContext({ selectedRegion: 'East', setSelectedRegion: () => {} })

export const RegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState('East')
  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </RegionContext.Provider>
  )
}

export const useRegion = () => useContext(RegionContext)
