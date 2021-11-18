import styled from 'styled-components'
import Image from 'next/image'

import { Title1, Title2, Colors } from '../../assets/variables'
import { homepageHeader } from '../../assets/data'


export default function Header() {
    return (
        <SectionContainer id='header'>
            <Background
                src={homepageHeader.picture}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt={homepageHeader.alt}
                priority
            />
            <SloganContainer>
                <Title1 className='dark-font'>
                    {homepageHeader.title}
                </Title1>
                <Title2 className='italic text-justify'>
                    {homepageHeader.quote}
                </Title2>
            </SloganContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.header`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        height: 45rem;
    }
`

const SloganContainer = styled.hgroup`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    z-index: 1;
    line-height: 05rem;
    text-shadow: ${Colors.dark} 1px 0 10px;

    @media screen and (min-width: 1920px) {
        width: 60vw;
    }
`

const Background = styled(Image)`
    z-index: 0;
`
