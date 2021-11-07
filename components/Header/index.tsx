import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Title1, Title2, Colors } from '../../assets/variables'
import picture from '../../assets/images/header.jpg'
import picture_mobile from '../../assets/images/header_mobile.jpg'

export default function Header() {
    return (
        <SectionContainer>
            <Background
                src={picture_mobile}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt='header'
            />
            <SloganContainer>
                <Title1>
                    Because driving<br />
                    from A to B doesn’t have to be boring
                </Title1>
                <Title2 className='italic text-justify'>
                    A driving service with a more friendly approach and a touch of humor.
                </Title2>
            </SloganContainer>

        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SloganContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    z-index: 1;
    line-height: 05rem;
    text-shadow: ${Colors.secondary} 1px 0 10px;

    ${media(">largeDesktop")} {
        width: 60vw;
    }
`

const Background = styled(Image)`
    z-index: 0;
`
