import styled from 'styled-components'
import Image from 'next/image'

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
                    “Better than one is three or more”
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
                            <Title3 className='margin-top'>Transport from A-B</Title3>
                            <NormalText>
                                Transport from A-B – From Earth to heaven – Well, we can not take to heaven but it similar. Just let us know where we pick you up and where is your destination.
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
                            <Title3 className='margin-top'>Driving around</Title3>
                            <NormalText>
                                Do you need our service for more than 3 hours or for more than 1 day? Do you need to go shopping or travel in Switzerland? Don’t worry, we can help you.
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
                            <Title3 className='margin-top'>Only the driver</Title3>
                            <NormalText>
                                Do you have a car but for some reason you can’t drive or your prefer use your car do the transport? Please, give us the key and we drive your car for you. If you need to take your car to control, or mechanic, we do it for you. Everything for you like Bryan Adams sing.
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

    @media screen and (min-width: 1920px) {
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

    @media screen and (min-width: 1920px) {
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
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 810px) {
        flex-direction: column;
    }
`

const Service = styled.div`
    width: 30%;
    align-self: center;
    display: grid;
    padding: 2rem;

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 1rem;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

