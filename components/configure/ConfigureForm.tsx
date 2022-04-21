import React, { MouseEventHandler, useState } from 'react'
import { availableColours, interiorColours } from '../../data/colours'
import { ISelections } from '../../types/configure'
import { CONFIG_TYPE, IModel, IModelStats } from '../../types/models'
import OptionSelector from './OptionSelector'

const getButton = (
  model: string,
  price: number,
  selected: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
) => {
  return (
    <div className="flex h-[4rem] items-center ">
      <button
        className={`w-full rounded-full px-4 py-3 ${
          selected ? 'border-4 border-blue' : 'border-[1px] border-grey'
        }`}
        onClick={onClick}
      >
        <div className="flex justify-between">
          <p className={selected ? 'font-semibold' : 'bold'}>{model}</p>
          <p className={selected ? 'font-semibold' : 'bold'}>
            £{price.toLocaleString()}
          </p>
        </div>
      </button>
    </div>
  )
}

const statDisplay = (stats: IModelStats) => {
  const singleStat = (value: number, unit: string, descriptor: string) => {
    return (
      <div className="text-center">
        <div className="flex items-baseline pb-2">
          <p className="text-2xl font-bold">{value}</p>
          <p className="font-semibold">{unit}</p>
        </div>
        <div className=" text-gray-500">
          <span>{descriptor}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-around pb-6">
      {singleStat(stats.range, 'mi', 'Range')}
      {singleStat(stats.topSpeed, 'mph', 'Top Speed')}
      {singleStat(stats.acceleration, 'sec', '0-60mph')}
    </div>
  )
}

interface IProps {
  model: IModel
  selections: ISelections
  updateSelections: Function
}

function ConfigureForm(props: IProps) {
  const currentConfig = props.model.configs.at(props.selections.config)
  const pageError = currentConfig === undefined

  let awdSeen = false
  let rwdSeen = false

  const updateWheelSelection = (selection: number) => {
    props.updateSelections({
      ...props.selections,
      wheels: selection,
    })
  }

  const updateColourSelection = (selection: number) => {
    props.updateSelections({
      ...props.selections,
      colour: selection,
    })
  }

  const updateInteriorSelection = (selection: number) => {
    props.updateSelections({
      ...props.selections,
      interior: selection,
    })
  }

  return pageError ? (
    <h1>Something went wrong</h1>
  ) : (
    <div className="justify-centerlg:w-[38rem] flex">
      <div className="w-[44rem] pt-12 lg:w-[22rem] ">
        <div className="mb-12">
          <h1 className="whitespace-nowrap pb-2 text-center text-4xl font-semibold">
            {props.model.name}
          </h1>
          <h2 className="whitespace-nowrap text-center text-gray-500">
            Est. delivery:{' '}
            {props.model.configs
              .at(props.selections.config)
              ?.estDelivery.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
          </h2>
        </div>

        {statDisplay(currentConfig?.stats)}

        {props.model.configs.map((c, index) => {
          const btn = getButton(
            c.name,
            c.price,
            index === props.selections.config,
            () => props.updateSelections({ ...props.selections, config: index })
          )

          const btnWithH1 = (
            <div key={c.name} className="mt-3">
              <h1 className="font-semibold text-gray-600">{c.type}</h1>
              {btn}
            </div>
          )

          if (!rwdSeen && c.type === CONFIG_TYPE.RWD) {
            rwdSeen = true
            return btnWithH1
          } else if (!awdSeen && c.type === CONFIG_TYPE.AWD) {
            awdSeen = true
            return btnWithH1
          }
          return <div key={c.name}>{btn}</div>
        })}

        <div className="mt-20">
          <OptionSelector
            title="Colour"
            options={availableColours}
            selected={props.selections.colour}
            updateSelected={updateColourSelection}
          />
        </div>

        <div className="mt-20">
          <OptionSelector
            title="Wheels"
            options={props.model.configs.at(props.selections.config)?.wheels}
            selected={props.selections.wheels}
            updateSelected={updateWheelSelection}
          />
        </div>

        <div className="mt-20"></div>
        <OptionSelector
          title="Interior"
          options={interiorColours}
          selected={props.selections.interior}
          updateSelected={updateInteriorSelection}
        />
      </div>
    </div>
  )
}

export default ConfigureForm
