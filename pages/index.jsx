import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/_home/header";
import AboutMe from "../components/_home/AboutMe";


export default function Home() {
  return (
    <MainContainer>
      <Header />
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