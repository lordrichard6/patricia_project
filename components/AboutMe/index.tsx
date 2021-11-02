import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import picture from '../../assets/images/aboutMe.jpg'

export default function AboutMe() {
    return (
        <SectionContainer id="aboutMe">
            <LeftContainer>
                <h1>
                    Comfort and
                    Quality come first
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                    <br />
                    <br />
                    Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                </p>
                <LeftImage
                    src={picture}
                    height={200}
                    width={400}
                    objectFit='cover'
                    alt='about me'
                />
            </LeftContainer>
            <RightContainer>
                <Image
                    src={picture}
                    height={600}
                    width={600}
                    objectFit='cover'
                    alt='about me'
                />
                <h3>
                    “I have a passion to drive and social interaction and i think the current available services are overrated. Therefore, i decided
                    to create my own brand.”
                </h3>
                <p>
                    Patricia Vila Nova
                </p>
            </RightContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    width: 80%;
    min-height: 100vh;
    margin: 0;
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${media("<=phone")} {
        width: 100%;
        padding-left: 4rem;
        padding-right: 4rem;
        flex-direction: column;
    }
`

const LeftContainer = styled.div`  
    width: 50%;
    height: 100%;
    margin-right: 0.5rem;
    ${media("<=phone")} {
        width: 100%;
        margin: 0;
    }
    h1 {
        font-size: 2.5rem;
        font-weight: normal;
        ${media("<=phone")} {
            font-size: 2rem;
        }
    }
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 0.5rem;
    ${media("<=phone")} {
        width: 100%;
        margin: 0;
    }
    h3 {
        font-weight: normal;
        font-size: 1.5rem;
    }
`

const LeftImage = styled(Image)` 
    ${media("<=phone")} {
        display: none;
    }
`