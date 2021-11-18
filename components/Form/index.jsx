import styled from "styled-components";
import Image from "next/image";

import { Colors, TitleSection, Text } from "../../assets/variables";
import background from "../../public/images/form.jpg";

export default function Form() {
  return (
    <SectionContainer color={Colors.white}>
      <Background src={background} layout="fill" objectFit="cover" />
      <FormContainer>
        <TitleSection id="form">Book a Service Now</TitleSection>
        <Text>Please fill the form below</Text>
        <form>
          <input
            type="text"
            name="name"
            // value='Name'
            placeholder="Name"
          />
          <input
            type="text"
            name="number"
            // value='Phone Number'
            placeholder="Phone Number"
          />
          <input
            type="email"
            name="email"
            // value='Email'
            placeholder="Email"
          />
          <textarea
            name="message"
            // value='Message'
            placeholder="Message"
          />
        </form>
      </FormContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;

  @media screen and (max-width: 1024px) {
    padding: 6rem 0;
  }
  @media screen and (min-width: 2024px) {
    min-height: 100vh;
    padding: 10rem 0;
  }
`;

const Background = styled(Image)`
  z-index: -1;
`;

const FormContainer = styled.div`
  width: 45%;
  min-height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  border-radius: 5px;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: url("/pattern.png"), ${Colors.primary};
  color: ${Colors.white};

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media screen and (min-width: 2024px) {
    width: 25%;
  }

  form {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    color: ${Colors.dark};
    margin-top: 2rem;

    input {
      width: 95%;
      height: 60px;
      background: #eee;
      border-radius: 5px;
      border: 0;
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 10px;
      font-size: 20px;

      @media screen and (max-width: 768px) {
        width: 90%;
        height: 40px;
        font-size: 16px;
      }
    }
    textarea {
      width: 95%;
      background: #eee;
      border-radius: 5px;
      border: 0;
      margin-top: 5px;
      padding: 10px;
      min-height: 200px;
      font-size: 20px;

      @media screen and (max-width: 768px) {
        width: 90%;
        font-size: 16px;
      }
    }
  }
`;
