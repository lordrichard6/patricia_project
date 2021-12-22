import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";

import Sidebar from "../Navbar/sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Sardinha Drive</title>
        <meta name="Sardinha Drive" content="Chauffeur Service" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sardinha Drive Chauffeur"
          key="title"
        />
        <meta
          name="google-site-verification"
          content="KLB5GYXUpNq1bofeRXlUSDrmVZS0iXDGTNcigOJ7yfw"
        />
        <meta name="theme-color" content="#085467" />
        <link rel="icon" href="/logo_noLetter.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo_noLetter.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo_noLetter.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo_noLetter.png"
        />
      </Head>
      <Sidebar className="side" isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.main`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
  .side {
    position: sticky !important;
  }
`;
