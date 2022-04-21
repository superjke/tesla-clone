import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ConfigureForm from '../../components/configure/ConfigureForm'
import NavBar from '../../components/configure/NavBar'
import { availableColours } from '../../data/colours'
import { models } from '../../data/models'
import { ISelections } from '../../types/configure'
import { IModel } from '../../types/models'
import { applyPaintToPreviewUrl, getColour } from '../../utils/configure'

function ConfigurePage() {
  const router = useRouter()
  const { id } = router.query
  const defaultColour = availableColours.at(0)
  const [selections, setSelections] = useState({
    config: 0,
    colour: defaultColour ?? {
      iconName: 'White',
      name: 'Pearl White Multi-Coat',
      code: 'PPSW',
      cost: 0,
    },
  })
  const model: IModel | undefined = models.find((m) => m.id === id)

  return (
    <div>
      <NavBar />
      {model === undefined ? (
        <div className="mt-32 text-center">
          <h1>Whoops.. Something went wrong</h1>
        </div>
      ) : (
        <div className=" flex flex-col lg:flex-row">
          {/* Preview */}
          <div className=" flex h-screen w-full items-center justify-center">
            <img
              className="h-full w-auto object-contain"
              src={applyPaintToPreviewUrl(
                model.configs.at(selections.config)?.previewImageUrl,
                selections.colour?.code
              )}
              alt="Tesla Logo"
            />
          </div>
          {/* Configure */}
          <ConfigureForm
            model={model}
            selections={selections}
            updateSelections={(updatedSelections: ISelections) =>
              setSelections(updatedSelections)
            }
          />
        </div>
      )}
    </div>
  )
}

export default ConfigurePage
