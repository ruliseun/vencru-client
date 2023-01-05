import React from 'react';
import { Link } from 'react-router-dom';


const CardStyles = [
  "cardBg",
  "cardBgN",
 
]
const Card = (props) => {
  const cardStyle = CardStyles.includes(props.background) ? props.background : CardStyles[0]
  return (
    <div className={`${cardStyle}  flex justify-between  pl-3 pt-1 pr-3 w-[98%]  rounded-lg overflow-hidden`}>
      <div className='flex space-x-3 '>
         <img src={props.image} alt="card image" className="h-[30px] w-[40px] " />
        <div className='flex flex-col'>
        <p className="">{props.text1}</p>
        <p className="">{props.text2}</p>
        <div className='flex mt-2 space-x-2'>
          <p>Set as default</p>
          <Link to='/edit'>Edit</Link>
        </div>
          </div>
      </div>
      <div><input type="checkbox"
      onClick={props.onClick}

        /></div>
      
      
    </div>
  );
}

export default Card;
