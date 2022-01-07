import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../assets/variables";
import { Headline2, Paragraph } from "../../assets/variables/typography";
import { about } from "../../assets/data/home";
import Button from "../Button";

export default function About() {
  return (
    <SectionContainer>
      <TextWrapper>
        <Headline2 color={Colors.white}>{about.title}</Headline2>
        <Paragraph color={Colors.white}>{about.text}</Paragraph>
        <Button name="Read more" href="/about" />
      </TextWrapper>
      <ImageWrapper>
        <Image
          src={about.imgSrc}
          objectPosition="center"
          alt={about.alt}
          objectFit="cover"
        />
      </ImageWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background: ${Colors.primary};
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 16px;
  padding-left: calc(100vh / 5);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 32px 32px!important;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    padding-left: calc(100vh / 8);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 2024px) {
  }
`;
