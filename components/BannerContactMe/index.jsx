import styled from 'styled-components'
import Image from 'next/image'
import { Link as LinkScroll } from "react-scroll";

import { TitleExtra, Colors } from '../../assets/variables'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import background from "../../assets/images/contact_banner.jpg";

export default function BannerContactMe() {
    return (
        <SectionContainer>
            <BG
                src={background}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <TitleExtra className="font-color">Contact</TitleExtra>
            <GoTo to="form" smooth={true} duration={600}>
                <Icon />
            </GoTo>
        </SectionContainer>
    )
}

const SectionContainer = styled.section`
position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.dark};
`

const BG = styled(Image)`
  z-index: 0;
`;

const GoTo = styled(LinkScroll)`
  z-index: 10;
  cursor: pointer;
`

const Icon = styled(BsArrowLeftSquareFill)`
    color: ${Colors.white};
    text-shadow: ${Colors.dark} 1px 0 10px;
    font-size: 4rem;
    margin-left: 1rem;

    @media screen and (max-width: 1024px) {
        font-size: 3rem;
    }
`