export interface IModel {
  id: string
  name: string
  mainPreviewUrl: string
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
  iconName: string
}

export enum OPTION_TYPE {
  COLOUR = 'COLOUR',
  WHEEL = 'WHEEL',
  INTERIOR = 'INTERIOR',
}

export enum CONFIG_TYPE {
  RWD = 'Rear-Wheel Drive',
  AWD = 'Dual Motor All-Wheel Drive',
}
