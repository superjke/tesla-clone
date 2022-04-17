import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ModelPreview from '../components/home/ModelPreview'
import NavBar from '../components/home/NavBar'
import { models } from '../data/models'

const footerItems = [
  'Legal',
  'Recalls',
  'Contact',
  'Careers',
  'News',
  'Engage',
  'Locations',
]

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tesla Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        {models.map((m) => (
          <ModelPreview modelName={m.name} url={m.url} />
        ))}
        <div className="relative h-screen">
          <img
            className="h-full w-full object-cover"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories"
            alt="Tesla Logo"
          />
          <div className="absolute bottom-3/4 left-1/2 -translate-x-1/2 transform text-center">
            <h1 className="pb-3 text-5xl font-semibold">Accessories</h1>
          </div>
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 transform text-center">
            <div className="flex">
              <button className="mx-6 w-80 rounded-full bg-gray-800 px-10 py-2 text-xl font-semibold text-white">
                Shop Now
              </button>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform space-x-8">
            {footerItems.map((item) => (
              <p className="cursor-pointer font-semibold text-gray-500">
                {item}
              </p>
            ))}
          </div>
        </div>
      </main>

      {/* <footer>
        <div className="flex">
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </footer> */}
    </div>
  )
}

export default Home
