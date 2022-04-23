import Image from 'next/image'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import Link from 'next/link'

function NavBar() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-50 px-5 py-2">
      {/* Logo */}
      <div className="mt-2 shrink-0 cursor-pointer ">
        <Link href="/">
          <Image
            src="/tesla-logo.svg"
            alt="Tesla Logo"
            width={128}
            height={36}
          />
        </Link>
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
