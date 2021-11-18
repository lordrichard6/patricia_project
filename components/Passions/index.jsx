import styled from "styled-components";

import breakpoint from "../../assets/variables/breakpoints";
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
        “Hearts beats better and faster we make things we love”
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

  @media screen and (${breakpoint.device.mobile}) {
    width: 80vw;
  }
  @media screen and (min-width: 768px) and (${breakpoint.device.tablet}) {
    width: 60vw;
  }
  @media screen and (${breakpoint.device.desktop}) {
    width: 50vw;
  }
`;
