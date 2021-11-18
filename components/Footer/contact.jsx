import styled from "styled-components";
import { BsHouseFill, BsTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { Colors, Title2, NormalText, SmallText } from "../../assets/variables";

export default function Contact() {
  return (
    <FooterSection>
      <Title2 className="center">Contact</Title2>
      <div className="info-container">
        <adress className="adress flex-row">
          <BsHouseFill className="small-icons" />
          <NormalText>8212 Neuhausen Am Rheinfall - Switzerland</NormalText>
        </adress>
        <adress className="telephone flex-row">
          <BsTelephoneFill className="small-icons" />
          <NormalText>+41 76 816 91 11</NormalText>
        </adress>
        <adress className="email flex-row">
          <BsMailbox2 className="small-icons" />
          <NormalText>patriciavilanova93@gmail.com</NormalText>
        </adress>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
      margin: 1rem 0;
    }

  .link {
      cursor: pointer;
      &:hover {
          text-decoration: underline;
          color: ${Colors.secondary};
      }
  }
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
    }
  }
  .small-icons {
    font-size: 1.5rem;
    color: ${Colors.white};
    margin: 0 0.5rem;

    @media screen and (min-width: 1920px) {
      width: 2.5rem;
    }
  }
  .icons {
    color: ${Colors.white};
    font-size: 2.2rem;
    a {
      margin: 0 1rem;
      &:hover {
        color: ${Colors.secondary};
        transition: 0.2s ease-in-out;
      }
    }
  }
`;