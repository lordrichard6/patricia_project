import styled from "styled-components";
import Image from "next/image";

import { pictures } from "../../assets/data/home";

export default function Pictures() {
  return (
    <SectionContainer>
      {pictures.map((item, i) => {
        return (
          <ImageWrapper key={i}>
            <Image src={item.imgSrc} alt={item.alt}  />
          </ImageWrapper>
        );
      })}
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  margin: 0;
  width: 100vw;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    div:last-child {
      display: none;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: calc(100% / 3);

  @media screen and (max-width: 768px) {
    width: calc(100% / 2);
`;