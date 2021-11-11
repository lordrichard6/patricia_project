import styled from 'styled-components'
import Image from 'next/image'

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import picture from '../../assets/images/aboutMe.jpg'

export default function AboutMe() {
    return (
        <SectionContainer id="about">
            <Title2 className='black-font margin-y underline'>
                About Me
            </Title2>
            <InnerContainer>
                <LeftContainer>
                    <Title1 className='black-font'>
                        Energy and dedication
                    </Title1>
                    <NormalText className='black-font'>
                    Each trip represents for us an opportunity to surprise you.
                        <br />
                        <br />
                        Good vibes, energy, sense of humour, friendliness and politeness are among the many qualities that will travel with us.
                        <br />
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                        <br />
                        <br />
                        Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. */}
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
                        <Image
                            src={picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            alt='about me'
                        />
                    <Title3 className='black-font margin-top'>
                        "Driving besides a passion, is a means to meet new people and share moments"
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
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .black-font {
        color: ${Colors.dark}
    }
`

const InnerContainer = styled.div`  
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
    @media screen and (min-width: 1920px) {
        width: 50vw;
    }
`

const LeftContainer = styled.div` 
    width: 50%;
    height: 100%;
    padding-right: 0.5rem;
    color: ${Colors.primary};

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding-right: 0;
        margin-bottom: 1.5rem;
    }
`

const RightContainer = styled.div`
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 0.5rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }
`