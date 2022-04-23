import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ConfigureForm from '../../components/configure/ConfigureForm'
import NavBar from '../../components/configure/NavBar'
import { availableColours } from '../../data/colours'
import { models } from '../../data/models'
import { ISelections } from '../../types/configure'
import { IModel } from '../../types/models'
import { getPreviewUrl } from '../../utils/configure'

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
  const [previewLoading, setPreviewLoading] = useState(true)
  const model: IModel | undefined = models.find((m) => m.id === id)
  const wheelOptions = model?.configs.at(selections.config)?.wheels

  useEffect(() => {
    if (wheelOptions && selections.wheels > wheelOptions.length - 1) {
      setSelections({ ...selections, wheels: 0 })
    }
  })

  // TODO: Add loading spinner for preview image
  return (
    <div className="flex h-screen flex-col lg:overflow-y-hidden">
      <NavBar />

      {model === undefined ? (
        <div className="mt-32 text-center">
          <h1>Whoops.. Something went wrong</h1>
        </div>
      ) : (
        <main className="mt-16 lg:flex lg:h-screen lg:flex-col">
          <div className="lg:flex lg:flex-1 lg:overflow-hidden">
            <div>
              <img
                className="mt-16 h-full w-full object-contain lg:mt-0"
                src={getPreviewUrl(
                  model.configs.at(selections.config)?.previewImageUrl,
                  availableColours.at(selections.colour)?.code,
                  model.configs
                    .at(selections.config)
                    ?.wheels.at(selections.wheels)?.code,
                  model.configs
                    .at(selections.config)
                    ?.interior.at(selections.interior)?.code
                )}
                alt=""
                onLoad={() => setPreviewLoading(false)}
              />
            </div>
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
          </div>
        </main>
      )}
    </div>
  )
}

export default ConfigurePage
