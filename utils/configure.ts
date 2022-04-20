export enum PAINT_ICON_COLOURS {
  WHITE = 'White',
  BLACK = 'Black',
  GREY = 'MidnightSilver',
  BLUE = 'Blue',
  RED = 'Red',
}

export enum PREVIEW_COLOUR_CODES {
  WHITE = 'PPSW',
  BLACK = 'PBSB',
  GREY = 'PMNG',
  BLUE = 'PPSB',
  RED = 'PPMR',
}

export const colourCodeLookup = new Map([
  [PAINT_ICON_COLOURS.WHITE, PREVIEW_COLOUR_CODES.WHITE],
  [PAINT_ICON_COLOURS.BLACK, PREVIEW_COLOUR_CODES.BLACK],
  [PAINT_ICON_COLOURS.GREY, PREVIEW_COLOUR_CODES.GREY],
  [PAINT_ICON_COLOURS.BLUE, PREVIEW_COLOUR_CODES.BLUE],
  [PAINT_ICON_COLOURS.RED, PREVIEW_COLOUR_CODES.RED],
])

export const basePaintUrl =
  'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_XXX.png?version=v0028d202204140414'

export const getPaintIconUrl = (colour: PAINT_ICON_COLOURS) => {
  return basePaintUrl.replace('XXX', colour)
}

export const applyPaintToPreviewUrl = (
  baseUrl: string | undefined,
  colour: PAINT_ICON_COLOURS
): string => {
  if (!baseUrl) {
    return ''
  }
  const code = colourCodeLookup.get(colour)
  if (!code) {
    return baseUrl
  }
  return baseUrl.replace(PREVIEW_COLOUR_CODES.WHITE, code)
}
