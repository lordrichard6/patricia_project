import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import picture from '../../assets/images/whyChooseMe.jpg'
import pattern from '../../assets/images/pattern.png'

export default function WhyChooseMe() {
    return (
        <SectionContainer>
            <LeftContainer>
                <BG src={pattern}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='pattern'
                />
                <ImageContainer >
                    <Image
                        src={picture}
                        objectFit='cover'
                        layout='fill'
                        alt='why choose me'
                    />
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
                <h3>
                    Why choose Us?
                </h3>
                <h1>
                    What you will<br />enjoy with our service.
                </h1>
                <h3>
                    Each journey with fun and security
                </h3>
                <h2>
                    PVN - Privat Chauffeur is:
                </h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Iaculis tellus, faucibus volutpat fusce consequat in.
                </p>
            </RightContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    ${media("<=tablet")} {
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
    }
`

const LeftContainer = styled.div` 
    position: relative;
    width: 40%;
    height: 100%;
    margin-right: 0.5rem;
    background: #062942;
    ${media("<=tablet")} {
        width: 100%;
    }
`

const BG = styled(Image)`
    z-index: 1;
    opacity: 0.1;
`

const ImageContainer = styled.div`
    z-index: 2;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0;
    margin-left: 6rem;
    width: 100%;
    height: 80%;
    ${media("<=tablet")} {
        display: none;
    }
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 6rem;
    ${media("<=tablet")} {
        width: 80%;
        margin: 0;
        
    }
    h3 {
        margin: 0;
        font-weight: normal;
    }
    h3:first-child {
        margin-left: -6rem;
        margin-top: 1rem;
        ${media("<=tablet")} {
            margin-left: 0;
        }
    }
    h1 {
        font-weight: normal;
        margin-top: 2rem;
        
    }
    h2 {
        font-weight: normal;
    }
    ul {
        margin: 0;
    }
    li {
        list-style: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

