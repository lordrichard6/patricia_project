import styled from "styled-components";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import { Headline4 } from "../../assets/variables/typography";
import { about, social } from "../../assets/data/footer";
import { Items } from "../../assets/data/navigation";

export default function Left() {
  return (
    <Container>
      <Element>
        <Headline4 color={Colors.white}>{about.quote}</Headline4>
      </Element>
      
      <Element>
        <Headline4 color={Colors.white}>Sitemap</Headline4>
        {Items.map((item, i) => {
          return (
            <Link key={i} href={item.to}>
              <NavLinks>
                <Headline4 color={Colors.white}>{item.name}</Headline4>
              </NavLinks>
            </Link>
          );
        })}
      </Element>
      <Element>
        <Headline4 color={Colors.white}>Follow Us</Headline4>
        <IconWrapper>
          {social.map((item, i) => {
            return (
              <a key={i} href={item.href}>
                {item.icon}
              </a>
            );
          })}
        </IconWrapper>
      </Element>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Element = styled.div`
  display: flex;
  margin: 16px 0;
`;


const IconWrapper = styled.div`
  color: ${Colors.white};
  font-size: 2.2rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  a {
    margin: 0 1rem;
    &:hover {
      color: ${Colors.secondary};
      transition: 0.2s ease-in-out;
    }
  }
`;

const NavLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  height: 100%;
  cursor: pointer;

  h4 {
    font-size: 18px;
  }
`;
