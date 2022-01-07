import styled from "styled-components";

import { SectionWrapper } from "../../../assets/variables/containers";
import { Headline2 } from "../../../assets/variables/typography";
import { reasons } from "../../../assets/data/home";
import Reason from "./reason";

export default function WhyChooseUs() {
  return (
    <SectionContainer>
      <SectionWrapper flex="column">
        <Headline2>Why choose us</Headline2>
        <InnerContainer>
          {reasons.map((item, i) => {
            return (
              <Reason
                key={i}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </InnerContainer>
      </SectionWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100vw;
  /* height: 100%; */
  height: ;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("/backg.png");
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    padding: 32px 0;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 80%);
  }

  @media only screen and (min-width: 2024px) {
    /* width: 80vw; */
  }
`;
