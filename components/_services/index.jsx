import styled from "styled-components";

import { SectionContainer } from "../../assets/variables/containers";
import { Headline2, Headline4 } from "../../assets/variables/typography";
import { services } from "../../assets/data";
import Service from "./service";

export default function Services() {
  return (
    <SectionContainer flex="column" className='background-pattern_bottom'>
      <Headline2 id="services">Services</Headline2>
      <Headline4>“Better than one is three or more”</Headline4>
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
    </SectionContainer>
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
    /* width: 80vw; */
  }
`;

const ServicesContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    /* flex-direction: column; */
  }

  @media only screen and (min-width: 2024px) {
    flex-wrap: nowrap;
  }
`;