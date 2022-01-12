import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { Colors } from "../../assets/variables";
import Logo from "./logo";
import NavItems from "./navItems";

export default function Navbar({ toggle }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <Nav id="top" className={navbarClasses.join(" ")}>
      <NavbarContainer>
        <Logo />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavItems />
      </NavbarContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  z-index: 10;
  position: absolute;
  /* top: 0; */
  /* background: ${Colors.primary}; */
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: 32px;

  @media screen and (max-width: 1024px) {
    /* position: sticky;
    top: 0; */
    transition: 0.8s all ease;
    margin-top: 0;
  }

  .scrolled {
    position: fixed;
    top: 0;
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
  @media screen and (min-width: 2024px) {
    width: 70%;
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
    color: ${Colors.dark};
  }
`;
