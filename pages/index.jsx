import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/_home/header";
import WhyChooseUs from "../components/_home/whyChooseUs";
import Pictures from "../components/_home/pictures";
import About from "../components/_home/about";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Pictures />
      <About />
      <WhyChooseUs />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
