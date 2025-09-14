import React from 'react'
import CVDownload from './elements/cv-download'
import ContactMeButton from './contact-me-button'

const Buttons = () => {
  return (
    <div className='flex-ic gap-3 text-white! **:[button]:px-4! **:[button]:h-12! **:rounded-xl! **:gap-2! text-sm!'>
        <ContactMeButton />
        <CVDownload />
    </div>
  )
}

export default Buttons