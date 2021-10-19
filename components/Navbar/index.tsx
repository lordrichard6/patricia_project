import styled from 'styled-components'

export function Navbar() {
    return (
        <Container>
            <InnerContainer>
                <LogoContainer>
                    <h1>Logo</h1>
                </LogoContainer>
                <ItemsContainer>
                    <li><a>Home</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact Me</a></li>
                </ItemsContainer>
            </InnerContainer>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #c4c4c4;
    border-radius: 10rem;
    padding: 0.5rem;
`

const ItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    li {
        padding-right: 1rem;
        padding-left: 1rem;
    }
`
