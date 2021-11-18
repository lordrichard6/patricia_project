import styled from "styled-components";
// import Image from "next/image";

import { TitleMain, Text } from "../../assets/variables";
import { aboutMe } from "../../assets/data";

export default function Left() {
  return (
    <LeftContainer>
      <TitleMain>{aboutMe.title}</TitleMain>
      <Text>{aboutMe.text}</Text>
      {/* <LeftImage>
        <Image
          src={picture}
          height={400}
          width={600}
          objectFit="cover"
          alt="about me"
        />
      </LeftImage> */}
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 0.6rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;
