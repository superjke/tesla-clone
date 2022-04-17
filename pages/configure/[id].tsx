import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../../components/configure/NavBar'
import { models } from '../../data/models'
import { IModel } from '../../types/models'

function ConfigurePage() {
  const router = useRouter()
  const { id } = router.query
  const model: IModel | undefined = models.find((m) => m.name === id)

  const getButton = (model: string, price: number, selected: boolean) => {
    // border-4 border-blue-600
    return (
      <button
        className={`w-full rounded-full px-4 py-3 ${
          selected ? 'border-4 border-blue' : 'border-[1px] border-grey'
        }`}
      >
        <div className="flex justify-between">
          <p className="font-semibold">{model}</p>
          <p className="font-semibold">${price.toLocaleString()}</p>
        </div>
      </button>
    )
  }

  return (
    <div>
      <NavBar />
      <div className="mt-16 flex flex-col lg:flex-row">
        {/* Preview */}
        <div className=" flex w-full items-center justify-center">
          <img
            className="h-full object-cover"
            src="https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PPSW,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414"
            alt="Tesla Logo"
          />
        </div>
        {/* Configure */}
        <div className="flex h-96 justify-center lg:w-[38rem]">
          <div className="w-[22rem] ">
            <h1 className="whitespace-nowrap text-center">Model 3</h1>
            <h2 className="whitespace-nowrap text-center">
              Est. delivery: Aug 2022
            </h2>
            {getButton('Model 3', 45000, true)}
            {getButton('Model 3', 45000, false)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigurePage
