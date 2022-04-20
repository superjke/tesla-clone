import { CONFIG_TYPE, IModel } from '../types/models'

export const models: IModel[] = [
  {
    id: 'model-3',
    name: 'Model 3',
    mainPreviewUrl:
      'https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD',

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
          'https://static-assets.tesla.com/configurator/compositor?&options=$MT322,$PPSW,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
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
          'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PPSW,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
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
          'https://static-assets.tesla.com/configurator/compositor?&options=$MT317,$PPSW,$W33D,$IPB1,$SLR1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
      },
    ],
  },
  // {
  //   id: 'model-y',
  //   name: 'Model Y',
  //   mainPreviewUrl:
  //     'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70',
  //   configurePreviewUrl:
  //     'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PPSW,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
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
  //   id: 'model-s',
  //   name: 'Model S',
  //   mainPreviewUrl:
  //     'https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD',
  //   configurePreviewUrl:
  //     'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PPSW,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
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
  //     'https://static-assets.tesla.com/configurator/compositor?&options=$MT324,$PPSW,$W41B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&version=v0028d202204140414&crop=1300,500,300,300&version=v0028d202204140414',
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
