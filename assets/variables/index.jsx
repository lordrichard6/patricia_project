import styled from 'styled-components'
import media from "css-in-js-media";

export const Colors = {
    primary: '#062942',
    dark: '#1d2124',
    white: '#eee',
}

export const TitleExtra = styled.h1`
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${Colors.white};
    ${media("<=tablet")} {
        font-size: 48px;
        text-align: center;
        line-height: 46px;
    }
    ${media("<=largeDesktop")} {
        /* font-size: 72px; */
    }
`

export const Title1 = styled.h1`
    font-size: 48px;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin-bottom: 20px;
    color: ${Colors.white};

    ${media("<=tablet")} {
        font-size: 36px;
        text-align: center;
        line-height: 46px;
    }
    ${media(">largeDesktop")} {
        font-size: 64px;
        /* letter-spacing: 1rem; */
    }
`

export const Title2 = styled.h2`
    font-size: 36px;
    font-weight: 400;
    color: ${Colors.white};
    ${media("<=tablet")} {
        font-size: 30px;
        text-align: center;
        line-height: 38px;
    }
    ${media("<=phone")} {
        font-size: 38px;
    }
    ${media(">largeDesktop")} {
        /* font-size: 48px;
        letter-spacing: 1rem; */
    }

`

export const Title3 = styled.h3`
    font-size: 28px;
    font-weight: 400;
    color: ${Colors.white};
    ${media("<=tablet", ">phone")} {
    
    }
    ${media(">largeDesktop")} {
        /* font-size: 48px;
        letter-spacing: 1rem; */
    }
`

export const NormalText = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${Colors.white};

    ${media("<=tablet", ">phone")} {
    
    }
`

export const SmallText = styled.h1`
    font-size: 18px;
    font-weight: 400;
    color: ${Colors.white};

    ${media("<=tablet")} {
        font-size: 14px;
    }
`