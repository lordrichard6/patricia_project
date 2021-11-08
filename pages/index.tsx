import type { NextPage } from 'next'
import Head from 'next/head'

import Homepage from './homepage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Patricia Vila Nova</title>
        <meta name="Patricia Vila Nova" content="Patricia Vila Nova" />
        <link rel="icon" href="/logo_neon.png" />
      </Head>
      <Homepage />
    </>
  )
}

export default Home