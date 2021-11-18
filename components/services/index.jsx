import styled from "styled-components";
import Image from "next/image";

import {
  Colors,
  Title1,
  Title2,
  Title3,
  NormalText,
} from "../../assets/variables";
import { services } from "../../assets/data";

export default function Services() {
  return (
    <SectionContainer id="services" className="padding-y">
      <InnerContainer>
        <Title2 className="underline margin-y">Services</Title2>
        <Title1 className="margin-bottom">
          “Better than one is three or more”
        </Title1>
        <ServicesContainer>
          {services.map((item, index) => {
            return (
              <Service key={index}>
                <ImageWrapper>
                  <Image src={item.picture} objectFit="cover" alt={item.alt} />
                </ImageWrapper>

                <Info>
                  <Title3 className="margin-top">{item.serviceTitle}</Title3>
                  <NormalText>{item.serviceText}</NormalText>
                </Info>
              </Service>
            );
          })}
        </ServicesContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/pattern.png"), ${Colors.primary};
  padding-bottom: 4rem;
  padding-top: 4rem;

  @media screen and (min-width: 1920px) {
    min-height: 100vh;
  }
`;

const InnerContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1920px) {
    width: 60vw;
  }
`;

const ServicesContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 810px) {
    flex-direction: column;
  }
`;

const Service = styled.div`
  width: 30%;
  padding: 2rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: auto;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-start;
`;
