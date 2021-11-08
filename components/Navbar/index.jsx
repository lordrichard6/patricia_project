import styled from "styled-components";
import Image from 'next/image'
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import { FaBars } from "react-icons/fa";
import { Colors, Title3 } from "../../assets/variables";
import Logo from "./logo";
import pattern from '../../assets/images/pattern.png'

export default function Navbar({toggle}) {
  return (
    <>
      <Nav>
      <BG src={pattern}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt='pattern'
            />
        <NavbarContainer>
          <Logo />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true}><Title3>About</Title3></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true}><Title3>Services</Title3></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery" smooth={true}><Title3>Gallery</Title3></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="form" smooth={true}><Title3>Contact</Title3></NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  z-index: 10;
  background: ${Colors.primary};
  height: 60px;
  width: 100%;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

const BG = styled(Image)`
    z-index: 0;
    opacity: 0.1;
`

const NavbarContainer = styled.div`
    position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 80%;
  /* max-width: 1100px; */

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 60px;
`;

const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${Colors.secondary};
  }
`;
