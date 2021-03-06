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
import logo from "../../public/logo_w.png";

export default function Social() {
  const data = [
    {
      href: "https://www.instagram.com/sardinhadrive/",
      icon: <ImInstagram />,
    },
    {
      href: "https://www.facebook.com/sardinhadrive",
      icon: <ImFacebook2 />,
    },
    {
      href: "https://twitter.com/SardinhaDrive",
      icon: <ImTwitter />,
    },
    {
      href: "https://www.linkedin.com/company/sardinha-drive",
      icon: <ImLinkedin />,
    },
    // {
    //   href: "https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA",
    //   icon: <ImYoutube />,
    // },
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
  width: 250px;
  height: 100px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 100px;
  }
  @media screen and (min-width: 2024px) {
    width: 350px;
    height: 150px;
  }
`;
