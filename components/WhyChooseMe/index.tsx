import styled from 'styled-components'

export default function WhyChooseMe() {
    return (
        <SectionContainer>
            <LeftContainer>
                <LeftImage />
            </LeftContainer>
            <RightContainer>
                <h3>
                    Why choose Us?
                </h3>
                <h1>
                    What you will<br/>enjoy with our service.
                </h1>
                <h3>
                    Each journey with fun and security
                </h3>
                <h2>
                    PVN - Privat Chauffeur is:
                </h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Iaculis tellus, faucibus volutpat fusce consequat in.
                </p>
            </RightContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const LeftContainer = styled.div` 
    position: relative;
    width: 40%;
    height: 100%;
    margin-right: 0.5rem;
    background: linear-gradient(259.91deg, #7F7FD5 -2.37%, #86A8E7 50.2%, #91EAE4 104.95%);
`

const LeftImage = styled.div`
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0;
    margin-left: 6rem;
    width: 100%;
    height: 80%;
    background: lightgreen;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 6rem;
    /* background: lightblue; */
    h3 {
        margin: 0;
        font-weight: normal;
    }
    h3:first-child {
        margin-left: -6rem;
        margin-top: 1rem;
    }
    h1 {
        font-weight: normal;
        margin-top: 2rem;
        
    }
    h2 {
        font-weight: normal;
    }
    ul {
        margin: 0;
    }
    li {
        list-style: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

