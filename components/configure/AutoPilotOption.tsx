import React from 'react'

interface IProps {
  title: string
  cost: number
  features: string[]
  upcomingFeatures?: string[]
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
              <li>
                <span className="font-light text-gray-600">{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default AutoPilotOption
