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

const getIconUrl = (option: IOption | undefined) => {
  if (!option) {
    return ''
  }
  if (option?.type === OPTION_TYPE.COLOUR) {
    return getPaintIconUrl(option.iconName)
  }
  if (option?.type === OPTION_TYPE.WHEEL) {
    return getWheelIconUrl(option.iconName)
  }
  if (option?.type === OPTION_TYPE.INTERIOR) {
    return getInteriorIconUrl(option.iconName)
  }
  return ''
}

function OptionSelector(props: IProps) {
  return !props.options ? (
    <div />
  ) : (
    <div>
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
                src={getIconUrl(option)}
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
