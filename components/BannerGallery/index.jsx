import styled from 'styled-components'

import { TitleExtra, Colors } from '../../assets/variables'
import { BsArrowLeftSquareFill } from "react-icons/bs";

export default function BannerGallery() {
    return (
        <SectionContainer>
            <TitleExtra className="font-color">Gallery</TitleExtra><a href="#form"><Icon /></a>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #68a7f0;

    .font-color {
        color: ${Colors.primary};
    }
`

const Icon = styled(BsArrowLeftSquareFill)`
    color: ${Colors.primary};
    font-size: 4rem;
    margin-left: 1rem;

    @media screen and (max-width: 1024px) {
        font-size: 3rem;
    }
`