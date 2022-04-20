import React from 'react'
import { ISelections } from '../../types/configure'
import { getPaintIconUrl, PAINT_ICON_COLOURS } from '../../utils/configure'

interface IProps {
  colours: PAINT_ICON_COLOURS[]
  selections: ISelections
  updateSelections: Function
}

function ColourSelector(props: IProps) {
  return (
    <div>
      <h1 className="mt-20 text-center text-4xl font-semibold">Colour</h1>
      <div className="flex items-center justify-center">
        {props.colours.map((c) => (
          <div
            key={c}
            className="flex h-[100px] w-[100px] items-center justify-center "
          >
            <div
              className={`${
                props.selections.colour === c
                  ? 'rounded-full border-4 border-blue'
                  : ''
              }`}
            >
              <img
                className="py-1 px-1"
                src={getPaintIconUrl(c)}
                onClick={() =>
                  props.updateSelections({
                    ...props.selections,
                    colour: c,
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
    </div>
  )
}

export default ColourSelector
