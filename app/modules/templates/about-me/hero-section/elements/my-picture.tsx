import React from 'react'
import MyImg from "@/public/images/my-picture.jpg"
import Image from 'next/image'

const MyPicture = () => {
  return (
    <div>
        <Image 
            src={MyImg.src}
            width={360}
            height={360}
            className='object-cover size-fit rounded-full'
            alt='Peyman Ahmadi'
        />
    </div>
  )
}

export default MyPicture