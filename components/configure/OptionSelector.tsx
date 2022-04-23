import React, { useEffect } from 'react'
import { IOption, OPTION_TYPE } from '../../types/models'
import {
  getInteriorIconUrl,
  getPaintIconUrl,
  getWheelIconUrl,
} from '../../utils/configure'

interface IProps {
  title: string
  options: IOption[] | undefined
  selected: number
  updateSelected: Function
}

const formatCost = (cost: number | undefined): string => {
  if (cost === undefined) {
    return ''
  }

  if (cost === 0) {
    return 'Included'
  }

  return `£${cost.toLocaleString()}`
}

function OptionSelector(props: IProps) {
  return !props.options ? (
    <div />
  ) : (
    <div className="flex flex-col space-y-5">
      <h1 className="text-center text-4xl font-semibold ">{props.title}</h1>
      <div className="flex justify-center space-x-4">
        {props.options.map((option, index) => (
          <div
            key={option.code}
            className="h-[60px] w-[60px] items-center justify-center"
          >
            <div
              className={`${
                props.selected === index
                  ? 'rounded-full border-4 border-blue'
                  : ''
              }`}
            >
              <img
                className="py-1 px-1"
                src={option.iconUrl}
                onClick={() => props.updateSelected(index)}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <p className="text-xl font-semibold">
          {props.options.at(props.selected)?.name}
        </p>
        <p className="text-xl text-gray-600">
          {formatCost(props.options.at(props.selected)?.cost)}
        </p>
      </div>
    </div>
  )
}

export default OptionSelector
