import React from 'react';


const SIZES = ["input--large", "input--medium","input--extra-large"]
const InputField = (props) => {
  const inputFieldSize = SIZES.includes(props.width) ? props.width : SIZES[2]
  return (
    <div className="relative rounded-md ">
     <div className="absolute inset-y-0 flex left-0 pl-3 items-center pointer-events-none ">    
        <img src={props.searchIcon} alt=""/>
      </div>
      <input
        type="search"
        className={`${inputFieldSize} h-${props.height} border border-[#d6dae1] pl-[40px] form-input py-3 px-3 block  rounded-md placeholder-gray-500 `}
        placeholder={props.placeholder}
      />
     
    </div>
  );
};

export default InputField;
