import styled from 'styled-components'

export default function AboutMe() {
    return (
        <SectionContainer>
            <LeftContainer>
                <LeftImage />
                <h3>
                    “I have a passion to drive and social interaction and i think the current available services are overrated. Therefore, i decided
                    to create my own brand.”
                </h3>
                <p>
                    Patricia Vila Nova
                </p>
            </LeftContainer>
            <RightContainer>
                <h1>
                    Comfort and
                    Quality come first
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in. Quam tincidunt congue turpis non massa. Augue euismod sit lobortis metus, tincidunt aliquet quam ut mauris.
                    <br/>
                    <br/>
                    Maecenas nisl, donec mollis mauris. Accumsan placerat adipiscing mauris enim interdum hac pretium. Sit eu leo risus odio non eu dolor. Iaculis gravida viverra vulputate sed elit. Egestas sagittis amet eu malesuada. Massa nibh massa purus odio pharetra, tellus accumsan tincidunt.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis tellus, faucibus volutpat fusce consequat in.
                </p>
                <RightImage />
            </RightContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    width: 80%;
    height: 100vh;
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const LeftContainer = styled.div`  
    width: 50%;
    height: 100%;
    margin-right: 0.5rem;
    /* background: darkGray; */
    h3 {
        font-weight: normal;
    }
`

const LeftImage = styled.div`  
    width: 100%;
    height: 70%;
    background: lightgreen;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 0.5rem;
    /* background: lightblue; */
    h1 {
        font-weight: normal;
    }
`

const RightImage = styled.div` 
    align-self: flex-end;
    width: 100%;
    height: 40%;
    background: darkcyan;
`