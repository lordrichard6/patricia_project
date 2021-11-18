import styled from "styled-components";

import { Colors, TitleSection, SectionContainer } from "../../assets/variables";
import Left from "./left";
import Right from "./right";

export default function AboutMe() {
  return (
    <SectionContainer>
      <TitleSection color={Colors.dark} id="about">
        About Me
      </TitleSection>
      <InnerContainer>
        <Left />
        <Right />
      </InnerContainer>
    </SectionContainer>
  );
}

const InnerContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
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
