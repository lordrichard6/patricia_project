import styled from 'styled-components'

import { Navbar } from '../Navbar'

export default function Header() {
    return (
        <SectionContainer>
            <Navbar />
            <SloganContainer>
                <Title>
                    “Because driving<br />
                    from A to B doesn’t have to be boring”
                </Title>
                <SubTitle>
                    A driving service with a more friendly approach and a touch of humor.
                </SubTitle>
            </SloganContainer>

        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-left: 8rem;
    padding-right: 8rem;
    background: linear-gradient(259.91deg, #7F7FD5 -2.37%, #86A8E7 50.2%, #91EAE4 104.95%);
`

const SloganContainer = styled.div`  
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: normal;
  color: #FFFFFF;
`

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  color: #FFFFFF;
`