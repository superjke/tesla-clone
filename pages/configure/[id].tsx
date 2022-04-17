import { useRouter } from 'next/router'
import React from 'react'
import { models } from '../../data/models'
import { IModel } from '../../types/models'

function ConfigurePage() {
  const router = useRouter()
  const { id } = router.query
  const model: IModel | undefined = models.find((m) => m.name === id)

  return (
    <div>
      <h1>{id}</h1>
      <h1>{model?.url}</h1>
    </div>
  )
}

export default ConfigurePage
