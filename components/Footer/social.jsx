import styled from "styled-components";
import Image from "next/image";

import { Colors, TitleSection } from "../../assets/variables";
import {
  ImInstagram,
  ImFacebook2,
  ImTwitter,
  ImLinkedin,
  ImYoutube,
} from "react-icons/im";
import logo from "../../public/logo_white.png";

export default function Social() {
  const data = [
    {
      href: "https://www.instagram.com/patriciavilanova93/",
      icon: <ImInstagram />,
    },
    {
      href: "https://www.facebook.com//vilanova.patricia/",
      icon: <ImFacebook2 />,
    },
    {
      href: "https://twitter.com/patriciavilano5/",
      icon: <ImTwitter />,
    },
    {
      href: "https://www.linkedin.com/in/patr%C3%ADcia-vila-nova-b22200b5/",
      icon: <ImLinkedin />,
    },
    {
      href: "https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA",
      icon: <ImYoutube />,
    },
  ];

  return (
    <FooterSection>
      <TitleSection className="margin">Social</TitleSection>
      <IconWrapper>
        {data.map((item, i) => {
          return (
            <a key={i} href={item.href}>
              {item.icon}
            </a>
          );
        })}
      </IconWrapper>
      <LogoContainer>
        <Image src={logo} alt="logo patricia vila nova" />
      </LogoContainer>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;
const IconWrapper = styled.div`
  color: ${Colors.white};
  font-size: 2.2rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  a {
    margin: 0 1rem;
    &:hover {
      color: ${Colors.secondary};
      transition: 0.2s ease-in-out;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 2024px) {
    width: 200px;
    height: 200px;
  }
`;
