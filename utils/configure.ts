import { availableColours } from '../data/colours'
import { IConfig, IOption } from '../typings'

export const basePaintIconUrl =
  'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_XXX.png?version=v0028d202204140414'

export const baseWheelIconUrl =
  'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-XXX.png?version=v0028d202204140414'

export const baseIteriorIconUrl =
  'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_int_XXX.png?version=v0028d202204140414'

export const getPaintIconUrl = (iconName: string | undefined) => {
  if (!iconName) {
    return basePaintIconUrl
  }
  return basePaintIconUrl.replace('XXX', iconName)
}

export const getWheelIconUrl = (iconName: string | undefined) => {
  if (!iconName) {
    return baseWheelIconUrl
  }
  return baseWheelIconUrl.replace('XXX', iconName)
}

export const getInteriorIconUrl = (iconName: string | undefined) => {
  if (!iconName) {
    return baseIteriorIconUrl
  }
  return baseIteriorIconUrl.replace('XXX', iconName)
}

export const getColour = (
  colourName: string | undefined
): IOption | undefined => {
  return availableColours.find((c) => c.name === colourName)
}
