import styled from 'styled-components'
import Image from 'next/image'

import pic from '../../assets/images/image_01.jpg'

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

                <div className="grid-images">
                    <Image height={200} width={300} src={pic} alt="" />
                </div>
                <div className="grid-images">
                    <Image height={400} width={300} src={pic} alt="" />
                </div>
                <div className="grid-images">
                    <Image height={300} width={300} src={pic} alt="" />
                </div>
                <div className="grid-images">
                    <Image height={300} width={300} src={pic} alt="" />
                </div>
                <div className="grid-images">
                    <Image height={400} width={300} src={pic} alt="" />
                </div>
                <div className="grid-images">
                    <Image height={200} width={300} src={pic} alt="" />
                </div>

            </ImagesContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`  
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    h1, h3 {
        font-weight: normal;
    }
`

const ImagesContainer = styled.div`
    width: 60%;
    columns: 3;
    column-gap: 10px;
    .grid-images {
        display: inline-block;
        margin-bottom: 10px;
        position: relative;
    }
    .grid-images img {
        width: 100%;
        
    }
`


