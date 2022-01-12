import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo_noLetter.png";
import { Colors } from "../../assets/variables";
import { Headline4 } from "../../assets/variables/typography";

export default function Logo() {

  return (
    <LogoWrapper>
      <Link href="/">
        <LogoImg>
          <Image
            src={logo}
            alt="logo sardinha drive"
            objectFit="cover"
            objectPosition="center"
          />
        </LogoImg>
      </Link>
      <Headline4 color={Colors.dark}>Sardinha Drive</Headline4>
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
  cursor: pointer;
`;
