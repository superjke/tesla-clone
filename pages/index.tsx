import type { NextPage } from 'next'
import Head from 'next/head'
import ModelPreview from '../components/home/ModelPreview'
import NavBar from '../components/home/NavBar'

interface IModel {
  name: string
  url: string
}

const models: IModel[] = [
  {
    name: 'Model 3',
    url: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD',
  },
  {
    name: 'Model Y',
    url: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70',
  },
  {
    name: 'Model S',
    url: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD',
  },
  {
    name: 'Model X',
    url: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD',
  },
]

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tesla Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        {models.map((m) => (
          <ModelPreview modelName={m.name} url={m.url} />
        ))}
      </main>
    </div>
  )
}

export default Home
