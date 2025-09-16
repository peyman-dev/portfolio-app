import React from 'react'
import Headline from './elements/headline'
import Gallery from './elements/headline/fragments/gallery'

const Services = () => {
  return (
    <section className='flex *:w-full lg:flex-row flex-col lg:*:w-1/2 gap-20'>
        <Headline />
        <Gallery />
    </section>
  )
}

export default Services