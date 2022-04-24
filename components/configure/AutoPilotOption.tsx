import React from 'react'

interface IProps {
  title: string
  cost: number
  features: string[]
  upcomingFeatures?: string[]
  selected: boolean
  toggleOption: Function
}

function AutoPilotOption(props: IProps) {
  return (
    <div className="flex flex-col items-center whitespace-nowrap">
      <h1 className="text-3xl">{props.title}</h1>
      <h2 className="mt-2 font-medium text-gray-600">
        £{props.cost.toLocaleString()}
      </h2>
      <div className="mt-2 w-[75%]">
        <ul style={{ listStyleType: 'disc' }}>
          {props.features.map((feature) => {
            return (
              <li key={feature}>
                <span className=" font-light text-gray-600">{feature}</span>
              </li>
            )
          })}
        </ul>
        {props.upcomingFeatures ? (
          <>
            <div className="relative -left-7 mt-4">
              <span className="text-xl font-semibold">Upcoming:</span>
            </div>
            <ul style={{ listStyleType: 'disc' }}>
              <li className="pt-3">
                <span className="text-gray-600">Autosteer on city streets</span>
              </li>
            </ul>
          </>
        ) : (
          <div />
        )}
      </div>
      <div className="mt-8 flex h-9 w-full justify-between space-x-8">
        <button
          onClick={() => props.toggleOption()}
          className={`flex w-full items-center justify-center rounded-3xl  text-sm font-medium uppercase ${
            props.selected ? 'bg-gray-100 text-black' : 'bg-blue text-white'
          }`}
        >
          {props.selected ? 'Remove' : 'Add'}
        </button>
        <div className="flex w-full items-center justify-center rounded-3xl bg-gray-100 text-sm uppercase text-black">
          Feature Details
        </div>
      </div>
    </div>
  )
}

export default AutoPilotOption
