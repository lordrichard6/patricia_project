import styled from "styled-components";

export const Headline1 = styled.h1`
  z-index: 10;
  font-size: 72px;
  font-weight: 500;
  letter-spacing: 6px;
  line-height: 92px;
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

export const Headline2 = styled.h2`
  font-size: 51px;
  font-weight: 500;
  letter-spacing: 4px;
  line-height: 72px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
  @media screen and (min-width: 2024px) {
 
  }
`

export const Headline4 = styled.h4`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 38px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    
  }
  @media screen and (min-width: 2024px) {
 
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${(props) => props.color};
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    
  }
  @media screen and (min-width: 2024px) {
 
  }
`;