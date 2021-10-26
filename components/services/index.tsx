import styled from 'styled-components'

export default function Services() {
    return (
        <SectionContainer>
            <h3>
                Services
            </h3>
            <h1>
                Every bit of Joy of Driving
            </h1>
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <ServicesContainer>
                <Service>
                    <h1>service #1</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Service>
                <Service>
                    <h1>service #2</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Service>
                <Service>
                      <h1>service #3</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Service>
            </ServicesContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ServicesContainer = styled.div`  
    /* background-color: lightgray; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4rem;
`

const Service = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    background-color: lightblue;
    width: 14rem;
    height: 25rem;
    h1 {
        font-weight: normal;
    }
`