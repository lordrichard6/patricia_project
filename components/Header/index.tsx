import styled from 'styled-components'
import Image from 'next/image'

import { Title1, Title2 } from '../../assets/variables'
import picture from '../../assets/images/header.jpg'

export default function Header() {
    return (
        <SectionContainer>
            <Background
                src={picture}
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
                <Title2>
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    z-index: 1;
`

const Background = styled(Image)`
    z-index: 0;
`