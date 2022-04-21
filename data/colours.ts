import { IColour } from '../types/configure'

export const availableColours: IColour[] = [
  {
    iconName: 'White',
    name: 'Pearl White Multi-Coat',
    code: 'PPSW',
    cost: 0,
  },
  {
    iconName: 'Black',
    name: 'Black On Black On Slate Black',
    code: 'PBSB',
    cost: 1100,
  },
  {
    iconName: 'MidnightSilver',
    name: 'Midnight Silver',
    code: 'PMNG',
    cost: 1100,
  },
  {
    iconName: 'Blue',
    name: 'Deep Ocean Blue',
    code: 'PPSB',
    cost: 1100,
  },
  {
    iconName: 'Red',
    name: 'Old People Red',
    code: 'PPMR',
    cost: 2100,
  },
]

export const defaultColour = availableColours.at(0)
