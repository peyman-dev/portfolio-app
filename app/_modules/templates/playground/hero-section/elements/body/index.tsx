import SocialMedias from '@/app/_modules/common/social-medias'
import React from 'react'
import Caption from './caption'

const Body = () => {
  return (
    <div className='space-y-7'>
        <Caption />
        <SocialMedias />
    </div>
  )
}

export default Body