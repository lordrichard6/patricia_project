import styled from "styled-components";
import Image from "next/image";

import { Headline4, Paragraph } from "../../assets/variables/typography";
import { Colors } from "../../assets/variables";

export default function Service({ i, imgSrc, alt, title, text }) {
  return (
    <ServiceWrapper key={i}>
      <ImageWrapper>
        <Image src={imgSrc} objectFit="cover" alt={alt} />
      </ImageWrapper>
      <Info>
        <Headline4 className='paddingY-16' color={Colors.white}>{title}</Headline4>
        <Paragraph color={Colors.white}>{text}</Paragraph>
      </Info>
    </ServiceWrapper>
  );
}

const ServiceWrapper = styled.div`
  position: relative;
  width: 30%;
  padding: 1rem;

  @media only screen and (max-width: 764px) {
    width: 100% !important;
    padding: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 70%;
    padding: 1rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: auto;
  /* margin-bottom: 1rem; */
  /* box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-start;
  text-align: center;

  position: absolute;
  bottom: 0;
  height: 60px;
  background: #0a0a0a9b;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.4s;
  margin: 1rem 0;
  margin-right: 1rem;
  padding:0 0.5rem;

  @media only screen and (max-width: 764px) {
    margin-right: 1rem;

    &:hover {
    height: 80% !important;
  }
  }

  @media only screen and (max-width: 1024px) {
    margin: 1rem 0;
    margin-right: 1rem;
  }

  &:hover {
    height: 65%;
  }
`;
