import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import picture from '../../assets/images/aboutMe.jpg'

export default function AboutMe() {
    return (
        <SectionContainer id="aboutMe">
            <Title2 className='black-font margin underline'>
                About Me
            </Title2>
            <InnerContainer>
                <LeftContainer>
                    <Title1 className='black-font'>
                        Comfort and
                        Quality come first
                    </Title1>
                    <NormalText className='black-font'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                        <br />
                        <br />
                        Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                        <br />
                        <br />
                        Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                    </NormalText>
                    {/* <LeftImage>
                        <Image
                            src={picture}
                            height={400}
                            width={600}
                            objectFit='cover'
                            alt='about me'
                        />
                    </LeftImage> */}

                </LeftContainer>
                <RightContainer>
                        <RightImage
                            src={picture}
                            objectFit='cover'
                            objectPosition='center'
                            alt='about me'
                        />
                    <Title3 className='black-font margin'>
                        “I have a passion to drive and social interaction and i think the current available services are overrated. Therefore, i decided
                        to create my own brand.”
                    </Title3>
                    <NormalText className='black-font'>
                        Patricia Vila Nova
                    </NormalText>
                </RightContainer>
            </InnerContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media("<=tablet")} {
        /* flex-direction: column; */
    }
    ${media(">largeDesktop")} {
        /* height: 120vh; */
    }
    .black-font {
        color: ${Colors.dark}
    }
    .margin {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .underline {
        text-decoration: underline;
    }
`

const InnerContainer = styled.div`  
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
`

const LeftContainer = styled.div`  
    width: 50%;
    height: 100%;
    padding-right: 0.5rem;
    color: ${Colors.primary};
    ${media("<=tablet")} {
        /* width: 100%;
        margin: 0; */
    }
    ${media(">largeDesktop")} {
        margin-right: 1rem;
    }
`

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;  
    margin-left: 0.5rem;
    ${media("<=tablet")} {
        /* width: 100%;
        margin: 0; */
    }
    ${media(">largeDesktop")} {
        margin-left: 1rem;
    }
`

const RightImage = styled(Image)`
    /* margin-bottom: 20px; */
    ${media("<=tablet")} {
    }
    ${media(">largeDesktop")} {
        /* width: 100%; */
    }
`