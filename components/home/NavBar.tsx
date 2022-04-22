import Image from 'next/image'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navButton = (
  title: string
): React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> => {
  return (
    <button className="whitespace-nowrap rounded-full py-2 px-4 text-center text-lg font-semibold lg:hover:bg-gray-500/10">
      {title}
    </button>
  )
}

interface IProps {
  menuOpen: boolean
  toggleMenu: Function
}

function NavBar(props: IProps) {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-50/30 py-3 px-5">
      {/* Logo */}
      <Image
        className="shrink-0 cursor-pointer"
        src="/tesla-logo.svg"
        alt="Tesla Logo"
        width={128}
        height={36}
      />

      {/* Nav Menu 1 */}
      <div className="absolute">
        <div className="absolute left-0 top-16 z-40 -mt-[400px] flex w-screen flex-col transition-all duration-500 ease-in lg:static lg:mt-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:space-x-1">
          {navButton('Model S')}
          {navButton('Model 3')}
          {navButton('Model X')}
          {navButton('Model Y')}
        </div>
      </div>

      {/* Nav Menu 2 */}
      <div className="space-x-1 lg:flex lg:flex-row">
        <div className="hidden lg:flex">{navButton('Shop')}</div>
        <div className="hidden lg:flex">{navButton('Account')}</div>
        <div className="hidden lg:flex">{navButton('Menu')}</div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => props.toggleMenu()}
        >
          {props.menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  )
}

export default NavBar
