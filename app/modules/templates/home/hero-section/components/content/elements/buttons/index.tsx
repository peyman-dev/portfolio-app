import React from 'react'
import TalkToMe from './components/talk-to-me'
import SeeMyWorks from './components/see-my-works'

const Buttons = () => {
  return (
    <div className='flex-ic *:rounded-xl! gap-2 md:gap-5  md:justify-start justify-center *:h-12! *:flex-center! *:gap-2!'>
        <TalkToMe />
        <SeeMyWorks />
    </div>
  )
}

export default Buttons