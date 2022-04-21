import Link from 'next/link'
import React, { useState } from 'react'
import { IModel } from '../../types/models'
import useDeviceSize from '../../utils/hooks'
import useWindowDimensions from '../../utils/hooks'

interface IProps {
  model: IModel
}

function ModelPreview(props: IProps) {
  const [width, height] = useDeviceSize()
  const isMobile = width < 768

  return (
    <div className="relative h-screen">
      <img
        className="h-screen w-screen object-cover lg:object-cover"
        src={
          !isMobile
            ? props.model.mainPreviewUrl
            : 'https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD'
        }
        alt="Tesla Logo"
      />
      <div className="absolute bottom-3/4 left-1/2 -translate-x-1/2 transform text-center">
        <h1 className="pb-3 text-5xl font-semibold">{props.model.name}</h1>
        <p className="text-lg font-medium text-gray-700">
          Order Online for <span className="underline">Touchless Delivery</span>
        </p>
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 transform text-center">
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0">
          <Link href={`/configure/${props.model.id}`}>
            <button className="mx-6 w-80 rounded-full bg-gray-800/80 px-10 py-2 text-xl font-semibold text-white">
              Custom Order
            </button>
          </Link>
          <button className="w-80 rounded-full bg-gray-100/70 px-10 py-2 text-xl font-semibold text-black">
            Existing Inventory
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModelPreview
