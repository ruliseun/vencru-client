import React from 'react';

const ImageGallery = (props) => {
    const images = props.images
    const numImages = props.numImages
    
  return (
   
    <>
    {numImages  <= 5 ?
   ( <div div className="flex flex-row  items-center w-[200px] ml-0">
        {images.slice(0, numImages).map((image, index) => (
        <img src={image} key={index} className="w-[30px] mr-[-10px] h-[30px] ml-[-1px] object-cover rounded-lg" alt="Gallery image" />
      ))}
    </div>): 
    ( <div div className="flex flex-row  items-center w-[200px] ml-0">
        {images.slice(0, 5).map((image, index) => (
        <img src={image} key={index} className="w-[30px] h-[30px] mr-[-10px] object-cover rounded-full" alt="Gallery image" />
      ))}
    <div className=" w-[30px] h-[30px] rounded-full bg-rightBg text-center text-white ">
         <p className='flex justify-center items-center'>+{numImages -  5}</p> 
     </div>

    </div>)
    }
    </>
  );
};

export default ImageGallery;
