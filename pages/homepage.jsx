import React, {useState} from 'react'
import styled from 'styled-components'

import Gap from '../components/SectionGap'
import Sidebar from "../components/Navbar/Sidebar";
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

export default function Homepage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
      <MainContainer>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
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
      </>
    )
  }
  
  const MainContainer = styled.div`
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  `