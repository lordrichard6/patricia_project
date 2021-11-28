import styled from "styled-components";

import { Colors, TitleSection, TitleSmall, SectionContainer } from "../../assets/variables";
import Upper from "./upper";
import Bottom from "./bottom";

export default function AboutMe() {
  return (
    <SectionContainer>
      <TitleSection color={Colors.dark} id="about">
        About Me
      </TitleSection>
      <InnerContainer>
        <Upper />
        <Bottom />
        <TitleSmall>Driving is a passion that allows me to meet new people and share moments.</TitleSmall>
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