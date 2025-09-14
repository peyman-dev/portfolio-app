import React from 'react'
import ProfilePicture from './elements/profile-picture'
import IntroductionText from './elements/introduction-text'

const Headline = () => {
  return (
    <div className='space-y-3 md:space-y-9'>
        <ProfilePicture />
        <IntroductionText />
    </div>
  )
}

export default Headline