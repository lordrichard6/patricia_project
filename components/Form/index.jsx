import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../assets/variables";
import Form from "./form";

export default function FormSection() {
  return (
    <SectionContainer color={Colors.white}>
      <Form />
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  font-family: Poppins;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.329),
      rgba(255, 255, 255, 0.6)
    ),
    url("/backg.png");
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    padding: 6rem 0;
  }
  @media screen and (min-width: 2024px) {
    min-height: 100vh;
    padding: 10rem 0;
  }
`;
