import React from 'react'
import NextImage from 'next/image'

const Image = () => {
  return (
    <div className='flex-center overflow-hidden! h-full '>
        <NextImage 
            src={"/images/dev.png"}
            alt='Peyman Ahmadi | Software Developer (Front-End)'
            width={340}
            height={340}
            className='rounded-2xl object-cover'
        />
    </div>
  )
}

export default Image