import styled from 'styled-components'

export default function Gallery() {
    return (
        <SectionContainer>
            <h3>
                Gallery
            </h3>
            <h1>
                Every bit of Joy of Driving
            </h1>
            <ImagesContainer>
                
            </ImagesContainer>
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

const ImagesContainer = styled.div`  
    
`