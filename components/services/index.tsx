import styled from 'styled-components'
import Image from 'next/image'

import service_01 from '../../assets/images/service01.jpg'
import service_02 from '../../assets/images/service02.jpg'
import service_03 from '../../assets/images/service03.jpg'
import pattern from '../../assets/images/pattern.png'

export default function Services() {
    return (
        <SectionContainer>
            <BG src={pattern} 
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
            <h3>
                Services
            </h3>
            <h1>
                Every bit of Joy of Driving
            </h1>
            <ServicesContainer>
                <Service>
                    <ServiceImage
                        src={service_01}
                        height={600}
                        width={400}
                        objectFit='cover'
                        alt='service 1'
                    />
                    <Info>
                        <h1>service #1</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                        </p>
                    </Info>

                </Service>
                <Service>
                    <ServiceImage
                        src={service_02}
                        height={600}
                        width={400}
                        objectFit='cover'
                        alt='service 1'
                    />
                    <Info>
                        <h1>service #2</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                        </p>
                    </Info>

                </Service>
                <Service>
                    <ServiceImage
                        src={service_03}
                        height={600}
                        width={400}
                        objectFit='cover'
                        alt='service 1'
                    />
                    <Info>
                        <h1>service #3</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                        </p>
                    </Info>

                </Service>
            </ServicesContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #062942;
    color: #fff;
    padding: 20px;
    h1, h3 {
        font-weight: normal;
        z-index: 2;
    }
`

const BG = styled(Image)`
    z-index: 1;
    opacity: 0.1;
`

const ServicesContainer = styled.div`  
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4rem;
`

const Service = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    /* background-color: lightblue; */
    width: 14rem;
    /* height: 25rem; */
`

const ServiceImage = styled(Image)`
    height: 25rem;
`

const Info = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-weight: normal;
    }
    p {
        margin: 0;
    }
`

