import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ModelPreview from '../components/home/ModelPreview'
import NavBar from '../components/home/NavBar'
import { models } from '../data/models'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import CloseIcon from '@mui/icons-material/Close'
import { grey } from '@mui/material/colors'
import { IconButton } from '@mui/material'
import useDeviceSize from '../utils/hooks'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, height] = useDeviceSize()
  const isMobile = width < 768

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const menuItems = [
    { name: 'Model S', link: '/' },
    { name: 'Model 3', link: '/' },
    { name: 'Model X', link: '/' },
    { name: 'Model Y', link: '/' },
    { name: 'Existing Inventory', link: '/' },
    { name: 'Used Inventory', link: '/' },
    { name: 'Trade In', link: '/' },
    { name: 'Test Drive', link: '/' },
    { name: 'Charging', link: '/' },
    { name: 'Shop', link: '/' },
    { name: 'Support', link: '/' },
  ]

  return (
    <div className="">
      <Head>
        <title>Tesla Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <SwipeableDrawer
        anchor={'right'}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
      >
        <div className="w-[311px]">
          <div className="flex flex-col items-center space-y-4">
            <div className="fixed top-0 right-0 flex w-[311px] justify-end  bg-white">
              <div className="mt-5 px-5">
                <CloseIcon
                  onClick={toggleMenu}
                  sx={{ fontSize: 30, color: grey[600] }}
                />
              </div>
            </div>

            <ol className="flex flex-col space-y-4 pb-[400px] pt-16">
              {menuItems.map((item) => {
                return (
                  <li key={item.name} className="w-[230px]">
                    <a title={item.name} href={item.link}>
                      <span className=" text-gray-600">{item.name}</span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </SwipeableDrawer>

      <main className="w-full">
        {models.map((m) => (
          <ModelPreview key={m.id} model={m} />
        ))}
        <div className="relative">
          <img
            className="h-screen w-screen object-cover"
            src={
              isMobile
                ? 'https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories'
                : 'https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories'
            }
            alt="Tesla Logo"
          />
          <div className="absolute bottom-3/4 left-1/2 -translate-x-1/2 transform text-center">
            <h1 className="pb-3 text-5xl font-semibold">Accessories</h1>
          </div>
          <div className="absolute bottom-[10rem] left-1/2 -translate-x-1/2 transform text-center">
            <div className="flex">
              <button className="mx-6 w-80 rounded-full bg-gray-800 px-10 py-2 text-xl font-semibold text-white">
                Shop Now
              </button>
            </div>
          </div>
          {/* <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform space-x-8">
            {footerItems.map((item) => (
              <p className="cursor-pointer font-semibold text-gray-500">
                {item}
              </p>
            ))}
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Home
