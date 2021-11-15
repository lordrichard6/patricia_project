import styled from 'styled-components'
import Image from 'next/image'

import { Title1, Title2, Colors } from '../../assets/variables'


export default function Header() {
    const data = {
        picture: require('../../assets/images/header.jpg'),
        alt: 'patricia vila nova driving service',
        title: 'We drive & You smile',
        quote: 'We provide more than transport, we create a moment dedicated to you.'
    }

    return (
        <SectionContainer id='header'>
            <Background
                src={data.picture}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt={data.picture}
                priority
            />
            <SloganContainer>
                <Title1 className='dark-font'>
                    {data.title}
                </Title1>
                <Title2 className='italic text-justify'>
                    {data.quote}
                </Title2>
            </SloganContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.header`  
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
