"use client"
import React from 'react'
import WindowsNavbar from './modules/windows'
import MobileNavbar from './modules/mobile'

const Header = () => {
  return (
    <header>
        <WindowsNavbar />
        <MobileNavbar />
    </header>
  )
}

export default Header