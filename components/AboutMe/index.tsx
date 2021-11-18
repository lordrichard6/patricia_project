import styled from 'styled-components'

import breakpoint from "../../assets/variables/breakpoints";
import { Colors, TitleSection, SectionContainer } from '../../assets/variables'
import Left from './left'
import Right from './right'


export default function AboutMe() {
    return (
        <SectionContainer>
            <TitleSection color={Colors.dark} id="about">
                About Me
            </TitleSection>
            <InnerContainer>
                <Left />
                <Right />
            </InnerContainer>
        </SectionContainer>
    )
}

const InnerContainer = styled.div`  
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    @media screen and (${breakpoint.device.tablet}) {
        flex-direction: column;
    }
    @media screen and (min-width: 768px) and (${breakpoint.device.tablet}) {
    width: 60vw;
  }
    @media screen and (${breakpoint.device.desktop}) {
        width: 50vw;
    }
`
