import Head from 'next/head'

import Homepage from './homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patricia Vila Nova</title>
        <meta name="Sardinha Drive" content="Chauffeur Service" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sardinha Drive Chauffeur" key="title" />
        <meta name="google-site-verification" content="KLB5GYXUpNq1bofeRXlUSDrmVZS0iXDGTNcigOJ7yfw" />
        <meta name="theme-color" content="#085467" />
        <link rel="icon" href="/logo_noLetter.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo_noLetter.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo_noLetter.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo_noLetter.png" />
      </Head>
      <Homepage />
    </>
  )
}
