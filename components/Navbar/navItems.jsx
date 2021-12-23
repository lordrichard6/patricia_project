import styled from "styled-components";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import { Headline4 } from "../../assets/variables/typography";
import { Items } from "../../assets/data/navigation";

export default function NavItems() {
  return (
    <NavMenu>
      {Items.map((item, i) => {
        return (
          <NavItem key={i}>
            <Link href={item.to}>
              <NavLinks>
                <Headline4 color={Colors.white}>{item.name}</Headline4>
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
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: 0.1s ease-in-out;
    background-color: ${Colors.terciary};
    border-radius: 100px;
  }
`;
