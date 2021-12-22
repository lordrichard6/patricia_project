import styled from "styled-components";
import Image from "next/image";

import logo from "../../public/logo_noLetter.png";
import { Colors, TitleSmall } from "../../assets/variables";

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImg href="/">
        <Image
          src={logo}
          // height={100}
          // width={100}
          alt="logo patricia vila nova"
          objectFit="cover"
          objectPosition="center"
        />
      </LogoImg>
      <TitleSmall color={Colors.white}>Sardinha Drive</TitleSmall>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
  }
`;

const LogoImg = styled.a`
  width: 40px;
  height: auto;
  margin-right: 0.5rem;
`;
