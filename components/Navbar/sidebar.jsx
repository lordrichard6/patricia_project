import styled from "styled-components";
// import { Link as LinkScroll } from "react-scroll";
import Link from 'next/link'

import { FaTimes } from "react-icons/fa";
import { Colors, TitleMain } from "../../assets/variables";
import { Items } from "../../assets/data/navigation";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FaTimes />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {Items.map((item, i) => {
            return (
              <SidebarLink key={i} onClick={toggle} href={item.to} smooth={true}>
                <Title>{item.name}</Title>
              </SidebarLink>
            );
          })}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: ${Colors.primary};
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  color: ${Colors.white};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div``;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
`;

const Title = styled(TitleMain)`
  transition: 0.2s ease-in-out;
  cursor: pointer;
  z-index: 200;

  &:hover {
    color: ${Colors.secondary};
    transition: 0.2s ease-in-out;
  }
`;
