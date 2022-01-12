import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/_home/header";
import WhyChooseUs from "../components/_home/whyChooseUs";
import Pictures from "../components/_home/pictures";
import About from "../components/_home/about";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* <MainContainer> */}
      <Header />
      <Pictures />
      <About />
      <WhyChooseUs />
      {/* </MainContainer> */}
    </Layout>
  );
}

// const MainContainer = styled.main`
//   margin: 0;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow-x: hidden;
// `;
