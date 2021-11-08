import styled from 'styled-components'

import { TitleExtra, Colors } from '../../assets/variables'
import { BsArrowLeftSquareFill } from "react-icons/bs";

export default function BannerContactMe() {
    return (
        <SectionContainer>
            <TitleExtra>Contact Me</TitleExtra><a href="#form"><Icon /></a>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.dark};
`

const Icon = styled(BsArrowLeftSquareFill)`
    color: ${Colors.white};
    font-size: 4rem;
    margin-left: 1rem;

    @media screen and (max-width: 1024px) {
        font-size: 3rem;
    }
`