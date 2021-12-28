import styled from "styled-components";

import { Colors } from "../../assets/variables";

import Left from "./left";
import Middle from "./middle";
import Right from "./right";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <SectionContainer>
      <InnerWrapper>
        <Left />
        <Middle />
        <Right />
      </InnerWrapper>
      <Copyright />
    </SectionContainer>
  );
}

const SectionContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: ${Colors.primary};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 32px 0;
`;
