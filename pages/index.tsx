import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const navButton = (
  title: string
): React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> => {
  return (
    <button className="rounded-xl px-4 py-1 text-lg font-semibold hover:bg-gray-500/20">
      {title}
    </button>
  )
}

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tesla Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50">
        <div className="flex items-center justify-between px-12 py-2">
          {/* Logo */}
          <div className="cursor-pointer">
            <Image
              src="/tesla-logo.svg"
              alt="Tesla Logo"
              width={128}
              height={36}
            />
          </div>

          {/* Nav Menu 1 */}
          <div className="invisible space-x-8 lg:visible">
            {navButton('Model S')}
            {navButton('Model 3')}
            {navButton('Model X')}
            {navButton('Model Y')}
          </div>

          {/* Nav Menu 2 */}
          <div className="flex space-x-4">
            <div className="invisible lg:visible">{navButton('Shop')}</div>
            <div className="invisible lg:visible">{navButton('Account')}</div>
            <div>{navButton('Menu')}</div>
          </div>
        </div>
      </header>

      <main>
        <div className="-mt-16">
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
            alt="Tesla Logo"
          />
        </div>
        <div>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
            alt="Tesla Logo"
          />
        </div>
        <div>
          <img
            src=" https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD"
            alt="Tesla Logo"
          />
        </div>
        <div>
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD"
            alt="Tesla Logo"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
