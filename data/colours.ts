import { IOption, OPTION_TYPE } from '../typings'

export const availableColours: IOption[] = [
  {
    type: OPTION_TYPE.COLOUR,
    iconUrl:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_White.png?version=v0028d202204140414',
    name: 'Pearl White Multi-Coat',
    code: 'PPSW',
    cost: 0,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconUrl:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_Black.png?version=v0028d202204140414',
    name: 'Solid Black',
    code: 'PBSB',
    cost: 1100,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconUrl:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0028d202204140414',
    name: 'Midnight Silver',
    code: 'PMNG',
    cost: 1100,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconUrl:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_Blue.png?version=v0028d202204140414',
    name: 'Deep Blue',
    code: 'PPSB',
    cost: 1100,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconUrl:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_Red.png?version=v0028d202204140414',
    name: 'Red Multi-Coat',
    code: 'PPMR',
    cost: 2100,
  },
]

export const defaultColour = availableColours.at(0)
