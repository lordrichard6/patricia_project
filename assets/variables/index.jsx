import styled from 'styled-components'

export const DeviceSize = {
    mobile: 768,
    tablet: 992,
    tabletBig: 1025,
    laptop: 1324,
    desktop: 2024,
  };

export const Colors = {
    primary: '#062942',
    secondary: '#9f60cc',
    dark: '#1d2124',
    white: '#eee',
}

export const TitleExtra = styled.h1`
    z-index: 10;
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${Colors.white};
    text-shadow: ${Colors.dark} 1px 0 10px;
    
    @media screen and (max-width: 768px) {
        font-size: 48px;
        text-align: center;
        line-height: 46px;
    }
    @media screen and (min-width: 1920px) {
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

    @media screen and (max-width: 768px) {
        font-size: 36px;
        text-align: center;
        line-height: 46px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 64px;
        /* letter-spacing: 1rem; */
    }
`

export const Title2 = styled.h2`
    font-size: 36px;
    font-weight: 400;
    color: ${Colors.white};

    @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: center;
        line-height: 38px;
    }

    @media screen and (min-width: 1920px) {
        /* font-size: 48px;
        letter-spacing: 1rem; */
    }

`

export const Title3 = styled.h3`
    font-size: 28px;
    font-weight: 400;
    color: ${Colors.white};
 
    @media screen and (min-width: 1920px) {
        /* font-size: 48px;
        letter-spacing: 1rem; */
    }
`

export const NormalText = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${Colors.white};

    @media screen and (min-width: 1920px) {
        font-size: 24px;
    }
`

export const SmallText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${Colors.white};

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`