import styled from 'styled-components'
import Image from 'next/image'

import breakpoint from "../../assets/variables/breakpoints";
import { TitleSmall, Text } from '../../assets/variables'
import { aboutMe } from '../../assets/data'

export default function Right() {
  return (
    <RightContainer>
      <ImageWrapper>
        <Image
          src={aboutMe.picture}
          objectFit="cover"
          layout="responsive"
          objectPosition="center"
          alt={aboutMe.alt}
        />
      </ImageWrapper>
      <TitleSmall>{aboutMe.quote}</TitleSmall>
      <Text>Patricia Vila Nova</Text>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 0.6rem;

  @media screen and (${breakpoint.device.tablet}) {
    width: 100%;
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
