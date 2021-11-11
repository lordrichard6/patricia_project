import styled from 'styled-components'
import Image from 'next/image'

import { Title1, Title2, Colors } from '../../assets/variables'
import header from '../../assets/images/header.jpg'
// import picture_mobile from '../../assets/images/header_mobile.jpg'

export default function Header() {
    return (
        <SectionContainer>
            <Background
                src={header}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt='particia vila nova driving service'
            />
            <SloganContainer>
                <Title1 className='dark-font'>
                    We drive & You smile
                </Title1>
                <Title2 className='italic text-justify'>
                    We provide more than transport, we create a moment dedicated to you.
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
    text-shadow: ${Colors.dark} 1px 0 10px;

    @media screen and (min-width: 1920px) {
        width: 60vw;
    }
`

const Background = styled(Image)`
    z-index: 0;
`
