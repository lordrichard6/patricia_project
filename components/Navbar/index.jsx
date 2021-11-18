import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { Colors } from "../../assets/variables";
import Logo from "./logo";
import NavItems from "./navItems";


export default function Navbar({ toggle }) {
  return (
    <>
      <Nav id="top">
        <NavbarContainer>
          <Logo />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavItems />
        </NavbarContainer>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  z-index: 10;
  background: url("/pattern.png"), ${Colors.primary};
  height: 60px;
  width: 100%;
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

const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 80%;

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
