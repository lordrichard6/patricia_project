import styled from 'styled-components'
import media from "css-in-js-media";

import { TitleExtra, Colors } from '../../assets/variables'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";

export default function BannerContactMe() {
    return (
        <SectionContainer>
            <TitleExtra>Contact Me</TitleExtra><a href="#form"><Icon icon={faCaretSquareLeft} /></a>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.dark};
`

const Icon = styled(FontAwesomeIcon)`
    color: ${Colors.white};
    width: 100px;
    margin-left: 1rem;
    ${media("<=tablet")} {
        width: 60px;
    }
`