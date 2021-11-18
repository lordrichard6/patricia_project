import styled from "styled-components";
import Image from 'next/image'
import { Link as LinkScroll } from "react-scroll";

import { FaTimes } from "react-icons/fa";
import { Colors, Title3 } from "../../assets/variables";
import pattern from '../../public/images/pattern.png'

export default function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <BG src={pattern}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                alt='pattern'
            />
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink onClick={toggle} to='about' smooth={true}><Title>About</Title></SidebarLink>
              <SidebarLink onClick={toggle} to='services' smooth={true}><Title>Services</Title></SidebarLink>
              <SidebarLink onClick={toggle} to='gallery' smooth={true}><Title>Gallery</Title></SidebarLink>
              <SidebarLink onClick={toggle} to='form' smooth={true}><Title>Contact</Title></SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${Colors.primary};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const BG = styled(Image)`
    z-index: 0;
    opacity: 0.1;
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
`

const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
`

const Title = styled(Title3)`
    transition: 0.2s ease-in-out;
    cursor: pointer;
    z-index: 200;
    &:hover {
        color: ${Colors.secondary};
        transition: 0.2s ease-in-out;
    }
`