import React from 'react';

const RadioButton = (props) => {
  return (
    <div className='flex flex-col text-textP'>
    <label className='flex items-center space-x-2 '>
      <div className={`${props.id === 1 ? "border-2 border-borderC" : props.id === 2 ? "border border-[purple]" : ''} w-[15px] h-[15px] bg-white rounded-full flex items-center justify-center `}>
          <div className={`${props.id === 1 ?'bg-[white]' : props.id === 2 ? 'bg-[purple]' : 'bg-[white]'}  rounded-full  w-[7px] h-[7px]`} ></div>
      </div>
      <h1 className='font-bold text-[17px]'>{props.label}</h1> 
    </label>
    {props.children}
    
    </div>
  );
}

export default RadioButton;
