import styled from 'styled-components'
import Image from 'next/image'

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import { BsCheckSquareFill } from "react-icons/bs";
import picture from '../../assets/images/whyChooseMe.jpg'


export default function WhyChooseMe() {
    return (
        <SectionContainer>
            <Title2 className='underline black-font'>
                Why choose Us?
            </Title2>
            <InnerContainer>
                <LeftContainer>
                    <Image
                        src={picture}
                        objectFit='cover'
                        alt='why choose me'
                    />
                </LeftContainer>
                <RightContainer>
                    <Title1 className='black-font margin-y'>
                        What you will enjoy with our service.
                    </Title1>
                    <Title3 className='black-font'>
                        Patricia Vila Nova - Privat Chauffeur is:
                    </Title3>
                    <QualitiesContainer>
                        <div>
                            <Icon/><TextBlack>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBlack>
                        </div>
                        <div>
                            <Icon/><TextBlack>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBlack>
                        </div>
                        <div>
                            <Icon/><TextBlack>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBlack>
                        </div>
                    </QualitiesContainer>
                    <TextBlack>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Iaculis tellus, faucibus volutpat fusce consequat in.
                    </TextBlack>
                </RightContainer>
            </InnerContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    position: relative;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .underline {
        text-decoration: underline;
    }
    .black-font {
        color: ${Colors.dark}
    }
`

const InnerContainer = styled.div`  
    width: 80vw;
    min-height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 1920px) {
        width: 60vw;
    }
`

const LeftContainer = styled.div` 
    position: relative;
    width: 50%;
    height: 100%;
    margin-right: 1rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-right: 0;
        margin-top: 1rem;
    }
`

const RightContainer = styled.div`
    width: 50%;
    margin-left: 1rem;
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0;
    }
`

const QualitiesContainer = styled.div`
    padding-left: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;

    div {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    @media screen and (max-width: 1024px) {
        padding: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

const Icon = styled(BsCheckSquareFill)`
    color: ${Colors.primary};
    font-size: 2rem;
    justify-self: center;
    margin-right: 1rem;
`

const TextBlack = styled(NormalText)`
    color: ${Colors.dark};
    padding-top: 1rem;
    padding-bottom: 1rem;
`

