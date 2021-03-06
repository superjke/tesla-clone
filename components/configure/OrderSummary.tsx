import { Avatar } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { IModel } from '../../typings'
import { grey } from '@mui/material/colors'
import { ISelections } from '../../typings'
import { availableColours } from '../../data/colours'

interface IProps {
  model: IModel
  selections: ISelections
  toggleSummary: Function
}

function OrderSummary(props: IProps) {
  const summaryData = [
    {
      name: `${props.model.name} ${
        props.model.configs[props.selections.config]?.name
      }`,
      cost: props.model.configs[props.selections.config]?.price,
    },
    {
      name: `${availableColours[props.selections.colour]?.name} Paint`,
      cost: availableColours[props.selections.colour]?.cost,
    },
    {
      name: props.model.configs[props.selections.config]?.wheels[
        props.selections.wheels
      ].name,
      cost: props.model.configs[props.selections.config]?.wheels[
        props.selections.wheels
      ].cost,
    },
    {
      name: `${
        props.model.configs[props.selections.config]?.interior[
          props.selections.interior
        ].name
      } Interior`,
      cost: props.model.configs[props.selections.config]?.interior[
        props.selections.interior
      ].cost,
    },
    { name: 'Autopilot', cost: 0 },
  ]

  if (props.selections.enhancedAutopilot) {
    summaryData.push({ name: 'Enhanced Autopilot', cost: 3600 })
  } else if (props.selections.fsdAutopilot) {
    summaryData.push({ name: 'Full Self-Driving Capability', cost: 6800 })
  }
  summaryData.push({ name: '30-Day Premium Connectivity Trial', cost: 0 })

  function getDetailedListItem(item: string, cost: number) {
    return (
      <li className="flex justify-between">
        <span>{item}</span>
        <span>{cost ? `£${cost.toLocaleString()}` : 'Included'}</span>
      </li>
    )
  }

  function getOrderTotalCost(): number {
    return summaryData.map((item) => item.cost).reduce((a, b) => a + b)
  }

  return (
    <>
      <div className="w-screen px-6 pt-12 pb-24 lg:w-[22rem]">
        <div className="flex items-center space-x-1">
          <button onClick={() => props.toggleSummary()}>
            <Avatar
              sx={{
                height: 30,
                width: 30,
                bgcolor: grey[100],
                color: grey[700],
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            </Avatar>
          </button>
          <span className="text-sm text-gray-500">Edit Design</span>
        </div>
        <div className="mt-12  space-y-16 lg:space-y-16">
          <div>
            <h1 className="whitespace-nowrap text-center text-3xl font-medium">
              Your {props.model.name}
            </h1>
            <h2 className="whitespace-nowrap pt-2 pb-4 text-center text-gray-600">
              Est. delivery:{' '}
              {props.model.configs[
                props.selections.config
              ]?.estDelivery.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </h2>

            <div>
              <ol className="space-y-2  text-gray-600 ">
                {summaryData.map((item) => {
                  return getDetailedListItem(item.name, item.cost)
                })}
              </ol>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Purchase Price</span>
              <span>£{getOrderTotalCost().toLocaleString()}</span>
            </div>
            <div className="mt-3 flex justify-between">
              <span>Due today</span>
              <span>£200</span>
            </div>
            <div className="mt-2">
              <span className=" text-sm font-light text-gray-600">
                Non-refundable Order Fee*
              </span>
            </div>
          </div>
          <div>
            <button className="w-full rounded-full border-4 border-black py-2">
              <span className="text-sm">ORDER WITH CARD</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSummary
