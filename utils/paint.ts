export enum PAINT_COLOURS {
  WHITE = 'White',
  BLACK = 'Black',
  GREY = 'MidnightSilver',
  BLUE = 'Blue',
  RED = 'Red',
}

const basePaintUrl =
  'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_XXX.png?version=v0028d202204140414'

export const getPaintIconUrl = (colour: PAINT_COLOURS) => {
  return basePaintUrl.replace('XXX', colour)
}
// https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_Black.png?version=v0028d202204140414
// https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0028d202204140414
