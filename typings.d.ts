export interface IModel {
  id: string
  name: string
  mainPreviewUrl: string
  mainMobilePreviewUrl: string
  configs: IConfig[]
}

export interface IConfig {
  type: CONFIG_TYPE
  previewImageUrl: string
  name: string
  price: number
  stats: IModelStats
  estDelivery: Date
  wheels: IOption[]
  interior: IOption[]
}

export interface IModelStats {
  range: number
  topSpeed: number
  acceleration: number
}

export interface IOption {
  type: OPTION_TYPE
  name: string
  cost: number
  code: string
  iconUrl: string
}

export interface ISelections {
  config: number
  colour: number
  wheels: number
  interior: number
  enhancedAutopilot: boolean
  fsdAutopilot: boolean
}
