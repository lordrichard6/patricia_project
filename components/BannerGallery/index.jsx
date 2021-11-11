import styled from "styled-components";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";

import { TitleExtra, Colors } from "../../assets/variables";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import background from "../../assets/images/gallery_banner.jpg";

export default function BannerGallery() {
  return (
    <SectionContainer>
      <BG
        src={background}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <TitleExtra className="font-color">Gallery</TitleExtra>
      <GoTo to="gallery" smooth={true} duration={600}>
        <Icon />
      </GoTo>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: #68a7f0; */

  .font-color {
    color: ${Colors.white};
  }
`;

const GoTo = styled(LinkScroll)`
  z-index: 10;
  cursor: pointer;
`

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
