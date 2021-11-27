import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../assets/variables";
import pink from "../../public/images/form_side.jpg";
import qr from "../../public/qr_code.png";

export default function Form() {
  return (
    <ElementsWrapper>
      <ImageWrapper>
        <QRWrapper>
          <Image
            src={qr}
            objectFit="cover"
            objectPosition="center"
            alt="qr code"
          />
        </QRWrapper>
        <Image
          src={pink}
          objectFit="cover"
          layout="responsive"
          objectPosition="center"
          alt="pink"
        />
      </ImageWrapper>

      <FormContainer>
        <h2 id="form">Book a Service Now</h2>
        <form>
          <InputGroup>
            <input
              type="text"
              name="name"
              // value='Name'
              placeholder="Name"
            />
          </InputGroup>
          <InputGroup>
            <input
              type="text"
              name="number"
              // value='Phone Number'
              placeholder="Phone Number"
            />
          </InputGroup>
          <InputGroup>
            <input
              type="email"
              name="email"
              // value='Email'
              placeholder="Email"
            />
          </InputGroup>
          <InputGroup>
            <textarea
              name="message"
              // value='Message'
              placeholder="Message"
            />
          </InputGroup>
        </form>
      </FormContainer>
    </ElementsWrapper>
  );
}

const ElementsWrapper = styled.div`
  width: 60%;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 4rem 0;
  background: ${Colors.dark};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media screen and (max-width: 764px) {
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (min-width: 2024px) {
    width: 45%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  /* height: 100%; */

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: ${Colors.dark};
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 90% !important;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 2rem 0;
  }

  @media screen and (min-width: 2024px) {
    width: 50%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${Colors.white};

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  form {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 2rem;
  }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 33px;
  border-bottom: 1px solid rgb(255, 255, 255);

  input {
    outline: none;
    margin: 0;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    width: 100%;
    font-family: inherit;
    padding: 5px 0;
    font-size: 18px;
    color: ${Colors.white};
    background: transparent;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 40px;
      font-size: 16px;
    }
  }

  textarea {
    width: 100%;
    outline: none;
    margin: 0;
    border: none;
    background: transparent;
    font-family: inherit;
    color: ${Colors.white};
    border-radius: 5px;
    border: 0;
    margin-top: 5px;
    min-height: 200px;
    font-size: 18px;

    @media screen and (max-width: 768px) {
      width: 90%;
      font-size: 16px;
    }
  }
`;
