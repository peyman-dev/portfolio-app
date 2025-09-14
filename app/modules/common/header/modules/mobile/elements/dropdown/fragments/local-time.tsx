"use client"
import useLocalTime from '@/app/core/hooks/use-local-time'
import React from 'react'

const LocalTime = () => {
    const myTime = useLocalTime()
  return (
    <div className='**:max-h-5!'>
        <p className='text-xs text-gray-400!'>
            Zanjan, Iran.
        </p>
        <p>
            {myTime}
        </p>
    </div>
  )
}

export default LocalTime