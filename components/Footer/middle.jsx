import styled from "styled-components";
import Image from "next/image";

import logo from "../../public/logo_w.png";


export default function Middle() {
  return (
    <Container>
      <LogoContainer>
        <Image src={logo} alt="logo sardinha drive" />
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div``;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 100px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 100px;
  }
  @media screen and (min-width: 2024px) {
    width: 350px;
    height: 150px;
  }
`;
