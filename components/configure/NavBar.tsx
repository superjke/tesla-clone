import Image from 'next/image'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language'

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
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-50 px-10 py-2">
      {/* Logo */}
      <div className="mt-2 shrink-0 cursor-pointer ">
        <Image src="/tesla-logo.svg" alt="Tesla Logo" width={128} height={36} />
      </div>

      {/* Nav Menu 2 */}
      <button className="space-x-2 whitespace-nowrap rounded-full px-3 py-2 text-center text-lg font-semibold hover:bg-gray-500/5">
        <LanguageIcon />
        <span>GB</span>
      </button>
    </header>
  )
}

export default NavBar