import React from 'react'
import { values } from '../../settings'
import Item from './item'

const Items = () => {
  return (
    <section className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2.5'>
        {
            values.map((item) => <Item {...item} key={item.id} />)
        }
    </section>
  )
}

export default Items