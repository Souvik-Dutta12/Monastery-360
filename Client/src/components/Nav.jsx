import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='w-full h-20 bg-amber-300 flex justify-evenly items-center text-2xl font-bold'>
      <div className=' h-full '>
        <img src={logo} alt="logo" className=' h-full'/>
      </div>
      <div>
        <li>
            <ul>
                <Link to={'#'}></Link>
            </ul>
        </li>
      </div>
      <div></div>
    </div>
  )
}

export default Nav
