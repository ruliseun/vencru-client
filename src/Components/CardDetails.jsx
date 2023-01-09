import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../Common/Card'
import visa from './Assets/visa.svg'
import master from './Assets/master.svg'
import checked from './Assets/images-gallery/checked.svg'



const details =[
  {
    id:1,
    image:visa,
    text1:'Visa ending in 1234',
    text2:'Expiry 06/2024',
    color: "cardBg"

  },
  {
    id:2,
    image:master,
    text1:'MasterCard ending in 1234',
    text2:'Expiry 06/2024',
    color: "cardBg"
  }
]


const CardDetails = () => {
  
  
  const bgWhite = 'bg-[white] flex justify-between  pl-3 pt-1 pr-3 w-[98%]  rounded-lg overflow-hidden'
  const bgGray = 'bg-[#f9f5ff] flex justify-between  pl-3 pt-1 pr-3 w-[98%]  rounded-lg overflow-hidden'
  const [background, setBackground] = useState(bgWhite);
  const [background1, setBackground1] = useState(bgWhite)
  const [clicked, setClicked] = useState(false)
  
   const handleClick = (id) => {
    if(clicked === false){
      setClicked(true)
      setBackground(bgGray);
    }else if(clicked === true){
      setClicked(false)
      setBackground(bgWhite);
    }
   }


    const handleClick1 =()=>{
      if(clicked === false){
        setClicked(true)
         setBackground1(bgGray);
      }
      else if(clicked === true){
        setClicked(false)
        setBackground1(bgWhite);
      }
    }
    
      
  
  return (
    <div className='flex flex-col lg:flex-row '>
        <div className='flex flex-col w-full mb-2 lg:w-[30%]'>
            <h1>Card details</h1>
            <p className='text-textP'>Select default payment method</p>
        </div>

        <div className='flex flex-col w-full space-y-3 lg:w-[70%]'>
        {details.map((data)=>{
          return(
            <>
            {data.id === 1 && <div key={data.id} className={`${background} border border-[#d0d5dd] w-[100%]`}>
              <div className='flex space-x-3 '>
                <img src={data.image} alt="card image" className="h-[30px] w-[40px] " />
                <div className={`${clicked ? 'text-[purple] border-[purple]': 'text-[#101828]'} flex flex-col`}>
                    <p className="text-[18px] font-medium">{data.text1}</p>
                    <p className="text-[16px] font-normal">{data.text2}</p>
                  <div className='flex mt-2 space-x-2'>
                    <p>Set as default</p>
                    <Link to='/edit'>Edit</Link>
                  </div>
                </div>
              </div>
              <div className={`${clicked ? 'bg-[purple]': 'bg-[white]'}  w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-borderC`} onClick={(e)=>handleClick(data.id)}>
                <img src={checked} className="" />
              </div>
               
            </div>}
            {data.id ===2 && 
            <div key={data.id}  className={`${background1} border border-[#d0d5dd] w-[100%]`}>
              <div className='flex space-x-3 '>
                <img src={data.image} alt="card image" className="h-[30px] w-[40px] " />
                <div className='flex flex-col'>
                    <p className="">{data.text1}</p>
                    <p className="">{data.text2}</p>
                  <div className='flex mt-2 space-x-2'>
                    <p>Set as default</p>
                    <Link to='/edit'>Edit</Link>
                  </div>
                </div>
              </div>
               
               <div className={`${!clicked ? 'bg-[purple]': 'bg-[white]'}  w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-borderC`} onClick={(e)=>handleClick1(data.id)}>
                <img src={checked} className="" />
              </div>
                              
            </div>
            }
            </>
          )
        })}
            <Link to='/' className='flex items-center text-[15px] text-textP space-x-2'>
              <span className='text-2xl'>+</span>
              <h1>Add new payment method</h1>
            </Link>
        </div>
        
    </div>
  )
}

export default CardDetails