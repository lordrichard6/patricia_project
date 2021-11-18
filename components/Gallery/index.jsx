import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { FaWindowClose } from "react-icons/fa";
import { Colors, Title1, Title2 } from "../../assets/variables";
import { gallery } from '../../assets/data'
import pattern from "../../public/images/pattern.png";


export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <SectionContainer id="gallery" className="padding-y">
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Title>
        <Title2 className="underline margin-y">Gallery</Title2>
        <Title1>This is me without (and with) filters.</Title1>
      </Title>
      <div
        onClick={() => setModel(false)}
        className={model ? "model open" : "model"}
      >
        <img src={tempImgSrc} />
        <FaWindowClose onClick={() => setModel(false)} />
      </div>
      <ImagesContainer>
        {gallery.map((item, index) => {
          return (
            <div key={index} className="pics grid-images">
              <Image
                src={item.imgSrc}
                height={item.height}
                width={item.width}
                alt={item.alt}
                objectFit="cover"
                objectPosition="center"
                onClick={() => getImg(item.imgSrc)}
              />
            </div>
          );
        })}
      </ImagesContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.primary};

  @media screen and (max-width: 1024px) {
    padding-bottom: 8rem;
    padding-top: 4rem;
  }
  @media screen and (min-width: 1920px) {
    height: 120vh;
  }

  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.dark};
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
  }
  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .model img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }
  .model.open svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 3rem;
    height: 3rem;
    padding: 5px;
    color: ${Colors.white};
    cursor: pointer;
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

  @media screen and (max-width: 1024px) {
    columns: 2;
  }
  @media screen and (min-width: 1920px) {
    width: 60vw;
  }

  .pics {
    --webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    :hover {
      filter: opacity(0.7);
    }
  }

  .grid-images {
    display: flex;
    margin-bottom: 10px;
    position: relative;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
