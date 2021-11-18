import Head from 'next/head'

import Homepage from './homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patricia Vila Nova</title>
        <meta name="Patricia Vila Nova" content="Patricia Vila Nova" />
        <link rel="icon" href="/logo_white.png" />
      </Head>
      <Homepage />
    </>
  )
}
