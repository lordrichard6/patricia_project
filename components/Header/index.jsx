import styled from "styled-components";
import Image from "next/image";

import { TitleBig, Colors } from "../../assets/variables";
import { header } from "../../assets/data/homepage";

export default function Header() {
  return (
    <SectionContainer>
      <ImageWrapper>
        <Image
        src={header.picture}
        alt={header.alt}
        priority
      />
      </ImageWrapper>
      
      <SloganContainer>
        <TitleBig color={Colors.white}>{header.title}</TitleBig>
        <Quote>{header.quote}</Quote>
      </SloganContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  position: relative;
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 45rem;
  }
`;

const ImageWrapper = styled.div`
width: 50%;
margin: 1rem 2rem;

  @media screen and (max-width: 1024px) {

  }

  @media screen and (min-width: 2024px) {

  }
`;

const SloganContainer = styled.hgroup`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Signika', sans-serif;
  z-index: 1;
  line-height: 05rem;
  text-shadow: ${Colors.dark} 1px 0 10px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (min-width: 2024px) {
    width: 60vw;
  }
`;

const Quote = styled.h2`
  font-size: 36px;
  font-weight: 300;
  color: ${Colors.white};
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 38px;
    text-align: center;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 40px;
    line-height: 38px;
    text-align: center;
  }
  @media screen and (min-width: 2024px) {
    font-size: 38px;
    letter-spacing: 2px;
  }
`;
