import React from 'react'
import arrow from '../Assets/arrowd.svg'
import checked from '../Assets/checked.svg'
import cloud from '../Assets/cloud.svg'
import {formatPrice} from '../../Utils/helpers'

const tableData =[
    {
        id:1,
        invoice:'Basic Plan-Dec 2022',
        Amount:10,
        Date:'Dec 1, 2022',
        status:'Paid',
        users:'images'
    },
    {
        id:2,
        invoice:'Basic Plan-Nov 2022',
        Amount:10,
        Date:'Nov 1, 2022',
        status:'Paid',
        users:'images'
    },
    {
        id:3,
        invoice:'Basic Plan-Oct 2022',
        Amount:10,
        Date:'Oct 1, 2022',
        status:'Paid',
        users:'images'
    },
    {
        id:4,
        invoice:'Basic Plan-Sep 2022',
        Amount:10,
        Date:'Sep 1, 2022',
        status:'Paid',
        users:'images'
    },
    {
        id:5,
        invoice:'Basic Plan-Aug 2022',
        Amount:10,
        Date:'Aug 1, 2022',
        status:'Paid',
        users:'images'
    },
    {
        id:6,
        invoice:'Basic Plan-Jul 2022',
        Amount:10,
        Date:'Jul 1, 2022',
        status:'Paid',
        users:'images'
    },
    {
        id:7,
        invoice:'Basic Plan-June 2022',
        Amount:10,
        Date:'June 1, 2022',
        status:'Paid',
        users:'images'
    },
]


const Table = () => {
  return (
<table className='lg:w-[70rem] bg-[white] shadow-md rounded-md'>
  <tr className='bg-rightBg '>
    <th className=' pl-2 text-left '>
        <div className='flex space-x-2'>
        <input type="checkbox"  />
        <h1 >Invoice</h1>
        <img src={arrow} alt="" />
        </div>    
    </th>
    <th className='pl-2 py-2 text-left'>Amount</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-2 py-2 text-left'>Data</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-2 py-2 text-left'>Status</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-2 py-2 text-left'>Users on plan</th>
    <th className='hidden  sm:hidden  lg:table-cell pl-2 py-2 text-left'></th>
  </tr>
  {tableData.map((data)=>{
    return(
    <tr key={data.id} > 
    <td className='px-2 py-2 w-[30%]'>
        <div className='flex space-x-2'>
            <input type="checkbox"  />
            <p>{data.invoice}</p>
        </div>
    </td>
    <td className=' px-2 py-2 w-[20%] '>{formatPrice(data.Amount)}</td>
    <td className='hidden sm:hidden  lg:table-cell px-2 py-2 w-[10%]'>{data.Date}</td>
    <td className='hidden sm:hidden  lg:table-cell px-2 py-2 w-[10%]'>
        <div className='flex justify-center items-center w-[60px] text-[#3c7b49] rounded-md space-x-1 bg-[#ecfdf3]'>
            <img src={checked} alt="" />
            <p>{data.status}</p>
        </div>
    </td>
    <td className='hidden sm:hidden lg:table-cell px-2 py-2 w-[20%]'>{data.users}</td>
     <td className='hidden sm:hidden lg:table-cell py-2 w-[10%]'>
        <div className='flex w-[100%] justify-center '><img className='' src={cloud} alt="" /></div>
        
    </td>
  </tr>
    )
  })}
 
 
</table>
  )
}

export default Table