import React from 'react'
import Logo from './elements/logo'
import DropdownMenu from './elements/dropdown'

const MobileNavbar = () => {
  return (
    <nav className='flex-between h-20 container lg:hidden lg:invisible'>
        <Logo />
        <DropdownMenu />
    </nav>
  )
}

export default MobileNavbar