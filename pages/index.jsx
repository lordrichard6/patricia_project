import React, { useState } from "react";
import styled from "styled-components";

import bannerGallery from "../public/images/banner01.jpg";
import bannerContact from "../public/images/banner02.jpg";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Services from "../components/services";
import Passions from "../components/Passions";
import Gallery from "../components/Gallery";
import FormSection from "../components/Form";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <AboutMe />
      <Banner name="Jump to Gallery" to="gallery" image={bannerGallery} />
      <Services />
      <Banner name="Contact Me" to="form" image={bannerContact} />
      <Passions />
      <Gallery />
      <FormSection />
    </MainContainer>
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