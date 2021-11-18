import styled from "styled-components";

import { Colors, SmallText } from "../../assets/variables";

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
          <SmallText>
            Copyright &copy; {new Date().getFullYear()} Patricia Vila Nova.
          </SmallText>
          <SmallText>All rights reserved.</SmallText>
        </Copyright>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.footer`
  position: relative;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/pattern.png"), ${Colors.primary};

  .center {
    align-self: center;
  }
`;

const InnerContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (min-width: 1920px) {
    width: 60vw;
  }
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
