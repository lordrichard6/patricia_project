import styled from 'styled-components'
import Image from 'next/image'

import { Colors, Title2, NormalText, SmallText } from '../../assets/variables'
import { ImInstagram, ImFacebook2, ImTwitter, ImLinkedin, ImYoutube} from "react-icons/im";
import { BsHouseFill, BsTelephoneFill, BsMailbox2 } from "react-icons/bs";
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
                        alt='logo patricia vila nova'
                    />
                </LogoContainer>
                <SocialContainer>
                    <Title2>Social</Title2>
                    <div className="icons">
                        <a href="https://www.instagram.com/patriciavilanova93/"><ImInstagram/></a>
                        <a href="https://www.facebook.com//vilanova.patricia/"><ImFacebook2/></a>
                        <a href="https://twitter.com/patriciavilano5/"><ImTwitter/></a>
                        <a href="https://www.linkedin.com/in/patr%C3%ADcia-vila-nova-b22200b5/"><ImLinkedin/></a>
                        <a href="https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA"><ImYoutube/></a>
                    </div>
                </SocialContainer>
                <ContactContainer>
                    <Title2 className='center'>Contact</Title2>
                    <div className="info-container">
                        <div className="adress flex-row">
                        <BsHouseFill className="small-icons" />
                            <NormalText>
                                8212 Neuhausen Am Rheinfall - Switzerland
                            </NormalText>
                        </div>
                        <div className="telephone flex-row">
                        <BsTelephoneFill className="small-icons" />
                            <NormalText>
                                +41 76 816 91 11
                            </NormalText>
                        </div>
                        <div className="email flex-row">
                        <BsMailbox2 className="small-icons" />
                            <NormalText>
                                patriciavilanova93@gmail.com
                            </NormalText>
                        </div>
                    </div>
                </ContactContainer>
                <Copyright>
                    <SmallText>Copyright © 2021 Patricia Vila Nova.</SmallText>
                    <SmallText>All rights reserved.</SmallText>
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

    @media screen and (min-width: 1920px) {
        width: 60vw;
    }
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
    .icons {
        color: ${Colors.white};
        font-size: 2.5rem;
        a { 
            margin: 0 1rem;
            &:hover {
                color: ${Colors.secondary};
                transition: 0.2s ease-in-out;
            }
        }
    }
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 768px) {
            justify-content: flex-start;
        }
    }
    .small-icons {
        font-size: 1.5rem;
        color: ${Colors.white};
        margin: 0 0.5rem;

        @media screen and (min-width: 1920px) {
            width: 2.5rem;
        }
    }
`

const Copyright = styled.div`
    border-top: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`