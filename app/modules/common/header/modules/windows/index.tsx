import React from 'react'
import Navigation from './elements/navigation'
import Buttons from './elements/buttons'

const WindowsNavbar = () => {
  return (
    <nav className='flex-between h-25 container'>
        <Navigation />
        <Buttons />
    </nav>
  )
}

export default WindowsNavbar