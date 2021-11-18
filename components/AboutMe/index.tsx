import styled from 'styled-components'
import Image from 'next/image'

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import { aboutMe } from '../../assets/data'


export default function AboutMe() {
    return (
        <SectionContainer id="about">
            <Title2 className='black-font margin-y underline'>
                About Me
            </Title2>
            <InnerContainer>
                <LeftContainer>
                    <Title1 className='black-font'>
                        {aboutMe.title}
                    </Title1>
                    <NormalText className='black-font'>
                        {aboutMe.text}
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
                    <ImageWrapper>
                        <Image
                            src={aboutMe.picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            alt={aboutMe.alt}
                        />
                    </ImageWrapper>

                    <Title3 className='black-font margin-top'>
                        {aboutMe.quote}
                    </Title3>
                    <NormalText className='black-font'>
                        Patricia Vila Nova
                    </NormalText>
                </RightContainer>
            </InnerContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.section`  
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1920px) {
        height: 80vh;
    }

    .black-font {
        color: ${Colors.dark};
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 0.5rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }
`

const ImageWrapper = styled.div`  
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`