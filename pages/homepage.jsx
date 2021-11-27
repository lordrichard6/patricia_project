import React, { useState } from "react";
import styled from "styled-components";

import bannerGallery from "../public/images/banner01.jpg";
import bannerContact from "../public/images/banner02.jpg";

import Sidebar from "../components/Navbar/Sidebar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Services from "../components/services";
// import WhyChooseMe from "../components/WhyChooseMe";
import Passions from "../components/Passions";
import Gallery from "../components/Gallery";
import FormSection from "../components/Form";
import Footer from "../components/Footer";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainContainer>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Header />
        <AboutMe />
        <Banner name="Jump to Gallery" to="gallery" image={bannerGallery} />
        <Services />
        {/* <WhyChooseMe /> */}
        <Banner name="Contact Me" to="form" image={bannerContact} />
        <Passions />
        <Gallery />
        <FormSection />
        <Footer />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
