import React from 'react'
import image1 from './Assets/images-gallery/avatar1.svg'
import image2 from './Assets/images-gallery/avatar2.svg'
import image3 from './Assets/images-gallery/avatar3.svg'
import image4 from './Assets/images-gallery/avatar4.svg'
import image5 from './Assets/images-gallery/avatar5.svg'
import ImageGallery from './ImagesGallery'


const imagesArray = [image1,image2,image3,image4,image5,image1,image2]

const ImageProp = ({user}) => {
  return (
    <div>
        <ImageGallery numImages={user} images={imagesArray}/>
    </div>
  )
}

export default ImageProp