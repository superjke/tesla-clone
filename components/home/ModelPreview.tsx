import React from 'react'

interface IProps {
  modelName: string
  url: string
}

function ModelPreview(props: IProps) {
  return (
    <div className="relative h-screen">
      <img
        className="h-full w-full object-cover"
        src={props.url}
        alt="Tesla Logo"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 transform text-center">
        <h1 className="pb-3 text-5xl font-semibold">{props.modelName}</h1>
        <p className="text-lg font-medium text-gray-700">
          Order Online for <span className="underline">Touchless Delivery</span>
        </p>
      </div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 transform text-center">
        <div className="flex">
          <button className="mx-6 w-80 rounded-full bg-gray-800/80 px-10 py-2 text-xl font-semibold text-white">
            Custom Order
          </button>
          <button className="w-80 rounded-full bg-gray-100/70 px-10 py-2 text-xl font-semibold text-black">
            Existing Inventory
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModelPreview
