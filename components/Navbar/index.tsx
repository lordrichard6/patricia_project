import styled from 'styled-components'
import Image from 'next/image'

import logo from '../../public/logo_neon.png'

export default function Navbar() {
    return (
        <Container>
            <InnerContainer>
                <LogoContainer>
                    <Image 
                        src={logo}
                        height='60px'
                        width='60px'
                    />
                </LogoContainer>
                <ItemsContainer>
                    <li><a>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact Me</a></li>
                </ItemsContainer>
            </InnerContainer>

        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1;
    background-color: #212121;
`

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    color: #fff;
    font-size: 1.8rem;
    font-weight: normal;
    margin: 0;
    li {
        padding-right: 1rem;
        padding-left: 1rem;
    }
`
