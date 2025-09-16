import React from 'react'
import Item from './item'
import { achievements } from '../../../../settings'

const Achievements = () => {
  return (
    <div className='grow *:w-1/2 flex-between'>
      {achievements.map((item ,i ) => <Item {...item} key={item.id}/>)}
    </div>
  )
}

export default Achievements