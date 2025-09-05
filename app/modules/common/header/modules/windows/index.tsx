import React from 'react'
import Navigation from './elements/navigation'
import ContactMeButton from './elements/contact-me-button'

const WindowsNavbar = () => {
  return (
    <nav className='flex-between h-25 container'>
        <Navigation />
        <ContactMeButton />
    </nav>
  )
}

export default WindowsNavbar