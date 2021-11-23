import styled from "styled-components";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

import { Colors } from "../../assets/variables";
import Button from './button'

export default function Banner({ name, to, image }) {
  return (
    <SectionContainer>
      <BG src={image} layout="fill" objectFit="cover" objectPosition="center" />

      <GoTo to={to} smooth={true} duration={600}>
        <Button name={name}/>
      </GoTo>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  /* background-color: #68a7f0; */

  @media screen and (max-width: 764px) {
    height: 25rem;
  }

  .font-color {
    color: ${Colors.white};
  }
`;

const GoTo = styled(LinkScroll)`
  z-index: 10;
  cursor: pointer;
`;

const BG = styled(Image)`
  z-index: 0;
  /* opacity: 0.1; */
`;

