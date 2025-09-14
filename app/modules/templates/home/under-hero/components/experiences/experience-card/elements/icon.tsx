import Image from 'next/image'
import React from 'react'

const Icon = ({src}: {src: string}) => {
  return (
    <div className='size-[58px] flex-center bg-white! rounded-xl!'>
        <Image 
            width={32}
            height={32}
            alt='Company Logo'
            src={src}
            objectFit='cover'
        />
    </div>
  )
}

export default Icon