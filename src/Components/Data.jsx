import React from 'react'
import icon1 from './Assets/home.svg'
import icon2 from './Assets/barchart.svg'
import icon3 from './Assets/layers.svg'
import icon4 from './Assets/check.svg'
import icon5 from './Assets/flag.svg'
import icon6 from './Assets/users.svg'


const DataDetails = [
   {
    icon:icon1,
    text:'Home',
   },
   {
    icon:icon2,
    text:'Dashboard',
   },
   {
    icon:icon3,
    text:'Projects',
    count:10
   },
   {
    icon:icon4,
    text:'Tasks',
   },
   {
    icon:icon5,
    text:'Reporting',
   },
   {
    icon:icon6,
    text:'Users',
   },
]

const Data = () => {
  return (
     <div className="container space-y-4">
      {DataDetails.map((data,index)=>{
        return(
            <div className='flex justify-between items-center'>
            <div key={index} className='flex pt-2 space-x-3  lg:flex-row'>
                <div className='w-[20px] flex justify-start'><img src={data.icon} alt="" /></div>
                <div className=' '>
                    <p className='ml-0'>{data.text}</p>
                </div>
            </div>
            {data.count ? (<div className='flex items-center justify-center h-[20px] w-[20px] bg-rightBg rounded-full text-sm'>{data.count}</div>) : ''}
            </div>
              
            
        )
      })}
    </div>
  )
}

export default Data