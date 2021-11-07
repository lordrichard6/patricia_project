import styled from 'styled-components'
import Image from 'next/image'
import media from "css-in-js-media";

import { Colors, Title1, Title2, Title3, NormalText } from '../../assets/variables'
import service_01 from '../../assets/images/service01.jpg'
import service_02 from '../../assets/images/service02.jpg'
import service_03 from '../../assets/images/service03.jpg'
import pattern from '../../assets/images/pattern.png'

export default function Services() {
    return (
        <SectionContainer id="services">
            <BG src={pattern}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
            <InnerContainer>
                <Title2 className='underline'>
                    Services
                </Title2>
                <Title1 className='margin-bottom'>
                    Every bit of Joy of Driving
                </Title1>
                <ServicesContainer>
                    <Service>
                        <Image
                            src={service_01}
                            height={600}
                            width={400}
                            objectFit='cover'
                            alt='service 1'
                        />
                        <Info>
                            <Title3 className='margin-top'>service #1</Title3>
                            <NormalText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                            </NormalText>
                        </Info>

                    </Service>
                    <Service>
                        <Image
                            src={service_02}
                            height={600}
                            width={400}
                            objectFit='cover'
                            alt='service 1'
                        />
                        <Info>
                            <Title3 className='margin-top'>service #2</Title3>
                            <NormalText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                            </NormalText>
                        </Info>

                    </Service>
                    <Service>
                        <Image
                            src={service_03}
                            height={600}
                            width={400}
                            objectFit='cover'
                            alt='service 1'
                        />
                        <Info>
                            <Title3 className='margin-top'>service #3</Title3>
                            <NormalText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                            </NormalText>
                        </Info>

                    </Service>
                </ServicesContainer>
            </InnerContainer>

        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    position: relative;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.primary};
    padding-bottom: 4rem;
    padding-top: 4rem;

    ${media("<=tablet")} {
        /* padding: 4px; */
    }
    ${media(">largeDesktop")} {
        min-height: 100vh;
    }
    
    .underline {
        text-decoration: underline;
    }
    .margin-bottom {
        margin-bottom: 4rem;
    }
    .margin-top {
        margin-top: 2rem;
    }
`

const InnerContainer = styled.div`  
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media(">largeDesktop")} {
        width: 60vw;
    }
`

const BG = styled(Image)`
    z-index: 1;
    opacity: 0.1;
`

const ServicesContainer = styled.div`
    z-index: 2;
    display: flex;

    ${media("<=tablet")} {
        flex-direction: column;
    }
`

const Service = styled.div`
    align-self: center;
    display: grid;
    padding: 2rem;

    ${media("<=desktop", ">tablet")} {
        padding: 1rem;
    }
    ${media(">largeDesktop")} {
        /* width: 20rem; */
    }
`

const Info = styled.div`
    /* flex-grow: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;
`

