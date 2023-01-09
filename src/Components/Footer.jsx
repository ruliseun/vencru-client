import React from 'react'
import support from './Assets/support.svg'
import settings from './Assets/settings.svg'
import image from './Assets/Image.svg'
import avatar from './Assets/Avatar.svg'
import arrow from './Assets/arrow.svg'


 const Footer = () => {
  return (
   <div className='flex flex-col bg-[white] pt-2 w-full space-y-5 lg:flex'>
    <div className='flex space-x-3 pl-2'>
     <div className='w-[20px] flex justify-start'><img src={support} alt="" /></div>
      <p>Support</p>
    </div>
    <div className='flex space-x-3 bg-rightBg pl-2 px-2 py-2 rounded-lg'>
      <div className='w-[20px] flex justify-start'><img src={settings} alt="" /></div>
      <p>Settings</p>
    </div>
    <div className='mt-3 flex flex-col w-[100%] justify-start items-center bg-rightBg rounded-lg'>
    <div className='pt-5 pb-5 w-[90%] mb-5'> 
      <h3 className='font-semibold text-[14px]'>New features available!</h3>
      <p className='text-[14px] text-[#667085]'>Checkout this new dashboard view.Pages now load faster </p>
      <img className='w-[100%] mt-3' src={image} alt="" />
      <div className='flex space-x-3 mt-2'>
        <p className='text-textP'>Dismiss</p>
        <p className='text-[#7b58cd]'>What's new?</p>
      </div>
      </div>
    </div>
  <div class="border-b border-1 border-borderC " ></div>
  <div className='flex flex-wrap justify-between items-center pb-4 '>
    <div className='flex items-center space-x-2 w-[193px] h-[40px]'>
      <img src={avatar} className='w-[40px] h-[100%]' alt="" />
      <div className='flex flex-col '>
        <h3 className='font-semibold text-[14px]'>Olivia Rhye</h3>
        <p className='text-textP'>olivia@untitledui.com</p>
      </div>   
    </div>
    <img className='w-[20px] h-[20px]' src={arrow} alt="" />

  </div>
   </div>
  )
}
 export default Footer