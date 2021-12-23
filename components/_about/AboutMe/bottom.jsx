import styled from "styled-components";
import Image from "next/image";

import { Text } from "../../../assets/variables";
import { aboutMe, aboutText02 } from "../../../assets/data";

export default function Bottom() {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={aboutMe.picture02}
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          alt={aboutMe.alt02}
        />
      </ImageWrapper>
      <TextWrapper>
        {aboutText02.map((item, i) => {
          return (
            <div key={i}>
              <Text>{item.text}</Text>
              <br />
            </div>
          );
        })}
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  position: relative;
  margin-left: 0.8rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  height: 35rem;
  margin-right: 0.8rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }

  @media screen and (min-width: 2024px) {
    height: 40rem;
}
`;
