import React from 'react'

const SectionTitle = ({counts = 0}: {counts?: number}) => {
  return (
    <h4 className='text-[32px]'>
        Comments {`(${counts})`}
    </h4>
  )
}

export default SectionTitle