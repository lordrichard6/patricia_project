import styled from "styled-components";
import Image from "next/image";
import media from "css-in-js-media";

import {
  Colors,
  Title1,
  Title2,
  Title3,
  NormalText,
} from "../../assets/variables";
import pattern from "../../assets/images/pattern.png";
import picture_01 from "../../assets/images/gal01.jpg";
import picture_02 from "../../assets/images/gal02.jpg";
import picture_03 from "../../assets/images/gal03.jpg";
import picture_04 from "../../assets/images/gal04.jpg";
import picture_05 from "../../assets/images/gal05.jpg";
import picture_06 from "../../assets/images/gal06.jpg";

export default function Gallery() {
  return (
    <SectionContainer>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Title>
        <Title2 className="underline">Gallery</Title2>
        <Title1>This is me without(and with) filters.</Title1>
      </Title>

      <ImagesContainer>
        <div className="grid-images">
          <Image
            height={300}
            width={400}
            src={picture_01}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={500}
            width={400}
            src={picture_02}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={400}
            width={400}
            src={picture_03}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={400}
            width={400}
            src={picture_04}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={500}
            width={400}
            src={picture_05}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={300}
            width={400}
            src={picture_06}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </ImagesContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.primary};
  padding-bottom: 4rem;
  padding-top: 4rem;
  .underline {
    text-decoration: underline;
  }
  .black-font {
    color: ${Colors.dark};
  }
`;

const BG = styled(Image)`
  z-index: 1;
  opacity: 0.1;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;

const ImagesContainer = styled.div`
  z-index: 1;
  width: 80vw;
  columns: 3;
  column-gap: 10px;
  text-align: center;
  ${media("<=tablet")} {
    /* width: 90%; */
    columns: 2;
  }
  .grid-images {
    display: inline-block;
    margin-bottom: 10px;
    position: relative;
  }
  .grid-images img {
    width: 100%;
  }
`;
