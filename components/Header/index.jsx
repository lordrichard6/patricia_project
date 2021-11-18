import styled from "styled-components";
import Image from "next/image";

import breakpoint from "../../assets/variables/breakpoints";
import { TitleBig, Colors } from "../../assets/variables";
import { homepageHeader } from "../../assets/data";

export default function Header() {
  return (
    <SectionContainer id="header">
      <Background
        src={homepageHeader.picture}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={homepageHeader.alt}
        priority
      />
      <SloganContainer>
        <TitleBig color={Colors.white}>{homepageHeader.title}</TitleBig>
        <Quote>{homepageHeader.quote}</Quote>
      </SloganContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (${breakpoint.device.mobile}) {
    height: 45rem;
  }
`;

const SloganContainer = styled.hgroup`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  line-height: 05rem;
  text-shadow: ${Colors.dark} 1px 0 10px;

  @media screen and (${breakpoint.device.tablet}) {
    text-align: center;
  }

  @media screen and (${breakpoint.device.desktop}) {
    width: 60vw;
  }
`;

const Quote = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: ${Colors.white};
  margin: 1rem 0;

  @media screen and (${breakpoint.device.mobile}) {
    font-size: 30px;
    line-height: 38px;
    text-align: center;
  }
  @media screen and (min-width: 600px) and (${breakpoint.device.tablet}) {
    font-size: 40px;
    line-height: 38px;
    text-align: center;
  }
  @media screen and (${breakpoint.device.desktop}) {
    font-size: 38px;
    letter-spacing: 2px;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;
