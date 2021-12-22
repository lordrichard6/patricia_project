import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../assets/variables";
import { Headline1 } from "../../assets/variables/typography";
import {
  SectionContainer,
  SectionWrapper
} from "../../assets/variables/containers";
import { header } from "../../assets/data/homepage";
import Button from "../Button";
// import Morph from './morph'

export default function Header() {
  return (
    <SectionContainer>
      <SectionWrapper flex="row-reverse">
        <ImageWrapper>
          <Image src={header.picture} alt={header.alt} priority />
        </ImageWrapper>
        <SloganContainer>
          <Headline1 color={Colors.primary}>{header.title}</Headline1>
          {/* <Morph /> */}
          <Button name="Check Our Services" href="/services" />
          {/* <Quote>{header.quote}</Quote> */}
        </SloganContainer>
      </SectionWrapper>
    </SectionContainer>
  );
}

const ImageWrapper = styled.div`
  width: 50%;
  margin: 1rem 2rem;
  filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50% / 0.3))
    drop-shadow(2px 4px 16px hsl(220deg 60% 50% / 0.3))
    drop-shadow(4px 8px 32px hsl(220deg 60% 50% / 0.3));

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SloganContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Signika", sans-serif;
  z-index: 1;
  /* line-height: 5rem; */

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 2024px) {
  }
`;

// const Quote = styled.h2`
//   font-size: 36px;
//   font-weight: 300;
//   color: ${Colors.dark};
//   /* margin: 1rem 0; */

//   @media screen and (max-width: 768px) {
//     font-size: 30px;
//     line-height: 38px;
//     text-align: center;
//   }
//   @media screen and (min-width: 600px) and (max-width: 1024px) {
//     font-size: 40px;
//     line-height: 38px;
//     text-align: center;
//   }
//   @media screen and (min-width: 2024px) {
//     font-size: 38px;
//     letter-spacing: 2px;
//   }
// `;
