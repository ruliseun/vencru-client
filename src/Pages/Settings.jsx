import React from 'react'
import LeftSide from '../Components/LeftSide'
import RightSide from '../Components/RightSide'

const Settings = () => {
  return (
    <div className='flex flex-col lg:flex-row mb-3'>
        <LeftSide /> 
        <RightSide />
    </div>
  )
}

export default Settings