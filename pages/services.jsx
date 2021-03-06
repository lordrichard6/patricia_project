import styled from "styled-components";

import Services from "../components/_services";


export default function ServicesPage() {
  return (
    <MainContainer>
      <Services />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  margin: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;