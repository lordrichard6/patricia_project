import styled from "styled-components";

export const Headline1 = styled.h1`
  z-index: 10;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
    line-height: 46px;
    padding: 2rem 0;
  }
  @media screen and (min-width: 2024px) {
    font-size: 72px;
    letter-spacing: 4px;
  }
`;
