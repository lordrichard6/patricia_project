import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import Gap from '../components/SectionGap'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import BannerGallery from '../components/BannerGallery'
import Services from '../components/services'
import WhyChooseMe from '../components/WhyChooseMe'
import BannerContactMe from '../components/BannerContactMe'
import OtherPassions from '../components/OtherPassions'
import Gallery from '../components/Gallery'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Patricia Vila Nova</title>
        <meta name="Patricia Vila Nova" content="Patricia Vila Nova" />
        <link rel="icon" href="/logo_neon.png" />
      </Head>
      <Navbar />
      <Header />
      {/* <Gap /> */}
      <AboutMe />
      <Gap /> 
      <BannerGallery />
      <Services />
      <Gap />
      <WhyChooseMe />
      <Gap />
      <BannerContactMe />
      <Gap />
      <OtherPassions />
      <Gap />
      <Gallery />
      {/* <Gap /> */}
      <Form />
      <Footer />
    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`