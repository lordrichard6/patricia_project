import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import logo from '../../public/logo_neon.png'
import pattern from '../../assets/images/pattern.png'

export default function Footer() {
    return (
        <SectionContainer>
            <BG src={pattern}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
            <LogoContainer>
                <Image
                    src={logo}
                    height='60px'
                    width='60px'
                />
            </LogoContainer>
            <SocialContainer>
                <h1>Social</h1>
                <div className="icons">
                </div>
            </SocialContainer>
            <ContactContainer>
                <h1>Contact</h1>
                <div className="info-container">
                    <div className="adress">
                        <p>
                            8212 Neuhausen Am Rheinfall - Switzerland
                        </p>
                    </div>
                    <div className="telephone">
                        <p>
                            +41 76 816 91 11
                        </p>
                    </div>
                    <div className="email">
                        <p>
                            patriciavilanova93@gmail.com
                        </p>
                    </div>
                </div>
            </ContactContainer>
            <Copyright>
                <p>Copyright © 2021 Patricia Vila Nova.</p>
                <p>All rights reserved.</p>
            </Copyright>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    position: relative;
    margin: 0;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #062942;
    color: #fff;
    h1 {
        font-weight: normal;
    }
`

const BG = styled(Image)`
    z-index: 1;
    opacity: 0.1;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ContactContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media("<=phone")} {
        width: 90%;
    }
    h1 {
        align-self: center;
    }
    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${media("<=phone")} {
            flex-direction: column;
            margin: 0;
        }
    }
`

const Copyright = styled.div`
    border-top: 1px solid #fff;
    margin: 0;
    width: 70%;
    display: flex;
    justify-content: space-between;
    ${media("<=phone")} {
        width: 90%;
    }
`