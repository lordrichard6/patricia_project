import styled from 'styled-components'
import Image from 'next/image'

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
                <Title>
                    Because driving<br />
                    from A to B doesn’t have to be boring
                </Title>
                <SubTitle>
                    A driving service with a more friendly approach and a touch of humor.
                </SubTitle>
            </SloganContainer>

        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding-left: 8rem;
    padding-right: 8rem;
`

const SloganContainer = styled.div`  
    display: flex;
    flex-direction: column;
    z-index: 1;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  color: #FFFFFF;
`

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: #FFFFFF;
`

const Background = styled(Image)`
  z-index: 0;
`