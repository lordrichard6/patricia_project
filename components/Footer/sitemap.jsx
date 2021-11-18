import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

import { Colors, TitleSection, Text } from "../../assets/variables";

export default function Sitemap() {
  const data = [
    {
      to: "header",
      text: "Go to top",
    },
    {
      to: "about",
      text: "About",
    },
    {
      to: "services",
      text: "Services",
    },
    {
      to: "hobby",
      text: "Hobbies",
    },
    {
      to: "services",
      text: "Gallery",
    },
    {
      to: "form",
      text: "Contact",
    },
  ];

  return (
    <FooterSection>
      <TitleSection className="margin">Sitemap</TitleSection>
      <div>
        {data.map((item, i) => {
          return (
            <LinkScroll
              key={i}
              className="link"
              to={item.to}
              smooth={true}
              duration={600}
            >
              <Text className="font">{item.text}</Text>
            </LinkScroll>
          );
        })}
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }

  .margin {
    margin-bottom: 1rem;
  }

  .link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: ${Colors.secondary};
    }
  }
  .font {
    font-size: 1.6rem;
    padding: 2px 0;
    letter-spacing: 2px;
  }
`;
