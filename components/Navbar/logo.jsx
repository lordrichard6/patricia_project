import styled from "styled-components";
import Image from "next/image";

import logo from "../../public/logo.png";
import { Title3 } from '../../assets/variables'

export default function Logo(props) {
  return (
      <LogoWrapper>
          <LogoImg href="/">
          <Image 
              src={logo} 
              height={100}
              width={100}
              alt="logo patricia vila nova" 
              objectFit='cover'
              objectPosition='center'
          />
          </LogoImg>
          <Title3>Carapau Service</Title3>
      </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
  }
`;
const LogoImg = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

