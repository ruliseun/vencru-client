import React from 'react'
import logo from './Assets/Logomark.svg'
import harmburger from './Assets/hambuger.svg'

const Navbar = () => {
  return (
    <nav class="block md:hidden bg-[white] text-white h-[70px] flex items-center justify-between px-4">
     <div className='flex space-x-2 items-center pt-3 pl-1'>
        <img src={logo} alt="" />
        <h1 className='text-lg'>Untitled UI</h1>
        </div>
  
  <div >
    <button class="px-3 py-2 rounded-lg text-gray-100 focus:outline-none text-[purple]">
     
      <img src={harmburger} alt="" />
    </button>
  </div>
</nav>

  )
}

export default Navbar