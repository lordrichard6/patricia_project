import styled from "styled-components";
import Image from "next/image";
import React from "react";

import { IoLocation, IoCall, IoMailOutline } from 'react-icons/io5';
import { Colors } from "../../assets/variables";
import { Headline4 } from "../../assets/variables/typography";
import qr from "../../public/qr_code.png";

export default function Form() {
  return (
    <ElementsWrapper>
      <ContactContainer>
        <h2>Book a service NOW!</h2>
        <div className="element">
          <p><IoLocation /></p>
          <p><a href="https://goo.gl/maps/5djfRgB7kGgrfrsg7">Neuhausen am Rheinfall, CH</a></p>
        </div>
        <div className="element">
          <p><IoCall /></p>
          <p><a href="tel:+41768169111">+41 76 816 91 11</a></p>
        </div>
        <div className="element">
          <p><IoMailOutline /></p>
          <p><a href="mailto: sardinhaplease@gmail.com">sardinhaplease@gmail.com</a></p>
        </div>
        <h2>Available 27/7</h2>
      </ContactContainer>
      <ImageWrapper>
        <Headline4 id="form" color={Colors.white}>
          Book a Service Now
        </Headline4>
        <QRWrapper>
          <Image
            className="handy"
            src={qr}
            objectFit="cover"
            objectPosition="center"
            alt="qr code"
          />
        </QRWrapper>
      </ImageWrapper>
    </ElementsWrapper>
  );
}

const ElementsWrapper = styled.div`
  width: 60%;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 4rem 0;
  background: ${Colors.dark};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media screen and (max-width: 764px) {
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (min-width: 2024px) {
    width: 45%;
  }

  .status-message {
    color: green;
  }
  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0;
  }
  .failed {
    color: red !important;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  min-height: 600px;
  /* height: 100%; */
  background: url("/form_pink.jpg");
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    display: none;
    width: 100%;
    height: 30rem;
  }
  @media screen and (min-width: 2024px) {
    width: 50%;
  }
`;

const QRWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: auto;
  object-fit: cover;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    width: 20%;
  }

  .handy {
    width: 100%;
    height: auto;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;

  h2 {
    color: white;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 2rem;
  }

  h2:first-child {
    margin-bottom: 2rem;
    margin-top: 0;
  }

  .element {
    display: flex;
    justify-content: space-between;
    margin: 0.4rem 0;

    p {
      font-size: 1.5rem;
      color: white;
      margin:0 0.2rem;
      display: flex;
      align-items: center;

      @media screen and (max-width: 560px) {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }

  .handy {
    width: 100%;
    height: auto;
  }
`;
