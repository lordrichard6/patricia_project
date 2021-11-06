import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import picture from '../../assets/images/whyChooseMe.jpg'
// import pattern from '../../assets/images/pattern.png'


export default function WhyChooseMe() {
    return (
        <SectionContainer>
            {/* <BackgroundContainer> */}
                {/* <BG src={pattern}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='pattern'
                /> */}
            {/* </BackgroundContainer> */}

            <Title2 className='underline black-font'>
                Why choose Us?
            </Title2>
            <InnerContainer>
                <LeftContainer>
                    {/* <div> */}
                        {/* <BG src={pattern}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            alt='pattern'
                        /> */}
                    {/* </div> */}

                    {/* <ImageContainer > */}
                    <Image
                        src={picture}
                        objectFit='cover'
                        // layout='fill'
                        alt='why choose me'
                    />
                    {/* </ImageContainer> */}
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
                            <Icon icon={faCheckCircle} /><TextBlack>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBlack>
                        </div>
                        <div>
                            <Icon icon={faCheckCircle} /><TextBlack>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBlack>
                        </div>
                        <div>
                            <Icon icon={faCheckCircle} /><TextBlack>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextBlack>
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
    ${media("<=tablet")} {
        /* flex-direction: column; */
        /* min-height: 100vh; */
        /* align-items: center; */
    }
    .underline {
        text-decoration: underline;
    }
    .black-font {
        color: ${Colors.dark}
    }
`

// const BackgroundContainer = styled.div`  
//     width: 40%;
//     height: 90vh;
//     position: absolute;
//     top: 50%;
//     left: 0;
//     -ms-transform: translateY(-45%);
//     transform: translateY(-45%);
//     /* content: ''; */
//     background: ${Colors.primary};
//     div {
//         width: 100%;
//         height: 100%;
//         position: relative;
//     }
// `

const InnerContainer = styled.div`  
    width: 80vw;
    min-height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${media("<=tablet")} {
        flex-direction: column;
        align-items: center;
    }
    ${media("<=desktop", ">tablet")} {
        flex-direction: column;
        align-items: center;
    }
    ${media(">largeDesktop")} {
        width: 60vw;
    }
`

const LeftContainer = styled.div` 
    position: relative;
    width: 50%;
    height: 100%;
    margin-right: 1rem;
    /* background: #062942; */
    ${media("<=tablet")} {
        width: 100%;
        margin-right: 0;
        margin-top: 1rem;
    }
    ${media("<=desktop", ">tablet")} {
        width: 100%;
        margin-right: 0;
        margin-top: 1rem;
    }
    ${media(">largeDesktop")} {
        /* width: 50%; */
        /* height: 80%; */
    }
`

// const BG = styled(Image)`
//     z-index: 1;
//     opacity: 0.1;
// `

const ImageContainer = styled.div`
    /* z-index: 2; */
    /* position: absolute; */
    /* top: 50%; */
    /* -ms-transform: translateY(-50%); */
    /* transform: translateY(-50%); */
    /* margin: 0; */
    /* margin-left: 6rem; */
    /* width: 100%; */
    /* height: 80%; */
    ${media("<=tablet")} {
        /* display: none; */
    }
`

const RightContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    width: 50%;
    /* height: 100%; */
    margin-left: 1rem;
    ${media("<=tablet")} {
        width: 100%;
        margin: 0;
    }
    ${media("<=desktop", ">tablet")} {
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
    }
    ${media("<=tablet")} {
        padding: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
        /* width: 80%; */
        /* margin: 0; */
    }
`

const Icon = styled(FontAwesomeIcon)`
    color: ${Colors.primary};
    width: 40px;
    margin-right: 1rem;
`

const TextBlack = styled(NormalText)`
    color: ${Colors.dark};
    padding-top: 1rem;
    padding-bottom: 1rem;
`

