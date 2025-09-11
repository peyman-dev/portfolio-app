import React, { ReactNode } from 'react'
import { services } from '../../settings'
import Item from './item'

const Steps = () => {
  return (
    <div className='space-y-10 mt-12 *:py-5'>
        {
            services.map((item, i) => (
                <Item key={i} {...item}/>
            ))
        }
    </div>
  )
}

export default Steps