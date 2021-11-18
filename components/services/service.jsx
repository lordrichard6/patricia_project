import styled from "styled-components";
import Image from "next/image";

import { TitleSmall, Text } from "../../assets/variables";

export default function Service({ i, imgSrc, alt, title, text }) {
  return (
    <ServiceWrapper key={i}>
      <ImageWrapper>
        <Image src={imgSrc} objectFit="cover" alt={alt} />
      </ImageWrapper>
      <Info>
        <TitleSmall>{title}</TitleSmall>
        <Text>{text}</Text>
      </Info>
    </ServiceWrapper>
  );
}

const ServiceWrapper = styled.div`
  width: 30%;
  padding: 2rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: auto;
  margin-bottom: 1rem;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-start;
`;
