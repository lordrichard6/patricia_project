import styled from 'styled-components'

export default function Gallery() {
    return (
        <SectionContainer>
            <Title>
                <h3>
                    Gallery
                </h3>
                <h1>
                    Every bit of Joy of Driving
                </h1>
            </Title>

            <ImagesContainer>

                <Picture1 />
                <Picture2 />

                <Picture3 />
                <Picture4 />

                <Picture5 />
                <Picture6 />
                
            </ImagesContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`  
    width: 100%;
    background-color: lightblue;
`

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 4fr);
    grid-gap: 10px;
`

const Picture1 = styled.div`
    grid-row: 1 / 1;
    min-height: 100px;
    background-color: lightblue;
`

const Picture2 = styled.div`
    grid-row: 1 / 4;
    min-height: 100px;
    background-color: lightblue;
`

const Picture3 = styled.div`
    grid-row: 1 / 6;
    min-height: 100px;
    background-color: lightblue;
`

const Picture4 = styled.div` 
    grid-row: 2 / 6;
    min-height: 100px;
    background-color: lightblue;
`

const Picture5 = styled.div`
    grid-row: 5 / 10;
    min-height: 100px;
    background-color: lightblue;
`

const Picture6 = styled.div`
    grid-row: 7 / 10;
    min-height: 100px;
    background-color: lightblue;
`

