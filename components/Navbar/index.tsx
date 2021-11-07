import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare, faTwitterSquare, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { Colors, Title2 } from '../../assets/variables'
import logo from '../../public/logo_neon.png'
import pattern from '../../assets/images/pattern.png'

export default function Navbar() {
    return (
        <Container>
            <BG src={pattern}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt='pattern'
            />
            <InnerContainer>
                <LogoContainer>
                    <Image
                        src={logo}
                        height='60px'
                        width='60px'
                        alt='logo patricia vila nova'
                    />
                </LogoContainer>
                <ItemsContainer>
                    <li><a href="#aboutMe"><Title2>About Me</Title2></a></li>
                    <li><a href="#services"><Title2>Services</Title2></a></li>
                    {/* <li><a href="#"><Title2>Blog</Title2></a></li> */}
                    <li><a href="#form"><Title2>Contact Me</Title2></a></li>
                    <div className='align'>
                        <a href="https://www.instagram.com/patriciavilanova93/"><Icon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com//vilanova.patricia/"><Icon icon={faFacebookSquare} /></a>
                        <a href="https://twitter.com/patriciavilano5/"><Icon icon={faTwitterSquare} /></a>
                        <a href="https://www.linkedin.com/in/patr%C3%ADcia-vila-nova-b22200b5/"><Icon icon={faLinkedin} /></a>
                        <a href="https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA"><Icon icon={faYoutubeSquare} /></a>
                    </div>
                </ItemsContainer>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    background-color: ${Colors.secondary};
    z-index: 1;

    ${media("<=desktop")} {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
    }
    .align {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
    }
`

const BG = styled(Image)`
    z-index: 0;
    opacity: 0.1;
`

const InnerContainer = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media(">largeDesktop")} {
        width: 60vw;
    }
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    ${media("<=tablet")} {
        width: 40px;
    }
`

const ItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    /* justify-content: flex-end; */
    list-style: none;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 200;
    z-index: 1;

    ${media("<=desktop")} {
        display: none;
    }
    li {
        padding-right: 1rem;
        padding-left: 1rem;
        a {
            cursor: pointer;
        }
    }
`

const Icon = styled(FontAwesomeIcon)`
    color: ${Colors.white};
    width: 40px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`
