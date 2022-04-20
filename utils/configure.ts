import { availableColours } from '../data/colours'
import { IColour } from '../types/configure'

export const basePaintUrl =
  'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_XXX.png?version=v0028d202204140414'

export const getPaintIconUrl = (iconName: string) => {
  return basePaintUrl.replace('XXX', iconName)
}

export const applyPaintToPreviewUrl = (
  baseUrl: string | undefined,
  colourCode: string | undefined
): string => {
  if (!baseUrl || !colourCode) {
    return ''
  }

  return baseUrl.replace('XXX', colourCode)
}

export const getColour = (colourName: string): IColour | undefined => {
  return availableColours.find((c) => c.name === colourName)
}
