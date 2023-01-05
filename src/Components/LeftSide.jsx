import React from 'react'
import logo from './Assets/Logomark.svg'
import Data from './Data'
import Footer from './Footer'
import InputField from '../Common/InputField'
import search from '../Components/Assets/search.svg'
import Navbar from './NavbarMobile'



const LeftSide = () => {
  return (
    <>
     <div className='flex flex-col w-leftWidth bg-leftBg hidden md:block'>
        <div className='flex space-x-2 items-center pt-3 pl-3'>
        <img src={logo} alt="" />
        <h1 className='text-lg'>Untitled UI</h1>
        </div>
        <div className="container mx-auto px-4 mt-5">
      <InputField width='input--medium' placeholder="Search" searchIcon={search} />
      <div className='mt-2  '>
        <Data />
      </div>
      
    </div>
    <div className='flex flex-col justify-center ml-2 mt-2 w-[90%]'>
        <Footer />
      </div>
     </div>
     <Navbar />
    </> 
  )
}

export default LeftSide