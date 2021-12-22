import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    min-height: 46rem;
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: ${(props) => props.flex};
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 46rem;
    flex-direction: column;
  }

  @media screen and (min-width: 2024px) {
    width: 70%;
  }
`;