import React, { createContext, useContext } from 'react'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children })=>{
  const value = {};
  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = ()=>{
  return useContext(AppContext);
}