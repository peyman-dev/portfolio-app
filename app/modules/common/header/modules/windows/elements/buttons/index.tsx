import React from 'react'
import CVDownload from './elements/cv-download'
import ContactMeButton from './elements/contact-me'

const Buttons = () => {
  return (
    <div className='flex-ic gap-3'>
        <ContactMeButton />
        <CVDownload />
    </div>
  )
}

export default Buttons