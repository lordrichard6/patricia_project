import styled from 'styled-components'
// import media from "css-in-js-media";

import { TitleExtra, Colors } from '../../assets/variables'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";

export default function BannerGallery() {
    return (
        <SectionContainer>
            <TitleExtra className="font-color">Gallery</TitleExtra><a href="#form"><Icon icon={faCaretSquareLeft} /></a>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #68a7f0;
    .font-color {
        color: ${Colors.primary};
    }
`

const Icon = styled(FontAwesomeIcon)`
    color: ${Colors.primary};
    width: 100px;
    margin-left: 1rem;
`