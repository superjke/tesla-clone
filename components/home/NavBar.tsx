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
    <button className=" rounded-full py-2 px-4 text-center text-lg font-semibold lg:hover:bg-gray-500/10">
      {title}
    </button>
  )
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleNavBar = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-50 py-4 px-5">
      {/* Logo */}
      <div className="shrink-0 cursor-pointer">
        <Image src="/tesla-logo.svg" alt="Tesla Logo" width={128} height={36} />
      </div>

      {/* Nav Menu 1 */}
      <div
        className={`absolute left-0 top-16 z-40 flex w-screen flex-col bg-slate-50  transition-all duration-500 ease-in lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:space-x-1 ${
          menuOpen ? 'mt-0' : '-mt-[400px] lg:mt-0'
        }`}
      >
        {navButton('Model S')}
        {navButton('Model 3')}
        {navButton('Model X')}
        {navButton('Model Y')}
      </div>

      {/* Nav Menu 2 */}
      <div className="space-x-1 lg:flex lg:flex-row">
        <div className="hidden lg:flex">{navButton('Shop')}</div>
        <div className="hidden lg:flex">{navButton('Account')}</div>
        <div className="hidden lg:flex">{navButton('Menu')}</div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => toggleNavBar()}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  )
}

export default NavBar
