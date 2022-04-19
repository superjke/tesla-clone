export interface IModel {
  id: string
  name: string
  mainPreviewUrl: string
  configurePreviewUrl: string
  configs: IConfig[]
}

export interface IConfig {
  type: CONFIG_TYPE
  previewImageUrl: string
  name: string
  price: number
  stats: IModelStats
  estDelivery: Date
}

export interface IModelStats {
  range: number
  topSpeed: number
  acceleration: number
}

export enum CONFIG_TYPE {
  RWD = 'Rear-Wheel Drive',
  AWD = 'Dual Motor All-Wheel Drive',
}
