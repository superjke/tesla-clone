import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ConfigureForm from '../../components/configure/ConfigureForm'
import NavBar from '../../components/configure/NavBar'
import { models } from '../../data/models'
import { IModel } from '../../types/models'

function ConfigurePage() {
  const router = useRouter()
  const { id } = router.query
  const [selectedConfig, setSelectedConfig] = useState(0)
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
              src={model.configs.at(selectedConfig)?.previewImageUrl}
              alt="Tesla Logo"
            />
          </div>
          {/* Configure */}
          <ConfigureForm
            model={model}
            selectedConfig={selectedConfig}
            updateSelectedConfig={(i: number) => setSelectedConfig(i)}
          />
        </div>
      )}
    </div>
  )
}

export default ConfigurePage
