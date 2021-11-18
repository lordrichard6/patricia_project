import styled from "styled-components";

import { BsHouseFill, BsTelephoneFill, BsMailbox2 } from "react-icons/bs";
import { TitleSection, Text } from "../../assets/variables";

export default function Contact() {
  const data = [
    {
      icon: <BsHouseFill className="small-icons" />,
      info: "8212 Neuhausen Am Rheinfall - Switzerland",
    },
    {
      icon: <BsTelephoneFill className="small-icons" />,
      info: "+41 76 816 91 11",
    },
    {
      icon: <BsMailbox2 className="small-icons" />,
      info: "patriciavilanova93@gmail.com",
    },
  ];

  return (
    <FooterSection>
      <TitleSection className="margin">Contact</TitleSection>
      <ContactWrapper>
        {data.map((item, i) => {
          return (
            <ContactItem key={i}>
              {item.icon}
              <Text>{item.info}</Text>
            </ContactItem>
          );
        })}
      </ContactWrapper>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }

  .margin {
    margin-bottom: 1rem;
  }

  .small-icons {
    font-size: 1.5rem;
    margin: 0 0.5rem;

    @media screen and (min-width: 2024px) {
      width: 2.5rem;
    }
  }
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 4px 0;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;
