import React from 'react'
import CVDownload from './elements/cv-download'
import ContactMeButton from './contact-me-button'

const Buttons = () => {
  return (
    <div className='flex-ic gap-3'>
        <ContactMeButton />
        <CVDownload />
    </div>
  )
}

export default Buttons