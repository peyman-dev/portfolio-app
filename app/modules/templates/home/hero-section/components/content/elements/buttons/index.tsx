import React from 'react'
import TalkToMe from './components/talk-to-me'
import SeeMyWorks from './components/see-my-works'

const Buttons = () => {
  return (
    <div className='flex-ic *:rounded-xl!  gap-5 *:h-12! *:flex-center! *:gap-2!'>
        <TalkToMe />
        <SeeMyWorks />
    </div>
  )
}

export default Buttons