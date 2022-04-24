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
            <h2 className="whitespace-nowrap pt-2 text-center text-gray-600">
              Est. delivery:{' '}
              {props.model.configs
                .at(props.selections.config)
                ?.estDelivery.toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
            </h2>
            <div className="mt-8 w-full lg:px-5">
              <ol className="space-y-2 text-center text-gray-600 ">
                <li>
                  <span>
                    {props.model.name}{' '}
                    {props.model.configs.at(props.selections.config)?.name}
                  </span>
                </li>
                <li>
                  <span>
                    {availableColours.at(props.selections.colour)?.name} Paint
                  </span>
                </li>
                <li>
                  <span>
                    {
                      props.model.configs
                        .at(props.selections.config)
                        ?.wheels.at(props.selections.wheels)?.name
                    }
                  </span>
                </li>
                <li>
                  <span>
                    {
                      props.model.configs
                        .at(props.selections.config)
                        ?.interior.at(props.selections.interior)?.name
                    }{' '}
                    Interior
                  </span>
                </li>
                <li>
                  <span>Autopilot</span>
                </li>
                {props.selections.enhancedAutopilot ? (
                  <li>
                    <span>Enhanced Autopilot</span>
                  </li>
                ) : (
                  <></>
                )}

                <li></li>
                {props.selections.fsdAutopilot ? (
                  <li>
                    <span>Full Self-Driving Capability</span>
                  </li>
                ) : (
                  <></>
                )}

                <li>
                  <span>30-Day Premium Connectivity Trial</span>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Purchase Price</span>
              <span>
                £
                {props.model.configs
                  .at(props.selections.config)
                  ?.price.toLocaleString()}
              </span>
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
