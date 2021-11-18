import styled from "styled-components";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

import { TitleExtra, Colors } from "../../assets/variables";
import { BsArrowLeftSquareFill } from "react-icons/bs";

export default function Banner({name, to, image}) {
  return (
    <SectionContainer>
      <BG
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <TitleExtra className="font-color">{name}</TitleExtra>
      <GoTo to={to} smooth={true} duration={600}>
        <Icon />
      </GoTo>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #68a7f0; */
  @media screen and (max-width: 500px) {
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

const Icon = styled(BsArrowLeftSquareFill)`
  color: ${Colors.white};
  text-shadow: ${Colors.dark} 1px 0 10px;
  font-size: 4rem;
  margin-left: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
`;
