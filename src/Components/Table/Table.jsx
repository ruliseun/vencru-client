import React from 'react'
import arrow from '../Assets/arrowd.svg'
import checked from '../Assets/checked.svg'
import cloud from '../Assets/cloud.svg'
import {formatPrice} from '../../Utils/helpers'
import ImageProp from '../Images'

const tableData =[
    {
        id:1,
        invoice:'Basic Plan-Dec 2022',
        Amount:10,
        Date:'Dec 1, 2022',
        status:'Paid',
        users:7
    },
    {
        id:2,
        invoice:'Basic Plan-Nov 2022',
        Amount:10,
        Date:'Nov 1, 2022',
        status:'Paid',
        users:6
    },
    {
        id:3,
        invoice:'Basic Plan-Oct 2022',
        Amount:10,
        Date:'Oct 1, 2022',
        status:'Paid',
        users:5
    },
    {
        id:4,
        invoice:'Basic Plan-Sep 2022',
        Amount:10,
        Date:'Sep 1, 2022',
        status:'Paid',
        users:3
    },
    {
        id:5,
        invoice:'Basic Plan-Aug 2022',
        Amount:10,
        Date:'Aug 1, 2022',
        status:'Paid',
        users:4
    },
    {
        id:6,
        invoice:'Basic Plan-Jul 2022',
        Amount:10,
        Date:'Jul 1, 2022',
        status:'Paid',
        users:4
    },
    {
        id:7,
        invoice:'Basic Plan-June 2022',
        Amount:10,
        Date:'June 1, 2022',
        status:'Paid',
        users:3
    },
]


const Table = () => {
  return (
<table className='w-[100%] lg:w-[1096px] bg-[white] shadow-lg rounded-md mb-3'>
  <tr className='bg-rightBg '>
    <th className=' pl-[20px] text-textP text-[12px] '>
        <div className='flex space-x-2'>
        <input type="checkbox" className='appearance-none h-[20px] w-[20px] border-2 rounded-md border-borderC'/>
        <h1>Invoice</h1>
        <img src={arrow} alt="" />
        </div>    
    </th>
    <th className='pl-[12px] py-[16px] text-textP text-[12px] text-left'>Amount</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-[12px] py-[16px] text-textP text-[12px] text-left'>Data</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-[12px] py-[16px] text-textP text-[12px] text-left'>Status</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-[12px] py-[16px] text-textP text-[12px] text-left'>Users on plan</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-[12px] py-[16px] text-textP text-[12px]'></th>
  </tr>
  {tableData.map((data)=>{
    return(
    <tr key={data.id} className='border-b border-borderC' > 
    <td className='px-[16px] py-[24px] w-[229px] lg:w-[495px]'>
        <div className='flex space-x-2'>
            <input type="checkbox" className='appearance-none h-[20px] w-[20px] border-2 rounded-md border-borderC'/>
            <p>{data.invoice}</p>
        </div>
    </td>
    <td className=' px-[16px] py-[24px] w-[127px] text-textP '>USD {(formatPrice(data.Amount))}</td>
    <td className='hidden sm:hidden  lg:table-cell px-[16px] py-[24px] lg:w-[135px] text-textP'>{data.Date}</td>
    <td className='hidden sm:hidden  lg:table-cell px-[16px] py-[24px] w-[103px]'>
        <div className='flex justify-center items-center w-[60px] text-[#3c7b49] rounded-md space-x-1 bg-[#ecfdf3]'>
            <img src={checked} alt="" />
            <p>{data.status}</p>
        </div>
    </td>
    <td className='hidden sm:hidden lg:table-cell px-[16px] py-[24px] lg:w-[172px]'>
        <ImageProp user={data.users}/>
    </td>
     <td className='hidden sm:hidden lg:table-cell lg:py-[24px] w-[72px]'>
        <div className='flex w-[100%] justify-center '><img className='' src={cloud} alt="" /></div>
        
    </td>
  </tr>
    )
  })}
 
 
</table>
  )
}

export default Table