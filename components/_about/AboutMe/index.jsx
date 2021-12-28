import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { Headline2, Headline4 } from "../../../assets/variables/typography";
import { SectionContainer } from "../../../assets/variables/containers";
import Upper from "./upper";
import Bottom from "./bottom";

export default function AboutMe() {
  return (
    <SectionContainer flex='column' className='background-pattern_bottom'>
      <Headline2 color={Colors.dark} id="about">
        About Me
      </Headline2>
      <InnerContainer>
        <Upper />
        <Bottom />
        <Headline4>Driving is a passion that allows me to meet new people and share moments.</Headline4>
        <Author>Patricia Vila Nova</Author>
      </InnerContainer>
    </SectionContainer>
  );
}

const InnerContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (min-width: 2024px) {
    width: 50vw;
  }
`;

const Author = styled.p`
  text-align: center;
`