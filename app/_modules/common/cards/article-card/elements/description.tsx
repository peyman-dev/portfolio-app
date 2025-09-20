import React from 'react'

const Description = ({content}: {content: string}) => {
  return (
    <p className='text-sm text-[#808080] line-clamp-3'>
        {content}
    </p>
  )
}

export default Description