import styled from "styled-components";
import Image from "next/image";

import logo from "../../public/logo_w.png";
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
      {/* <TitleSmall color={Colors.white}>Sardinha Drive</TitleSmall> */}
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
  }
`;

const LogoImg = styled.a`
  width: 145px;
  height: 60px;
  margin-right: 0.5rem;
  margin-top: 4px;
`;
