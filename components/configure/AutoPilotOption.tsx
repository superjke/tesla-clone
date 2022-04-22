import { Upcoming } from '@mui/icons-material'
import React from 'react'
import ButtonsComp from './ButtonsComp'

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
      <div className="mt-8 flex h-9 w-full justify-around">
        <ButtonsComp nameLeft="Add" nameRight="Feature Detials" />
      </div>
    </div>
  )
}

export default AutoPilotOption