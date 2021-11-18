import styled from "styled-components";
import Image from "next/image";

import { Colors, Title2, NormalText, SmallText } from "../../assets/variables";
import {
  ImInstagram,
  ImFacebook2,
  ImTwitter,
  ImLinkedin,
  ImYoutube,
} from "react-icons/im";
import logo from "../../public/logo.png";

export default function Social() {
  return (
    <FooterSection>
      <Title2>Social</Title2>
      <div className="icons">
        <a href="https://www.instagram.com/patriciavilanova93/">
          <ImInstagram />
        </a>
        <a href="https://www.facebook.com//vilanova.patricia/">
          <ImFacebook2 />
        </a>
        <a href="https://twitter.com/patriciavilano5/">
          <ImTwitter />
        </a>
        <a href="https://www.linkedin.com/in/patr%C3%ADcia-vila-nova-b22200b5/">
          <ImLinkedin />
        </a>
        <a href="https://www.youtube.com/channel/UC9SSRSUEyefD6K3lKpsBWpA">
          <ImYoutube />
        </a>
      </div>
      <LogoContainer>
        <Image
          src={logo}
          height="90px"
          width="90px"
          alt="logo patricia vila nova"
        />
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

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
