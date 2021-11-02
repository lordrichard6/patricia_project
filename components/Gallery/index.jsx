import styled from "styled-components";
import Image from "next/image";

import picture_01 from "../../assets/images/gal01.jpg";
import picture_02 from "../../assets/images/gal02.jpg";
import picture_03 from "../../assets/images/gal03.jpg";
import picture_04 from "../../assets/images/gal04.jpg";
import picture_05 from "../../assets/images/gal05.jpg";
import picture_06 from "../../assets/images/gal06.jpg";

export default function Gallery() {
  return (
    <SectionContainer>
      <Title>
        <h3>Gallery</h3>
        <h1>Every bit of Joy of Driving</h1>
      </Title>

      <ImagesContainer>
        <div className="grid-images">
          <Image
            height={200}
            width={300}
            src={picture_01}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={400}
            width={300}
            src={picture_02}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={300}
            width={300}
            src={picture_03}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={300}
            width={300}
            src={picture_04}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={400}
            width={300}
            src={picture_05}
            alt="patricia vila nova"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="grid-images">
          <Image
            height={200}
            width={300}
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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  h1,
  h3 {
    font-weight: normal;
  }
`;

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
`;
