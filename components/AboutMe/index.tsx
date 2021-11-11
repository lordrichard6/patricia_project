import styled from 'styled-components'
import Image from 'next/image'

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import picture from '../../assets/images/aboutMe.jpg'

export default function AboutMe() {
    const data = {
            title: 'Energy and dedication',
            text: `Each trip represents for us an opportunity to surprise you.
                    Good vibes, energy, sense of humour, friendliness and politeness 
                    are among the many qualities that will travel with us.
            `,
            picture: picture,
            alt: 'patricia',
            quote: 'Driving besides a passion, is a means to meet new people and share moments'
    }
        
    

    return (
        <SectionContainer id="about">
            <Title2 className='black-font margin-y underline'>
                About Me
            </Title2>
            <InnerContainer>
                <LeftContainer>
                    <Title1 className='black-font'>
                        {data.title}
                    </Title1>
                    <NormalText className='black-font'>
                        {data.text}
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
                            src={data.picture}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center'
                            alt={data.alt}
                        />
                    <Title3 className='black-font margin-top'>
                       {data.quote}
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