import React from 'react';

const RadioButton = (props) => {
  return (
    <div className='flex flex-col text-textP'>
    <label className='flex items-center space-x-2'>
      <input className='h-5 w-5' type="radio" value={props.value} />
      <h1 className='font-bold text-[17px]'>{props.label}</h1> 
    </label>
    {props.children}
    
    </div>
  );
}

export default RadioButton;
