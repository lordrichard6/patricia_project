import styled from "styled-components";
import Link from "next/link";
import { LinkScroll } from "react-scroll";

import { Colors } from "../../assets/variables";
import { Items } from "../../assets/data/navigation";

export default function NavItems() {

  return (
    <NavMenu>
      {Items.map((item, i) => {
        return (
          <NavItem key={i}>
            <Link href={item.to}>
              <NavLinks
              // smooth={true}
              // duration={600}
              // spy={true}
              // offset={80}
            >
              <Name>{item.name}</Name>
            </NavLinks>
            </Link>
            
          </NavItem>
        );
      })}
    </NavMenu>
  );
}

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 60px;
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    /* transition: 0.2s ease-in-out; */
    border-bottom: 3px solid ${Colors.secondary};
  }

  &.active {
    border-bottom: 3px solid ${Colors.secondary};
  }
`;
const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;

  &.active {
    border-bottom: 3px solid ${Colors.secondary};
  }
`;
