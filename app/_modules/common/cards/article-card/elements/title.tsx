import React from 'react'

const Title = ({title}: {title: string}) => {
  return (
    <h5 className='font-Inter-SemiBold!'>
        {title || "Loading ..."}
    </h5>
  )
}

export default Title