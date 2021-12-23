import styled from "styled-components";
import Image from "next/image";

import { TitleMain, Text } from "../../../assets/variables";
import { aboutMe, aboutText01 } from "../../../assets/data";

export default function Upper() {
  return (
    <Container>
      <TextWrapper>
        <TitleMain>{aboutMe.title}</TitleMain>
        {aboutText01.map((item, i) => {
          return (
            <div key={i}>
              <Text>{item.text}</Text>
              <br />
            </div>
          );
        })}
      </TextWrapper>

      <ImageWrapper>
        <Image
          src={aboutMe.picture01}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          alt={aboutMe.alt01}
        />
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  position: relative;
  margin-right: 0.8rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  height: 35rem;
  margin-left: 0.8rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }

  @media screen and (min-width: 2024px) {
    height: 45rem;
  }
`;
