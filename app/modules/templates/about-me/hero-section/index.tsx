import React from 'react'
import Headline from './elements/headline'
import MyPicture from './elements/my-picture'

const HeroSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-y-10 container md:max-w-[800px] my-10 md:my-[100px]'>
      <MyPicture />
      <Headline />
    </section>
  )
}

export default HeroSection