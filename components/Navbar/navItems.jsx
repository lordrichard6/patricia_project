import styled from "styled-components";
// import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import { Colors } from "../../assets/variables";

export default function NavItems() {
  const data = [
    {
      to: "about",
      name: "About",
    },
    {
      to: "services",
      name: "Services",
    },
    {
      to: "hobby",
      name: "Hobbies",
    },
    {
      to: "gallery",
      name: "Gallery",
    },
    {
      to: "form",
      name: "Contact",
    },
  ];

  return (
    <NavMenu>
      {data.map((item, i) => {
        return (
          <NavItem key={i}>
            <NavLinks
              to={item.to}
              smooth={true}
              duration={600}
              spy={true}
              // offset={80}
            >
              <Name>{item.name}</Name>
            </NavLinks>
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

const NavLinks = styled(LinkScroll)`
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
