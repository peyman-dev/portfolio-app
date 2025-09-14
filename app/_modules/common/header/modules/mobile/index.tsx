import React from 'react'
import Logo from './elements/logo'
import DropdownMenu from './elements/dropdown'

const MobileNavbar = () => {
  return (
    <nav className='flex-between h-20 container'>
        <Logo />
        <DropdownMenu />
    </nav>
  )
}

export default MobileNavbar