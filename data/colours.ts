import { IOption, OPTION_TYPE } from '../types/models'

export const availableColours: IOption[] = [
  {
    type: OPTION_TYPE.COLOUR,
    iconName: 'White',
    name: 'Pearl White Multi-Coat',
    code: 'PPSW',
    cost: 0,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconName: 'Black',
    name: 'Black On Black On Slate Black',
    code: 'PBSB',
    cost: 1100,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconName: 'MidnightSilver',
    name: 'Midnight Silver',
    code: 'PMNG',
    cost: 1100,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconName: 'Blue',
    name: 'Deep Ocean Blue',
    code: 'PPSB',
    cost: 1100,
  },
  {
    type: OPTION_TYPE.COLOUR,
    iconName: 'Red',
    name: 'Old People Red',
    code: 'PPMR',
    cost: 2100,
  },
]

export const defaultColour = availableColours.at(0)
