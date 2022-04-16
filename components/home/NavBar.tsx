import Image from 'next/image'
import React from 'react'

const button = (
  title: string
): React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> => {
  return (
    <button className="rounded-xl px-4 py-1 font-semibold hover:bg-gray-500/5">
      {title}
    </button>
  )
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 mx-8 mt-4 flex justify-between">
      {/* Logo */}
      <Image src="/tesla-logo.svg" alt="Tesla Logo" width={120} height={24} />

      {/* Nav Menu 1 */}
      <div className="space-x-1">
        {button('Model S')}
        {button('Model 3')}
        {button('Model X')}
        {button('Model Y')}
      </div>

      {/* Nav Menu 2 */}
      <div className="">
        {button('Model S')}
        {button('Account')}
        {button('Menu')}
      </div>
    </header>
  )
}

export default NavBar
