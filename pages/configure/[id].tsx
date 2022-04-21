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
  })
  const model: IModel | undefined = models.find((m) => m.id === id)
  const wheelOptions = model?.configs.at(selections.config)?.wheels

  useEffect(() => {
    if (wheelOptions && selections.wheels > wheelOptions.length - 1) {
      setSelections({ ...selections, wheels: 0 })
    }
  })

  return (
    <div className="flex h-screen flex-col lg:overflow-y-hidden">
      <NavBar />

      {model === undefined ? (
        <div className="mt-32 text-center">
          <h1>Whoops.. Something went wrong</h1>
        </div>
      ) : (
        <main className="mt-20 lg:mt-10 lg:flex lg:h-screen lg:flex-col">
          <div className="lg:flex lg:flex-1 lg:overflow-hidden">
            <div className="flex ">
              <img
                className="h-full w-full object-contain"
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
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center">
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
