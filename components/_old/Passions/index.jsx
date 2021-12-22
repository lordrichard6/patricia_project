import styled from "styled-components";

import {
  SectionContainer,
  TitleSection,
  TitleMain,
} from "../../assets/variables";
import { passions } from "../../assets/data";
import Passion from "./passion";

export default function Passions() {
  return (
    <SectionContainer>
      <TitleSection id="hobby">My Passions</TitleSection>
      <TitleMain>
        “Heart beats better and faster when we do things we love”
      </TitleMain>
      <InnerContainer>
        {passions.map((item, index) => {
          return (
            <Passion
              key={index}
              classname={item.container}
              image={item.imgSrc}
              alt={item.alt}
              title={item.hobbyTitle}
              text={item.hobbyText}
            />
          );
        })}
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

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (min-width: 2024px) {
    width: 50vw;
  }
`;
