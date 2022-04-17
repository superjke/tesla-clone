import Image from 'next/image'
import React from 'react'

const navButton = (
  title: string
): React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> => {
  return (
    <button className="whitespace-nowrap rounded-xl px-4 py-1 text-center text-lg font-semibold hover:bg-gray-500/20">
      {title}
    </button>
  )
}

function NavBar() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-10 py-2">
      {/* Logo */}
      <div className="mt-2 shrink-0 cursor-pointer ">
        <Image src="/tesla-logo.svg" alt="Tesla Logo" width={128} height={36} />
      </div>

      {/* Nav Menu 1 */}
      <div className=" flex space-x-4 ">
        {navButton('Model S')}
        {navButton('Model 3')}
        {navButton('Model X')}
        {navButton('Model Y')}
      </div>

      {/* Nav Menu 2 */}
      <div className="flex space-x-4">
        <div className="">{navButton('Shop')}</div>
        <div className="">{navButton('Account')}</div>
        <div>{navButton('Menu')}</div>
      </div>
    </header>
  )
}

export default NavBar
