import styled from 'styled-components'
import media from "css-in-js-media";

export default function BannerContactMe() {
    return (
        <SectionContainer>
            <h1>Contact Me</h1>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212121;
    h1 {
        color: #fff;
        font-weight: normal;
        font-size: 8rem;
        ${media("<=tablet")} {
            font-size: 4rem;
        }
    }
`