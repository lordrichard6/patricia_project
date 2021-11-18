import styled from "styled-components";

import { Colors, TextSmall } from "../../assets/variables";

import Contact from "./contact";
import Social from "./social";
import Sitemap from "./sitemap";

export default function Footer() {
  return (
    <SectionContainer>
      <InnerContainer>
        <GroupContainer>
          <Contact />
          <Social />
          <Sitemap />
        </GroupContainer>
        <Copyright>
          <TextSmall>
            Copyright &copy; {new Date().getFullYear()} Patricia Vila Nova.
          </TextSmall>
          <TextSmall>All rights reserved.</TextSmall>
        </Copyright>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url("/pattern.png"), ${Colors.primary};
  color: ${Colors.white};
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 80vw;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (min-width: 2024px) {
    width: 60vw;
  }
`;

const GroupContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
