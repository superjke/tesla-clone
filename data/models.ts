import { CONFIG_TYPE, IModel, OPTION_TYPE } from '../types/models'

export const models: IModel[] = [
  {
    id: 'model-3',
    name: 'Model 3',
    mainPreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD',
    mainMobilePreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD',

    configs: [
      {
        type: CONFIG_TYPE.RWD,
        estDelivery: new Date('2022-05-01'),
        name: 'Standard Range',
        price: 45990,
        stats: {
          range: 305,
          topSpeed: 140,
          acceleration: 5.8,
        },
        previewImageUrl:
          'https://static-assets.tesla.com/configurator/compositor?&options=$MT322,$XXX,$WWW,$III&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
        wheels: [
          {
            type: OPTION_TYPE.WHEEL,
            name: "18' Aero Wheels",
            cost: 0,
            code: 'W40B',
            iconName: '18-aero',
          },
          {
            type: OPTION_TYPE.WHEEL,
            name: "19' Sport Wheels",
            cost: 1500,
            code: 'W41B',
            iconName: '19-sport',
          },
        ],
        interior: [
          {
            type: OPTION_TYPE.INTERIOR,
            iconName: 'in3pb',
            name: 'All Black',
            code: 'IBB1',
            cost: 0,
          },
          {
            type: OPTION_TYPE.INTERIOR,
            iconName: 'white',
            name: 'Black And White',
            code: 'IBW1',
            cost: 1100,
          },
        ],
      },
      {
        type: CONFIG_TYPE.AWD,
        estDelivery: new Date('2022-07-01'),
        name: 'Long Range',
        price: 54990,
        stats: {
          range: 374,
          topSpeed: 145,
          acceleration: 4.2,
        },
        previewImageUrl:
          'https://static-assets.tesla.com/configurator/compositor?&options=$MT328,$XXX,$WWW,$III&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
        wheels: [
          {
            type: OPTION_TYPE.WHEEL,
            name: "18' Aero Wheels",
            cost: 0,
            code: 'W40B',
            iconName: '18-aero',
          },
          {
            type: OPTION_TYPE.WHEEL,
            name: "19' Sport Wheels",
            cost: 1500,
            code: 'W41B',
            iconName: '19-sport',
          },
        ],
        interior: [
          {
            type: OPTION_TYPE.INTERIOR,
            iconName: 'in3pb',
            name: 'All Black',
            code: 'IPB1',
            cost: 0,
          },
          {
            type: OPTION_TYPE.INTERIOR,
            iconName: 'white',
            name: 'Black And White',
            code: 'IPW1',
            cost: 1100,
          },
        ],
      },
      {
        type: CONFIG_TYPE.AWD,
        estDelivery: new Date('2022-08-01'),
        name: 'Performance',
        price: 59990,
        stats: {
          range: 340,
          topSpeed: 162,
          acceleration: 3.1,
        },
        previewImageUrl:
          'https://static-assets.tesla.com/configurator/compositor?&options=$MT325,$XXX,$WWW,$III,$SLR1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
        wheels: [
          {
            type: OPTION_TYPE.WHEEL,
            name: "20' Überturbine Wheels",
            cost: 0,
            code: 'W33D',
            iconName: '20-uberturbine',
          },
        ],
        interior: [
          {
            type: OPTION_TYPE.INTERIOR,
            iconName: 'in3pb',
            name: 'All Black',
            code: 'IPB1',
            cost: 0,
          },
          {
            type: OPTION_TYPE.INTERIOR,
            iconName: 'white',
            name: 'Black And White',
            code: 'IPW1',
            cost: 1100,
          },
        ],
      },
    ],
  },
  {
    id: 'model-y',
    name: 'Model Y',
    mainPreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70',
    mainMobilePreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY',
    configs: [],
  },
  {
    id: 'model-s',
    name: 'Model S',
    mainPreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD',
    mainMobilePreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/f85de5bf-09b6-41f8-a5e6-acc634f68550/bvlatuR/std/1927x4096/MS-Homepage-Mobile-LHD',
    configs: [],
  },
  {
    id: 'model-x',
    name: 'Model X',
    mainPreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD',
    mainMobilePreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/0e05bf87-dbad-45a6-b1cc-ca4a6d74b068/bvlatuR/std/1928x4096/MX-Homepage-Mobile-LHD',
    configs: [],
  },

  // {
  //   id: 'model-s',
  //   name: 'Model S',
  //   mainPreviewUrl:
  //     'https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD',
  //   configurePreviewUrl:
  //     'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$XXX,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
  //   configs: [
  //     {
  //       type: CONFIG_TYPE.RWD,
  //       estDelivery: new Date('2022-08-01'),
  //       name: 'Standard Range',
  //       price: 45990,
  //       stats: {
  //         range: 305,
  //         topSpeed: 140,
  //         acceleration: 5.8,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'model-x',
  //   name: 'Model X',
  //   mainPreviewUrl:
  //     'https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD',
  //   configurePreviewUrl:
  //     'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$XXX,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
  //   configs: [
  //     {
  //       type: CONFIG_TYPE.RWD,
  //       estDelivery: new Date('2022-08-01'),
  //       name: 'Standard Range',
  //       price: 45990,
  //       stats: {
  //         range: 305,
  //         topSpeed: 140,
  //         acceleration: 5.8,
  //       },
  //     },
  //   ],
  // },
]
