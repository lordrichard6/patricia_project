import styled from "styled-components";

import {
  SectionContainerBlue,
  Colors,
  TitleMain,
  TitleSection,
} from "../../assets/variables";
import { services } from "../../assets/data";
import Service from "./service";

export default function Services() {
  return (
    <SectionContainerBlue color={Colors.white}>
      <TitleSection id="services">Services</TitleSection>
      <TitleMain>“Better than one is three or more”</TitleMain>
      <InnerContainer>
        <ServicesContainer>
          {services.map((item, index) => {
            return (
              <Service
                key={index}
                imgSrc={item.picture}
                alt={item.alt}
                title={item.serviceTitle}
                text={item.serviceText}
              />
            );
          })}
        </ServicesContainer>
      </InnerContainer>
    </SectionContainerBlue>
  );
}

const InnerContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 2024px) {
    width: 60vw;
  }
`;

const ServicesContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
