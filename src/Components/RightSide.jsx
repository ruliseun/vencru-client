import React from 'react'
import { Link } from "react-router-dom";
import { PageLinks } from '../Utils/Links'
import Payment from './Billing';
import CardDetails from './CardDetails'; 
import cloud from './Assets/cloud.svg'
import Table from './Table/Table'

const RightSide = () => {
  return (
    <div className='w-full  bg-rightBg w-[100%]  lg:w-rightWidth pl-5 pt-5 overflow-hidden pr-3 '>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-2xl'>Settings</h1>
            <p className='text-textP'>Manage your team an preferences here.</p>
        </div>
        <div className='flex  mt-5 w-buttonsW rounded-l-2xl rounded-r-2xl border-y-2 '>
            <Link to='/details' className='pl-[16px] ml-0 pt-[10px] pb-[10px] border-x-2 rounded-l-2xl bg-leftBg w-[101px] '>My details</Link>
            {PageLinks.map((link,index)=>{
                return(
                    <Link to={link.route} className='pl-[16px] ml-0 pt-[10px] pb-[10px] border-x-2 bg-leftBg '
                    style={{width:link.width + "px"}} key={index}
                    >{link.text}</Link>
                )
                
            })}
            <Link to='/api' className='pl-[16px] ml-0 pt-[10px] pb-[10px] border-x-2 rounded-r-2xl bg-leftBg w-[60px]'>Api</Link>
        </div>
        <div className='mt-5'>
            <Payment />
        </div>
        <div className='mt-5'>
            <CardDetails />
        </div>
        <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-between mr-3'>
            <h1 className='mb-2'>Billing History</h1>
             <button className="flex justify-center items-center w-[50%] lg:w-[150px] bg-[white] border border-[#d0d5dd] px-2 py-3  rounded-xl  bg-gray-300 hover:bg-gray-400">
             <img src={cloud} className="inline-block h-8 w-8 mr-2" alt="Button image" />
              Button Text
            </button>
            
        </div>
        <div className='mt-5'>
            <Table />
        </div>
        </div>
        
        
    </div>
  )
}

export default RightSide