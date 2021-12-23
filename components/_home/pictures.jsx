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
  flex-direction: row;
  align-items: center;
  overflow-x: hidden;
`;

const ImageWrapper = styled.div`
  width: calc(100% / 3);
  /* height: 40vh; */
`;