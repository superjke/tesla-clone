import React from 'react'
import { availableColours } from '../../data/colours'
import { ISelections } from '../../types/configure'
import { getColour, getPaintIconUrl } from '../../utils/configure'

interface IProps {
  selections: ISelections
  updateSelections: Function
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

function ColourSelector(props: IProps) {
  return (
    <div>
      <h1 className="mt-20 text-center text-4xl font-semibold">Colour</h1>
      <div className="flex items-center justify-center">
        {availableColours.map((c) => (
          <div
            key={c.code}
            className="flex h-[100px] w-[100px] items-center justify-center "
          >
            <div
              className={`${
                props.selections.colour === c.name
                  ? 'rounded-full border-4 border-blue'
                  : ''
              }`}
            >
              <img
                className="py-1 px-1"
                src={getPaintIconUrl(c.iconName)}
                onClick={() =>
                  props.updateSelections({
                    ...props.selections,
                    colour: c.name,
                  })
                }
                alt=""
                width={60}
                height={40}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <p className="text-xl font-semibold">{props.selections.colour}</p>
        <p className="text-xl text-gray-600">
          {formatCost(getColour(props.selections.colour)?.cost)}
        </p>
      </div>
    </div>
  )
}

export default ColourSelector
