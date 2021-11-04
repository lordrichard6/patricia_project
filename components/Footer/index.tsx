import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare, faTwitterSquare, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt, faEnvelopeSquare, faHome } from "@fortawesome/free-solid-svg-icons";
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
            <InnerContainer>
                <LogoContainer>
                    <Image
                        src={logo}
                        height='90px'
                        width='90px'
                    />
                </LogoContainer>
                <SocialContainer>
                    <Title2>Social</Title2>
                    <div className="icons">
                        <a href="https://www.instagram.com/patriciavilanova93/"><Icon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com//vilanova.patricia/"><Icon icon={faFacebookSquare} /></a>
                        <a href="https://twitter.com/patriciavilano5/"><Icon icon={faTwitterSquare} /></a>
                        <a href="https://www.linkedin.com/in/patr%C3%ADcia-vila-nova-b22200b5/"><Icon icon={faLinkedin} /></a>
                        <a href="https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA"><Icon icon={faYoutubeSquare} /></a>
                    </div>
                </SocialContainer>
                <ContactContainer>
                    <Title2 className='center'>Contact</Title2>
                    <div className="info-container">
                        <div className="adress flex-row">
                        <IconSmall icon={faHome} />
                            <Title3>
                                8212 Neuhausen Am Rheinfall - Switzerland
                            </Title3>
                        </div>
                        <div className="telephone flex-row">
                        <IconSmall icon={faPhoneSquareAlt} />
                            <Title3>
                                +41 76 816 91 11
                            </Title3>
                        </div>
                        <div className="email flex-row">
                        <IconSmall icon={faEnvelopeSquare} />
                            <Title3>
                                patriciavilanova93@gmail.com
                            </Title3>
                        </div>
                    </div>
                </ContactContainer>
                <Copyright>
                    <NormalText>Copyright © 2021 Patricia Vila Nova.</NormalText>
                    <NormalText>All rights reserved.</NormalText>
                </Copyright>
            </InnerContainer>


        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    position: relative;
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${Colors.primary};
    .center {
        align-self: center;
    }
`

const BG = styled(Image)`
    z-index: 1;
    opacity: 0.1;
`

const InnerContainer = styled.div`  
    width: 80vw;
    display: flex;
    flex-direction: column;
    z-index: 1;
    /* justify-content: center; */
    /* align-items: center; */
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
    color: ${Colors.white};
    width: 60px;
    margin: 1rem;
`

const IconSmall = styled(FontAwesomeIcon)`
    color: ${Colors.white};
    width: 40px;
    margin: 0.5rem;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media("<=tablet")} {
 
    }
    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${media("<=tablet")} {
            flex-direction: column;
            margin: 0;
        }
    }
    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

const Copyright = styled.div`
    border-top: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    ${media("<=tablet")} {

    }
`