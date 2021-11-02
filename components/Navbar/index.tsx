import styled from 'styled-components'
import Image from 'next/image'

import logo from '../../public/logo_neon.png'
import pattern from '../../assets/images/pattern.png'

export default function Navbar() {
    return (
        <Container>
            <BG src={pattern} 
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
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
                    <li><a href="#aboutMe">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#form">Contact Me</a></li>
                </ItemsContainer>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 8px;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #062942;
    z-index: 1;
`

const BG = styled(Image)`
    z-index: 0;
    opacity: 0.1;
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
    font-weight: 200;
    margin: 0;
    z-index: 1;
    li {
        padding-right: 1rem;
        padding-left: 1rem;
        a {
            cursor: pointer;
        }
    }
`
