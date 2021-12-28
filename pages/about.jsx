import React, { useState } from "react";
import styled from "styled-components";

import AboutMe from '../components/_about/AboutMe'


export default function AboutPage() {
  return (
    <MainContainer>
      <AboutMe />
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