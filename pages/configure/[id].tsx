import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ConfigureForm from '../../components/configure/ConfigureForm'
import NavBar from '../../components/configure/NavBar'
import { availableColours } from '../../data/colours'
import { models } from '../../data/models'
import { IConfig, ISelections } from '../../typings'
import { IModel } from '../../typings'

function ConfigurePage() {
  const router = useRouter()
  const { id } = router.query
  const [selections, setSelections] = useState({
    config: 0,
    colour: 0,
    wheels: 0,
    interior: 0,
    enhancedAutopilot: false,
    fsdAutopilot: false,
  })
  console.log('id:' + id)
  const [previewLoading, setPreviewLoading] = useState(true)
  const model: IModel | undefined = models.find((m) => m.id === id)
  console.log(model?.configs ?? 'undefined')
  console.log(selections.config)

  const getPreviewUrl = (
    selections: ISelections,
    config: IConfig | undefined
  ): string => {
    if (!config) {
      return ''
    }
    const baseUrl = config.previewImageUrl
    const colourCode = availableColours[selections.colour]?.code
    const wheelCode = config.wheels[selections.wheels]?.code
    const interiorCode = config.interior[selections.interior]?.code
    if (baseUrl && colourCode && wheelCode && interiorCode) {
      return baseUrl
        .replace('XXX', colourCode)
        .replace('WWW', wheelCode)
        .replace('III', interiorCode)
    }
    return ''
  }

  return (
    <div className="flex h-screen flex-col lg:overflow-y-hidden">
      <NavBar />

      {!model || !model.configs ? (
        <div>
          <h1>Something went wrong</h1>
        </div>
      ) : (
        <main className="mt-16 lg:flex lg:h-screen lg:flex-col">
          {previewLoading ? (
            <div className="-mt-[4rem] flex h-screen items-center justify-center">
              <CircularProgress />
            </div>
          ) : (
            <></>
          )}
          <div className="lg:flex lg:flex-1 lg:overflow-hidden">
            <div className={previewLoading ? 'hidden' : ''}>
              <img
                className="mt-16 h-full w-full object-contain lg:mt-0"
                src={getPreviewUrl(
                  selections,
                  model.configs[selections.config]
                )}
                alt=""
                onLoad={() => setPreviewLoading(false)}
              />
            </div>
            {!previewLoading && (
              <div className="lg:flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center">
                <div className="flex flex-1 justify-center lg:w-[500px] lg:overflow-y-auto">
                  <ConfigureForm
                    model={model}
                    selections={selections}
                    updateSelections={(updatedSelections: ISelections) =>
                      setSelections(updatedSelections)
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  )
}

export default ConfigurePage
